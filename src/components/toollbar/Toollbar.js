import {ChatComponent} from '../../core/ChatComponent';
import {$} from '../../core/Dom';
import {resizeHandler} from '../../core/utils';
import {TableSelection} from '../messageItems/TableSelection';
import {createNavigation} from './table.template';
import * as actions from '../../redux/actions';
export class Toollbar extends ChatComponent {
  static className = 'navigation';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['mousedown', 'click'],
      subscribe: ['currentDir'],
      ...options,
    });
  }
  prepare() {
    this.selection = new TableSelection();
  }
  toHTML() {
    return createNavigation([{icon: 'fa-solid fa-bars', title: null}, {icon: 'fa-solid fa-folder', title: 'Все чаты'}, {icon: 'fa-solid fa-folder', title: 'Работа'}]);
  }
  init() {
    super.init();
    this.$dispatch(actions.changeDir('Все чаты'));
    const $item = this.$root.find('[data-dir="1"]');
    this.selection.select($item, 'nav-item__active');
  }
  storeChanged(dir) {
  }
  onClick(event) {
    let $target = $(event.target);
    $target = $target.closest('[data-dir]');
    const isLogo = $target.contains('nav-item__icon_logo');
    if ($target.getAttr('data-dir') == 'update') {
      return this.emitter.emit('click:menuUpdate');
    }
    if ($target.$el && !isLogo) {
      const dir = $target.find('.nav-item__text').text();
      this.selection.select($target, 'nav-item__active');
      this.$dispatch(actions.changeDir(dir));
    } else {
      this.emitter.emit('click:menu');
    }
  }
  onMousedown(event) {
    resizeHandler('.navigation', this);
  }
}
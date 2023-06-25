import {ChatComponent} from '../../core/ChatComponent';
import {$} from '../../core/Dom';
import {getState, resizeHandler} from '../../core/utils';
import {changeDialog} from '../../redux/actions';
import {TableSelection} from './TableSelection';
import {createTable} from './createTable';
// import * as actions from '../../redux/actions';

export class MessageItems extends ChatComponent {
  static className = 'chat-list';
  constructor($root, options = {}) {
    super($root, {
      name: 'MessageItems',
      listeners: ['mousedown', 'click'],
      subscribe: ['currentDir'],
      ...options,
    });
  }
  toHTML(Dir = []) {
    return createTable(Dir);
  }
  prepare() {
    this.selection = new TableSelection();
  }
  init() {
    super.init();
    const state = getState(this);
    const switchDir = state.currentDir;
    const object = state.dialogs.allDirDialog[switchDir];
    this.$root.html(this.toHTML(object));
    const $item = this.$root.find(`[data-item="${state.currentDialog -1}"]`);
    if ($item.$el) {
      this.selection.select($item, 'chat-item-active');
    }
  }
  onMousedown() {
    resizeHandler('.chat-list', this);
  }
  storeChanged(changes) {
    const state = getState(this);
    const switchDir = state.currentDir;
    const object = state.dialogs.allDirDialog[switchDir];
    this.$root.html(this.toHTML(object));
  }
  onClick(event) {
    let $target = $(event.target);
    $target = $target.closest('[data-item]');
    const discust = $target.getAttr('data-item');
    console.log($target);
    if ($target.$el) {
      if (event.shiftKey) {
        this.selection.select($target, 'chat-item-active', true);
      } else {
        this.selection.select($target, 'chat-item-active');
        this.$dispatch(changeDialog(discust));
      }
    }
  }
}
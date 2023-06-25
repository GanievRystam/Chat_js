import {ChatComponent} from '../../core/ChatComponent';
import {$} from '../../core/dom';
import {createMenu} from './createMenu';

export class Menu extends ChatComponent {
  static className = 'Menu';
  constructor($root, options) {
    super($root, {
      name: 'Menu',
      listeners: ['click'],
      ...options,
    });
  }
  toHTML() {
    return createMenu();
  }
  prepare() {
  }
  init() {
    super.init();
    this.emitter.subscribe('click:menu', (item) => {
      const $navigation = $(document.querySelector('.navigation-fixed'));
      const $shadow = $(document.querySelector('.shadow'));
      $navigation.css({left: 0 + 'px'});
      $shadow.css({display: 'block'});
    });
  }
  onClick(e) {
    const $shadow = $(e.target);
    if ($shadow.contains('shadow-hide')) {
      const $navigation = $(document.querySelector('.navigation-fixed'));
      $navigation.css({left: -300 + 'px'});
      $shadow.css({display: 'none'});
    }
    if ($shadow.contains('switch-btn')) {
      if ($shadow.contains('switch-on')) {
        $shadow.removeClass('switch-on');
      } else {
        $shadow.addClass('switch-on');
      }
    }
  }
}
import {ChatComponent} from '../../core/ChatComponent';
import {$} from '../../core/Dom';
import {fade, popsUp} from '../../core/utils';
import {createUpdateToollbar} from './createUpdateToollbar';

export class UpdateToollbar extends ChatComponent {
  static className = 'update-toollbar';
  constructor($root, options = {}) {
    super($root, {
      name: 'UpdateToollbar',
      listeners: ['click'],
      // subscribe: ['currentDialog'],
      ...options,
    });
  }
  init() {
    super.init();
    this.storeChanged();
    this.emitter.subscribe('click:menuUpdate', popsUp);
  }
  toHTML(data) {
    return createUpdateToollbar();
  }
  onClick(e) {
    const target = $(e.target);
    console.log(target);
    if (target.containsClass('shadow') || target.getAttr('data-role') == 'close') {
      const container = $('.update-toollbar');
      fade(container, '-');
    }
  }
}
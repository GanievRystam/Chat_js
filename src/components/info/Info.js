import {ChatComponent} from '../../core/ChatComponent';
import {$} from '../../core/dom';

export class Info extends ChatComponent {
  static className = 'info';
  toHTML() {
    return 'info';
  }
  init() {
    const info = $(this.$root.$el);
    const cssGet = getComputedStyle(this.$root.$el).getPropertyValue('width');
    if (cssGet == '0px') {
      info.addClass('section-none');
    }
  }
}
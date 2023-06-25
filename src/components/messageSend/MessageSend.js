import {ChatComponent} from '../../core/ChatComponent';
import {$} from '../../core/Dom';
import {getState, resizeHandler, scrollDown, timeFormat} from '../../core/utils';
import {createMessage} from './CreateMessage';
import * as actions from '../../redux/actions';

export class MessageSend extends ChatComponent {
  static className = 'window-message';
  constructor($root, options = {}) {
    super($root, {
      name: 'MessageSend',
      listeners: ['mousedown', 'click', 'keyup'],
      subscribe: ['currentDialog'],
      ...options,
    });
  }
  init() {
    super.init();
    this.storeChanged();
    scrollDown('.window-message__chat');
  }
  toHTML(data) {
    return createMessage(data);
  }
  onMousedown(event) {
    resizeHandler('.window-message', this);
  }
  storeChanged() {
    const state = getState(this);
    const currentDir = state.currentDir;
    const currtDg = state.currentDialog.id ? state.currentDialog.id -1 : state.currentDialog -1;
    const currentDialog = state.dialogs.allDirDialog[currentDir][currtDg];
    this.$root.html(this.toHTML(currentDialog.dialog));
    return {currentDir, currentDialog};
  }
  onClick(e) {
    const target = $(e.target);
    const infoContainer = $(document.querySelector('.info'));
    const SendContainer = $('.window-message');
    if (target.getAttr('data-role') === 'window-info') {
      if (infoContainer.contains('section-none')) {
        infoContainer.removeClass('section-none');
        infoContainer.css({width: 250 + 'px'});
        this.$dispatch(actions.tableResize({value: '250px', closestName: '.info'}));
      } else {
        infoContainer.addClass('section-none');
        SendContainer.css({width: '-webkit-fill-available'});
        this.$dispatch(actions.tableResize({value: '0px', closestName: '.info'}));
        this.$dispatch(actions.tableResize({value: '-webkit-fill-available', closestName: '.window-message'}));
      }
    }
  }
  onKeyup(e) {
    e = window.event;
    if (e.code == 'Enter' && !e.ctrlKey) {
      const divGroup = $(document.createElement('div'));
      const userChat = $(document.createElement('div'));
      const spanTime = $(document.createElement('span'));
      const dialog = this.storeChanged();
      const userAnotherChat = $(document.createElement('div'));
      const chat = $(document.querySelector('.window-message__chat'));
      const time = timeFormat(false);
      userChat.addClass('user-chat__message');
      userChat.addClass('my-chat__message');
      userAnotherChat.addClass('user-chat__message');
      divGroup.addClass('user-chat');
      userChat.text(e.target.value);
      userAnotherChat.css({opacity: 0});
      spanTime.addClass('user-chat__date');
      spanTime.text(time);
      userChat.append(spanTime);
      divGroup.append(userAnotherChat);
      divGroup.append(userChat);
      chat.append(divGroup);
      // eslint-disable-next-line
      this.$dispatch(actions.addMessage([{value: e.target.value, time: time, user: 'myuser'}, {id: dialog.currentDialog.id, dir: dialog.currentDir}]));
      e.target.value = '';
      scrollDown('.window-message__chat');
    }
    if (e.ctrlKey && e.code == 'Enter') {
      e.target.value += '\r';
    }
  }
}
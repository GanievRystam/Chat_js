// import {$} from '../core/dom';
import {Page} from '../core/page';
import {Chat} from '../components/chat/Chat.js';
import {Toollbar} from '../components/toollbar/Toollbar.js';
import {MessageSend} from '../components/messageSend/MessageSend.js';
import {MessageItems} from '../components/messageItems/MessageItems.js';
import {Info} from '../components/info/Info.js';
import {createStore} from '../core/createStore.js';
import {rootReducer} from '../redux/rootReducer.js';
import {debounce, storage} from '../core/utils.js';
import {initialState} from '../redux/initialState.js';
import {Menu} from '../components/menu/Menu.js';
import {UpdateToollbar} from '../components/updateToollbar/UpdateToollbar.js';
export class ChatPage extends Page {
  constructor(param = '') {
    super(param);
    this.storeSub = null;
  }
  getRoot() {
    const store = createStore(rootReducer, initialState);
    const stateListener = debounce((state) => {
      storage('chat-state', state);
    }, 300);

    this.storeSub = store.subscribe(stateListener);
    this.chat = new Chat({
      components: [Toollbar, MessageItems, MessageSend, Info, Menu, UpdateToollbar],
      store,
    });
    return this.chat.getRoot();
  }
  afterRender() {
    this.chat.init();
  }
  destroy() {
    this.chat.destroy();
    this.storeSub.unsubscibe();
  }
}
import {$} from '../../core/dom';
import {Emitter} from '../../core/Emitter';
import {StoreSubscriber} from '../../core/StoreSubscriber';
export class Chat {
  constructor(options) {
    this.DEFAULT_STATE = 350;
    this.components = options.components || [];
    this.store = options.store;
    this.emitter = new Emitter();
    this.subscriber = new StoreSubscriber(this.store);
  }
  getWidth(state, className) {
    return (state[className] || this.DEFAULT_STATE);
  }
  getRoot() {
    const $root = $.create('div', 'window');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);

      const component = new Component($el, {
        emitter: this.emitter,
        store: this.store,
      });
      const itemsWidth = this.store.getState().windowsState;
      const width = this.getWidth(itemsWidth, '.'+Component.className);
      $el.html(component.toHTML());
      $root.append($el);
      $el.css({width: width});
      return component;
    });
    return $root;
  }
  init() {
    this.subscriber.subscribeComponents(this.components);
    console.log(this.components);
    this.components.forEach((component) => {
      component.init();
    });
  }
  destroy() {
    this.subscriber.unsubscribeFromStore();
    this.components.forEach((component) => component.destroy());
  }
}
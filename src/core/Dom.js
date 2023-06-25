class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
  text(text) {
    if (typeof text === 'string') {
      this.$el.textContent = text;
      return this;
    }
    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim();
    }
    return this.$el.textContent.trim();
  }
  clear() {
    this.html('');
    return this;
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }
  find(selector) {
    return $(this.$el.querySelector(selector));
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
  closest(selector) {
    return $(this.$el.closest(selector));
  }
  getCoords() {
    return this.$el.getBoundingClientRect();
  }
  contains(className) {
    return this.$el.classList.contains(className);
  }
  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      this.$el.style[key] = styles[key];
    });
  }
  addClass(className) {
    this.$el.classList.add(className);
  }
  removeClass(className) {
    this.$el.classList.remove(className);
  }
  containsClass(className) {
    return this.$el.classList.contains(className);
  }
  getAttr(attribute) {
    return this.$el.getAttribute(attribute);
  }
  addEvent(event, fn) {
    return this.$el.addEventListener(event, fn);
  }
}

export function $(selector) {
  return new Dom(selector);
}
$.create = (tagName, classes = '') =>{
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
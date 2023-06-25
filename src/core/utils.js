import {$} from '../core/Dom';
import * as actions from '@/redux/actions';
export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function resizeble(closestName) {
  return new Promise((resolve) => {
    if (event.target.getAttribute('data-resize')) {
      const $target = $(event.target);
      $target.css({opacity: 1});
      const $parent = $target.closest(closestName);
      const coords = $parent.getCoords();
      let value;
      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;
        $target.css({right: -delta + 'px'});
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        // const limit = {min: getComputedStyle($target.$el.parentNode).minWidth, max: getComputedStyle($target.$el.parentNode).maxWidth};
        $target.css({opacity: 0, right: 0});
        $parent.css({width: value + 'px'});
        resolve({
          value, closestName,
        });
      };
    }
  });
}

export async function resizeHandler(className, context) {
  try {
    const data = await resizeble(className);
    data.value += 'px';
    context.$dispatch(actions.tableResize(data));
  } catch (e) {
    console.warn(e);
  }
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
}

export function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
}

export function timeFormat(all = true) {
  const date = new Date();
  let time;
  const year = date.getFullYear();
  const day = date.getDate();
  const mouth = date.getMonth();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  if (all) {
    time = `${year}:${mouth < 10 ? '0' + (mouth + 1) : mouth + 1}:${day < 10 ? '0' + day : day}:${hours < 10 ? '0' + hours : hours}:${minute < 10 ? '0' + minute : minute}:${seconds}:${miliseconds}`;
  } else {
    time = `${hours < 10 ? '0' + hours : hours}:${minute < 10 ? '0' + minute : minute}`;
  }
  return time;
}

export function debounce(fn, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      // eslint-disable-next-line
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function getState(context) {
  return context.store.getState();
}
export function fade(container, action) {
  let count = 0;
  const fadeInTimer = setInterval( () => {
    if (action == '+') {
      count += 0.1;
      container.$el.style.opacity = count;
    } else {
      count -= 0.1;
      container.$el.style.opacity -= 0.1;
      container.$el.style.opacity;
    }
  }, 25);
  setTimeout(() => {
    clearInterval(fadeInTimer); container.css({display: action == '+' ? 'block' : 'none', opacity: action == '+' ? 1 : 0});
  }, 250);
}
export function popsUp() {
  const popsUp = $('.update-toollbar');
  popsUp.css({display: 'block'});
  fade(popsUp, '+');
}
export function scrollDown(selector) {
  const chatHistory = document.querySelector(selector);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
import {ADD_MESSAGE, CHANGE_DIALOG, CHANGE_DIR, TABLE_RESIZE, GET_DIALOG, CHANGE_STYLE, APPLY_STYLE} from './types';

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeDialog(dialog) {
  return {
    type: CHANGE_DIALOG,
    data: dialog,
  };
}

export function changeDir(dir) {
  return {
    type: CHANGE_DIR,
    data: dir,
  };
}
export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    data: text,
  };
}

export function getDialog(index) {
  return {
    type: GET_DIALOG,
    id: index,
  };
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLE,
    data,
  };
}

export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data,
  };
}
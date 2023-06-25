import {ADD_MESSAGE, CHANGE_DIALOG, CHANGE_DIR, CHANGE_STYLE, GET_DIALOG, TABLE_RESIZE} from './types';

export function rootReducer(state, action) {
  let prevState;
  let currDialog;
  let currDir;
  switch (action.type) {
    case TABLE_RESIZE:
      prevState = state.windowsState || {};
      prevState[action.data.closestName] = action.data.value;
      return {...state, windowsState: prevState};
    case CHANGE_DIALOG:
      return {...state, currentDialog: action.data};
    case CHANGE_DIR:
      return {...state, currentDir: action.data};
    case ADD_MESSAGE:
      console.log(state);
      currDialog = action.data[1].id;
      currDir = action.data[1].dir;
      // eslint-disable-next-line
      currDialog = state.dialogs.allDirDialog[currDir].find(function(item) { return item.id === currDialog;});
      currDialog.dialog.push(action.data[0]);
      currDialog.shorLastMessage = currDialog.dialog[currDialog.dialog.length -1].value;
      currDialog.dateLastMessage = currDialog.dialog[currDialog.dialog.length -1].time;
      console.log();
      return {...state, currentDialog: currDialog};
    case GET_DIALOG:
      currDialog = state.dialogs.currentDialog;
      return {...state, currentDialog: currDialog};
    case CHANGE_STYLE:
      return {...state, currentStyles: action.data};
    default: return state;
  }
}
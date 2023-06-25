import {storage} from '../core/utils';
import {defaultStyles} from '../constants';

const defaultState = {
  windowsState: {
    '.navigation': '80',
    '.chat-list': '370',
    '.window-message': '1000',
  },
  currentStyles: defaultStyles,
  dialogs: {
    currentDialog: 1,
    allDirDialog: {
      'Все чаты': [{id: 1, logo: './favicon.png', username: 'Боюсь', shorLastMessage: 'Щачем', dateLastMessage: '21.12.2022', dialog:
      [
        {
          'value': ' dsafdsaf\n',
          'time': '17:20',
        },
        {
          'value': 'fdsgfdsgds\n',
          'time': '17:22',
        },
        {
          'value': ' sadfasfd\n',
          'time': '17:24',
          'user': 'myuser',
        },
        {
          'value': ' dfasfas\n',
          'time': '17:35',
          'user': 'myuser',
        },
        {
          'value': ' adsfasd\n',
          'time': '17:45',
          'user': 'myuser',
        },
        {
          'value': ' Пошёл в\n',
          'time': '17:53',
          'user': 'myuser',
        },
        {
          'value': 'Ты пидор\n',
          'time': '16:56',
          'user': 'myuser',
        },
        {
          'value': ' Отвали\n',
          'time': '16:56',
          'user': 'myuser',
        },
        {
          'value': 'Щачем\n',
          'time': '16:56',
          'user': 'myuser',
        },
      ]}, {id: 2, logo: './favicon.png', username: 'Домой', shorLastMessage: 'Ну ладно, прощаю', dateLastMessage: '11.01.2025', dialog: [
        {
          'value': 'Хочу домой',
          'time': '12:20',
        },
        {
          'value': 'Не хочу домой',
          'time': '13:22',
          'user': 'myuser',
        },
        {
          'value': 'Ну ладно. Прощаю',
          'time': '15:22',
          'user': 'myuser',
        },
      ]}],
      'Работа': [{id: 3, logo: './favicon.png', username: 'Вера', shorLastMessage: 'Я верю', dateLastMessage: '11.01.2025', dialog: [{
        'value': 'Я верю в тебя',
        'time': '15:20',
      }]}]},
  },
};

export const initialState = storage('chat-state') ? storage('chat-state') : defaultState;

function createSendsMessage(message) {
  if (message.user === 'myuser') {
    return `<div class='user-chat__message' style = 'opacity:0'><span class='user-chat__date'></span></div><div class='user-chat__message my-chat__message'>${message.value} <span class='user-chat__date'>${message.time}</span></div>`;
  } else {
    return `<div class='user-chat__message'>${message.value} <span class='user-chat__date'>${message.time}</span></div><div class='user-chat__message my-chat__message' style = 'opacity: 0'><span class='user-chat__date'></span></div>`;
  }
}

function createUserMessages(messages) {
  const allMessage = messages.map((message) => {
    return `
        <div class='user-chat'>
            ${createSendsMessage(message)}
        </div>`;
  }).join(' ');
  return allMessage;
}

export function createMessage(data = [
  {
    'value': ' Ты кто?',
    'time': '17:24',
    'user': 'myuser',
  },
  {
    'value': 'dfsa',
    'time': '17:25',
    'user': 'myuser',
  },
  {
    'value': ' Я слушаю',
    'time': '17:26',
    'user': 'myuser',
  },
  {
    'value': ' Слушаю',
    'time': '17:26',
    'user': 'myuser',
  },
  {
    'value': ' Ни твоего ума дела',
    'time': '17:26',
    'user': 'another',
  },
  {
    'value': 'Чё?',
    'time': '17:26',
    'user': 'another',
  },
]) {
  return ` <div class='info-message'>
  <div class='info-message-top'>
      <h2 class='info-message-top__name'>Просто смотри</h2>
      <span class='info-message-top__online'>10 minute</span>
  </div>
  <div class='info-message-icons'>
      <span class='info-message-icons__icon fa-solid fa-magnifying-glass'></span>
      <span class='info-message-icons__icon fa-solid fa-phone'></span>
      <span class='info-message-icons__icon info-message-icons__icon_rotate fa-regular fa-window-maximize info-message-icons__icon__smiles' data-role='window-info'></span>
      <span class='info-message-icons__icon fa-solid fa-ellipsis-vertical'></span>
  </div>
</div>
<div class='window-message__chat'>
    ${createUserMessages(data)}

</div>
<div class='window-message__bottom'>
  <i class='window-message__icon fa-solid fa-paperclip'></i>
  <div class='search window-message-place'>
      <textarea type='text' name='' class='search__input window-message-place__input'
          placeholder='Что спросишь?'> </textarea>
  </div>
  <div class='window-message-icons'>
      <i class='window-message-icons__emoji fa-solid fa-face-smile'></i>
      <i class='window-message-icons__emoji fa-solid fa-microphone'></i>
  </div>
</div>
<div class= 'resize' data-resize = 'resize-messageSend'></div>`;
}

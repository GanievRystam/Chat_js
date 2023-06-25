export function createTable(CurrentDir = []) {
  return `
    <div class="search">
      <input type="text" name="" class="search__input" placeholder="Поиск">
    </div>
    <ul class="chat-items">
      ${generationList(CurrentDir)}
    </ul>
    <div class= "resize" data-resize = "resize-messageItems"></div>
    `;
}

function generationList(Dir) {
  const list = Dir.map((item, index) => {
    return `
    <li class="chat-item" data-item = "${index + 1}">
      <img src="${item.logo}" class="chat-item__image">
      <div class="chat-description">
          <h3 class="chat-description__name">${item.username}</h3>
          <p class="chat-description__last-message">${item.shorLastMessage}</p>
      </div>
      <div class="time-last-message">
        ${item.dateLastMessage}
        <div class="time-last-message__count">1</div>
      </div>
    </li>`;
  }).join(' ');
  return list;
}
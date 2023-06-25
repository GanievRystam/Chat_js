function iconDir(array) {
  console.log(array);
  const content = array.map((item, index) => {
    return `
    <li class="nav-item ${index == 0 ? ' nav-item__icon_logo' : ''}" ${index != 0 ? `data-dir=${index}` : 'data-dir=logo'}>
      <i class="nav-item__icon ${item.icon}"></i>
      ${item.title ? '<span class="nav-item__text">' + item.title + '</span>' : ''}
    </li>`;
  }).join(' ');
  return content;
}

export function createNavigation(array = [], state = {}) {
  return `
      <nav class="nav">
          <ul class="nav-items">
            ${iconDir(array)}
            <li class="nav-item" data-dir="update">
            <i class="nav-item__icon fa-solid fa-gears"></i>
              <span class="nav-item__text">Ред.</span>
            </li>
          </ul>
      </nav>
      <div class= "resize" data-resize = "resize-toolbar"></div>`;
}
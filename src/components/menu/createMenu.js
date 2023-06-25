export function createMenu(CurrentDir = []) {
  return ` 
  <div class ="shadow shadow-hide"> </div>
  <div class="navigation-fixed">
  <div class="container-nav">
      <div class="nav-status">
          <div class="nav-status__img">
              <img src="../favicon.png" alt="">
          </div>
          <div class="nav-status-info">
              <span class="nav-status-info__name">Рустам Ганиев</span>
          </div>
      </div>
      <div class="nav-fixed">
          <ul class="nav-fixed-items">
              <li class="nav-fixed-item">
                  <i class="fa-solid fa-user-group nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Создать группу</h4>
              </li>
              <li class="nav-fixed-item">
                  <i class="fa-solid fa-heart nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Контакты</h4>
              </li>
              <li class="nav-fixed-item">
                  <i class="fa-solid fa-mobile nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Контакты</h4>
              </li>
              <li class="nav-fixed-item">
              <i class="fa-solid fa-phone nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Звонки</h4>
              </li>
              <li class="nav-fixed-item">
              <i class="fa-solid fa-fire nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Избранное</h4>
              </li>
              <li class="nav-fixed-item">
              <i class="fa-solid fa-gear nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Настройки</h4>
              </li>
              <li class="nav-fixed-item">
              <i class="fa-solid fa-moon nav-fixed-item__icon"></i>
                  <h4 class="nav-fixed-item__header">Ночной режим</h4>
                  <div class="switch-btn switch-on"></div>
              </li>
          </ul>
      </div>
  </div>
</div
</div>
    `;
}
export function createUpdateToollbar() {
  return `
  <div class="shadow"> </div>
  <div class="update-tool">
  <div class="over-tool">
      <div class="close-tool">
          <div class="close-tool__head ">Папки</div>
          <div class="close-tool__btn"><i class="fa-solid fa-xmark" data-role="close"></i></div>
      </div>
      <div class="over-photo">
          <div class="over-background">
              <div class="over-logo">
                  <img class="over-logo__img" src="./favicon.png" alt="">
                  <p class="over-logo__text chat-description__last-message">
                      Вы можете создать папки с нужными чатами и пепеключаться между ними.
                  </p>
              </div>
          </div>
      </div>
  </div>
  <div class="under-tool">
      <h4 class="under-tool__head close-tool__head ">Мои папки</h4>
      <div class="tool-directions">
          <div class="tool-direction">
              <span class="tool-direction__icon"><i class="fa-solid fa-folder"></i></span>
              <div class="tool-direction-info">
                  <h6 class="tool-direction-info__head">Работа</h6>
                  <p class="tool-direction-info__count chat-description__last-message">16 чатов</p>
              </div>
              <span class="tool-direction__icon_delete"><i class="fa-solid fa-trash"></i></span>
          </div>
          <div class="tool-direction">
              <span class="tool-direction__icon"><i class="fa-solid fa-folder"></i></span>
              <div class="tool-direction-info">
                  <h6 class="tool-direction-info__head">Личное</h6>
                  <p class="tool-direction-info__count chat-description__last-message">3 чата</p>
              </div>
              <span class="tool-direction__icon_delete"><i class="fa-solid fa-trash"></i></span>
          </div>
      </div>
  </div>
</div>
  `;
}
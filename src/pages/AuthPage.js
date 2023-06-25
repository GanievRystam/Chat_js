import {$} from '../core/dom';
import {Page} from '../core/page';

export class AuthPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
    <form class="form">
      <p class="form__head">Авторизация</p>
      <input class="form__input" name="auth_number" placeholder="Введите Ваш Номер" required>
      <input class="form__input" type="password" name="auth_pass" placeholder="Введите пароль" required>
      <a class="form__button" class="form_auth_button" href="#chat" name="form_auth_submit">Войти</a>
    </form>`);
  }
}
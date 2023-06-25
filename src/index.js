import './scss/index.scss';
import {Router} from './core/routes/Router';
import {ChatPage} from './pages/ChatPage';
import {AuthPage} from './pages/AuthPage';
new Router('#app', {
  chat: ChatPage,
  auth: AuthPage,
});
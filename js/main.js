import {showScreen} from './util';
import welcomeScreen from './modules/welcome';

window.main = document.querySelector(`.main`);
showScreen(welcomeScreen);

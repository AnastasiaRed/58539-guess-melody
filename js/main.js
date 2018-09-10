import {showScreen} from './utils/util';
import WelcomeView from './views/welcome-view';

const curView = new WelcomeView();
showScreen(curView.element);

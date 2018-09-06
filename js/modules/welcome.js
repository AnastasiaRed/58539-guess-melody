import INITIAL_GAME from '../data/game';
import WORD_ENDINGS from '../data/word-endings';

import startGame from './game';

import {getElementFromTemplate, getWordEnding} from '../util';

export default () => {
  const template = `
    <section class="welcome">
      <div class="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
      </div>
      <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
      <h2 class="welcome__rules-title">Правила игры</h2>
      <p class="welcome__text">Правила просты:</p>
      <ul class="welcome__rules-list">
        <li>За ${INITIAL_GAME.time.minutes} ${getWordEnding(INITIAL_GAME.time.minutes, WORD_ENDINGS.minutes)} нужно ответить на все вопросы.</li>
        <li>Можно допустить ${INITIAL_GAME.lives} ${getWordEnding(INITIAL_GAME.lives, WORD_ENDINGS.mistakes)}.</li>
      </ul>
      <p class="welcome__text">Удачи!</p>
    </section>
  `;

  const welcomeScreen = getElementFromTemplate(template);

  const playBtn = welcomeScreen.querySelector(`.welcome__button`);
  playBtn.addEventListener(`click`, () => {
    startGame();
  });

  return welcomeScreen;
};


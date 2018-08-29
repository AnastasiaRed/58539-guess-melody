import WORD_ENDINGS from '../data/word-endings';

import {getElementFromTemplate, showScreen, getResultMessage, getWordEnding} from '../util';
import welcomeScreen from './welcome';

export default () => {
  const template = (result, statistics) => `
    <section class="result">
      <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
      <h2 class="result__title">Вы настоящий меломан!</h2>
      <p class="result__total">
        За ${result.time.minutes} ${getWordEnding(result.time.minutes, WORD_ENDINGS.minutes)} и ${result.time.seconds} ${getWordEnding(result.time.seconds, WORD_ENDINGS.seconds)}
        вы набрали ${result.score.total} ${getWordEnding(result.score.total, WORD_ENDINGS.scores)} (${result.score.fast} быстрых),
        совершив ${result.mistakes} ошибки
      </p>
      <p class="result__text">${getResultMessage(result.score.total, statistics)}</p>
      <button class="result__replay" type="button">Сыграть ещё раз</button>
    </section>
  `;
  const resultSuccessScreen = getElementFromTemplate(template);

  const gameReplay = resultSuccessScreen.querySelector(`.result__replay`);
  gameReplay.addEventListener(`click`, () => {
    showScreen(welcomeScreen());
  });

  return resultSuccessScreen;
};

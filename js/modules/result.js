import {getElementFromTemplate, getResultMessage, getRatingMessage} from '../util';
import startGame from './game';

export default (result, statistics) => {

  const failMessage = (res) => `<p class="result__total result__total--fail">${getResultMessage(res)}</p>`;

  const successMessage = (res, stats) => `
    <p class="result__total">${getResultMessage(res)}</p>
    <p class="result__text">${getRatingMessage(res.score.total, stats)}</p>
  `;

  const failTimeData = {
    title: `Увы и ах!`,
    message: failMessage(result),
    button: `Попробовать ещё раз`
  };

  const failLivesData = {
    title: `Какая жалость!`,
    message: failMessage(result),
    button: `Попробовать ещё раз`
  };

  const successData = {
    title: `Вы настоящий меломан!`,
    message: successMessage(result, statistics),
    button: `Попробовать ещё раз`
  };

  const template = (data) => `
    <section class="result">
      <div class="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
      </div>
      <h2 class="result__title">${data.title}</h2>
      ${data.message}
      <button class="result__replay" type="button">${data.button}</button>
    </section>
  `;

  let curData;
  if (result.mistakes > 0) {
    curData = failLivesData;
  } else if (result.time.total <= 0) {
    curData = failTimeData;
  } else {
    curData = successData;
  }

  const resultScreen = getElementFromTemplate(template(curData));

  const gameReplay = resultScreen.querySelector(`.result__replay`);
  gameReplay.addEventListener(`click`, () => {
    startGame();
  });

  return resultScreen;
};

import AbstractView from './abstract-view';
import {getResultMessage, getRatingMessage} from '../utils/util';

export default class ResultView extends AbstractView {
  constructor(result, statistics) {
    super();
    this.result = result;
    this.statistics = statistics;
  }

  get template() {

    const failMessage = (res) => `<p class="result__total result__total--fail">${getResultMessage(res)}</p>`;

    const successMessage = (res, stats) => `
      <p class="result__total">${getResultMessage(res)}</p>
      <p class="result__text">${getRatingMessage(res.score.total, stats)}</p>
    `;

    const failTimeData = {
      title: `Увы и ах!`,
      message: failMessage(this.result),
      button: `Попробовать ещё раз`
    };

    const failLivesData = {
      title: `Какая жалость!`,
      message: failMessage(this.result),
      button: `Попробовать ещё раз`
    };

    const successData = {
      title: `Вы настоящий меломан!`,
      message: successMessage(this.result, this.statistics),
      button: `Попробовать ещё раз`
    };

    const temp = (data) => `
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
    if (this.result.lives < 0) {
      curData = failLivesData;
    } else if (this.result.time.total <= 0) {
      curData = failTimeData;
    } else {
      curData = successData;
    }
    return temp(curData);
  }

  onReplayBtnClick() { }

  bind() {
    const gameReplay = this.element.querySelector(`.result__replay`);
    gameReplay.addEventListener(`click`, () => {
      this.onReplayBtnClick();
    });
  }
}

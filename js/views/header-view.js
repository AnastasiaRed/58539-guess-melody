import INITIAL_GAME from '../data/game';
import AbstractView from './abstract-view';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">Сыграть ещё раз</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
        </svg>

        <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">

          <span class="timer__mins">${this.state.time.minutes}</span>
          <span class="timer__dots">:</span>
          <span class="timer__secs">${this.state.time.seconds}</span>
        </div>

        <div class="game__mistakes">
          ${new Array(INITIAL_GAME.lives - this.state.lives)
            .fill(`<div class="wrong"></div>`)
            .join(``)}
        </div>
      </header>
    `;
  }

  onLogoClick() { }

  bind() {
    const gameLogo = this.element.querySelector(`.game__back`);
    gameLogo.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.onLogoClick();
    });
  }
}

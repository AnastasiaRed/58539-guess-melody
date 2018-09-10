import AbstractView from './abstract-view';

export default class LevelView extends AbstractView {
  constructor(question) {
    super();
    this.question = question;
  }

  get template() {
    const genreTemplate = `
      <section class="game__screen">
        <h2 class="game__title">${this.question.text}</h2>
        <form class="game__tracks">
          ${this.question.tracks.map((track, i) => `
            <div class="track">
              <button class="track__button track__button--play" type="button"></button>
              <div class="track__status">
                <audio src="${track.src}"></audio>
              </div>
              <div class="game__answer">
                <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
                <label class="game__check" for="answer-${i}">Отметить</label>
              </div>
            </div>
          `).join(``)}
          <button class="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    `;

    const artistTemplate = `
      <section class="game__screen">
        <h2 class="game__title">${this.question.text}</h2>
        <div class="game__track">
          <button class="track__button track__button--play" type="button"></button>
          <audio src="${this.question.tracks[0].src}"></audio>
        </div>
        <form class="game__artist">
          ${this.question.answers.map((answer, i) => `
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="answer-${i}" id="answer-${i}">
            <label class="artist__name" for="answer-${i}">
              <img class="artist__picture" src="${answer.image}" alt="${answer.text}">
              ${answer.text}
            </label>
          </div>`).join(``)}
        </form>
      </section>
    `;

    const template = this.question.type === `genre` ? genreTemplate : artistTemplate;
    return template;
  }

  onAnswer() { }

  bind() {
    if (this.question.type === `genre`) {
      const submitBtn = this.element.querySelector(`.game__submit`);
      submitBtn.disabled = true;

      const answerInputs = Array.from(this.element.querySelectorAll(`.game__input`));
      answerInputs.forEach((input) => {
        input.addEventListener(`change`, () => {
          const inputChecked = answerInputs.some((elem) => elem.checked);
          submitBtn.disabled = !inputChecked;
        });
      });

      const form = this.element.querySelector(`.game__tracks`);
      form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        this.onAnswer(event);
      });
    } else {
      const answerInputs = Array.from(this.element.querySelectorAll(`.artist__input`));
      const form = this.element.querySelector(`.game__artist`);
      answerInputs.forEach((input) => {
        input.addEventListener(`click`, () => {
          const event = new Event(`submit`, {bubbles: true, cancelable: true});
          form.dispatchEvent(event);
        });
      });

      form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        this.onAnswer(event);
      });
    }
  }
}

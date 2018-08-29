import {getElementFromTemplate} from '../util';

export default (question) => {
  const genreTemplate = `
    <section class="game__screen">
      <h2 class="game__title">${question.text}</h2>
      <form class="game__tracks">
        ${[...Object.entries(question.tracks)].map((track, i) => `
          <div class="track">
            <button class="track__button track__button--play" type="button"></button>
            <div class="track__status">
              <audio>${track[1].name}</audio>
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
      <h2 class="game__title">${question.text}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio>
          ${question.track}
        </audio>
      </div>
      <form class="game__artist">
        ${[...Object.entries(question.answers)].map((answer, i) => `
        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="answer-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer[1].image}" alt="${answer[1].text}">
            ${answer[1].text}
          </label>
        </div>`).join(``)}
      </form>
    </section>
  `;

  const template = question.type === `genre` ? genreTemplate : artistTemplate;
  const gameScreen = getElementFromTemplate(template);

  if (question.type === `genre`) {
    const submitBtn = gameScreen.querySelector(`.game__submit`);
    submitBtn.disabled = true;

    const answerInputs = Array.from(gameScreen.querySelectorAll(`.game__input`));
    answerInputs.forEach((input) => {
      input.addEventListener(`change`, () => {
        const inputChecked = answerInputs.some((elem) => elem.checked);
        submitBtn.disabled = !inputChecked;
      });
    });
  }

  return gameScreen;
};

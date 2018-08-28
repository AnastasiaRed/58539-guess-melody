import {getElementFromTemplate, showScreen} from '../util';
import gameArtistScreen from './game-artist';

const template = `
  <section class="game__screen">
    <h2 class="game__title">Выберите инди-рок треки</h2>
    <form class="game__tracks">
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
          <label class="game__check" for="answer-1">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
          <label class="game__check" for="answer-2">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--pause" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
          <label class="game__check" for="answer-3">Отметить</label>
        </div>
      </div>

      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
          <label class="game__check" for="answer-4">Отметить</label>
        </div>
      </div>

      <button class="game__submit button" type="submit">Ответить</button>
    </form>
  </section>
`;

const gameGenreScreen = getElementFromTemplate(template);

const submitBtn = gameGenreScreen.querySelector(`.game__submit`);
submitBtn.disabled = true;

const answerInputs = Array.from(gameGenreScreen.querySelectorAll(`.game__input`));
answerInputs.forEach((input) => {
  input.addEventListener(`change`, () => {
    const inputChecked = answerInputs.some((elem) => elem.checked);
    submitBtn.disabled = !inputChecked;
  });
});

submitBtn.addEventListener(`click`, () => {
  showScreen(gameArtistScreen);
});

export default gameGenreScreen;

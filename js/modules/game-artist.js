import {getElementFromTemplate, showScreen} from '../util';
import resultSuccessScreen from './result-success';
import failTimeScreen from './fail-time';
import failTriesScreen from './fail-tries';
import {INITIAL_GAME} from '../data/game';

const levels = [
  {
    question: `Кто исполняет эту песню?`,
    tracks: new Set([`tracks1`]),
    answers: new Set([`answer1`, `answer2`, `answer3`])
  },
  {
    question: `А эту кто исполняет?`,
    tracks: new Set([`tracks1`]),
    answers: new Set([`answer1`, `answer2`, `answer3`])
  }
];

const template = (level) => `
  <section class="game__screen">
    <h2 class="game__title">${level.question}</h2>

    ${[...level.tracks].map((track) => `<div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio>
        ${track}
      </audio>
    </div>`).join(``)}

    <form class="game__artist">

      ${[...level.answers].map((answer) => `
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
        <label class="artist__name" for="answer-1">
          <img class="artist__picture" src="http://placehold.it/134x134" alt="${answer}">
          ${answer}
        </label>
      </div>`).join(``)}

    </form>
  </section>
`;
const gameArtistScreen = getElementFromTemplate(template(levels[INITIAL_GAME.level]));

const resultScreens = [resultSuccessScreen, failTimeScreen, failTriesScreen];
const artists = gameArtistScreen.querySelectorAll(`.artist`);
artists.forEach((artist) => {
  artist.addEventListener(`click`, () => {
    showScreen(resultScreens[Math.trunc(Math.random() * 3)]);
  });
});

export default gameArtistScreen;

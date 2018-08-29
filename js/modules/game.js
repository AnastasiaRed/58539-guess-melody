import {getElementFromTemplate, showScreen, changeLevel, changeLife} from '../util.js';

import INITIAL_GAME from '../data/game.js';
import QUESTIONS from '../data/questions.js';

import renderHeader from './game-header';
import renderLevel from './game-level';

import resultfailTimeScreen from './result-fail-time';
import resultfailTriesScreen from './result-fail-tries';
import resultSuccessScreen from './result-success';

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_GAME);

  const gameContainerElement = getElementFromTemplate(`<section class="game"></section>`);
  const gameHeaderElement = getElementFromTemplate(`<div></div>`);
  const gameLevelElement = getElementFromTemplate(`<div></div>`);

  gameContainerElement.appendChild(gameHeaderElement);
  gameContainerElement.appendChild(gameLevelElement);

  const updateGame = (state) => {
    gameHeaderElement.innerHTML = ``;
    gameHeaderElement.appendChild(renderHeader(state));
    gameLevelElement.innerHTML = ``;
    gameLevelElement.appendChild(renderLevel(QUESTIONS[state.level]));
  };

  gameLevelElement.addEventListener(`click`, (event) => {
    if (!event.target.classList.contains(`artist__input`) || event.target.classList.contains(`game__submit`)) {
      return;
    }

    const currentQuestion = QUESTIONS[game.level];
    const userAnswer = event.target.value;

    if (currentQuestion.answers[userAnswer].isCorrect) {
      game = changeLevel(game.level + 1);
      updateGame(game);
    } else {
      game = changeLife(game.lives - 1);
      updateGame(game);
      if (game.lives < 0) {
        showScreen(resultfailTriesScreen());
      }
    }
  });

  updateGame(game);
  showScreen(gameContainerElement);
};

startGame();

export default startGame;

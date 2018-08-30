import {getElementFromTemplate, showScreen, changeLevel, changeLife, getResult} from '../util.js';

import INITIAL_GAME from '../data/game';
import QUESTIONS from '../data/questions';
import STATISTICS from '../data/statistics';

import renderHeader from './game-header';
import renderLevel from './game-level';

import renderResult from './result';

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_GAME);
  const result = [];

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

  gameLevelElement.addEventListener(`submit`, (event) => {
    event.preventDefault();

    const currentQuestion = QUESTIONS[game.level];
    const answers = [...Object.entries(currentQuestion.answers)];
    const correctAnswers = answers.filter((answer) => answer[1].isCorrect).map((answer) => answer[0]);

    const inputs = Array.from(event.target.elements);
    const userAnswers = inputs.filter((input) => input.checked).map((input) => input.value);

    const isUserAnswerCorrect = correctAnswers.length === userAnswers.length && userAnswers.reduce((a, b) => a && correctAnswers.includes(b), true);

    if (isUserAnswerCorrect) {
      result.push({answer: true, time: 40});

    } else {
      game = changeLife(game, game.lives - 1);
      result.push({answer: false, time: 40});

      if (game.lives < 0) {
        const userResult = getResult(result, game);
        showScreen(renderResult(userResult, STATISTICS));
        return;
      }
    }

    game = changeLevel(game, game.level + 1);
    if (game.level >= QUESTIONS.length) {
      const userResult = getResult(result, game);
      showScreen(renderResult(userResult, STATISTICS));
      return;
    }
    updateGame(game);
  });

  updateGame(game);
  showScreen(gameContainerElement);
};

startGame();

export default startGame;

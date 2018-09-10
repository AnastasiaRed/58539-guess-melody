
import INITIAL_GAME from './data/game.js';
import QUESTIONS from './data/questions.js';
import STATISTICS from './data/statistics.js';

import WelcomeView from './views/welcome-view';
import HeaderView from './views/header-view';
import LevelView from './views/level-view';
import ResultView from './views/result-view';

import {getElementFromTemplate, showScreen, changeLevel, changeLife, getResult} from './utils/util.js';
import startPlayer from './utils/audio';

let game;

const startGame = () => {
  game = Object.assign({}, INITIAL_GAME);
  const result = [];

  const goToResults = (res, state) => {
    const userResult = getResult(res, state);
    const curResult = new ResultView(userResult, STATISTICS);
    curResult.onReplayBtnClick = () => startGame();
    showScreen(curResult.element);
  };

  const gameContainerElement = getElementFromTemplate(`<section class="game"></section>`);

  const updateGame = (state) => {
    gameContainerElement.innerHTML = ``;

    const header = new HeaderView(state);
    const curWelcome = new WelcomeView(state);
    header.onLogoClick = () => showScreen(curWelcome.element);

    const level = new LevelView(QUESTIONS[state.level]);
    level.onAnswer = () => {
      const currentQuestion = QUESTIONS[game.level];
      const answers = currentQuestion.answers;
      const correctAnswers = [];
      answers.forEach((answer, i)=>{
        if (answer.isCorrect) {
          correctAnswers.push(`answer-${i}`);
        }
      });

      const inputs = Array.from(event.target.elements);
      const userAnswers = inputs.filter((input) => input.checked).map((input) => input.value);

      const isUserAnswerCorrect = correctAnswers.length === userAnswers.length && userAnswers.reduce((a, b) => a && correctAnswers.includes(b), true);

      if (isUserAnswerCorrect) {
        result.push({answer: true, time: 40});
      } else {
        game = changeLife(game, game.lives - 1);
        result.push({answer: false, time: 40});

        if (game.lives < 0) {
          goToResults(result, game);
          return;
        }
      }

      game = changeLevel(game, game.level + 1);
      if (game.level >= QUESTIONS.length) {
        goToResults(result, game);
        return;
      }

      updateGame(game);
      startPlayer();
    };

    gameContainerElement.appendChild(header.element);
    gameContainerElement.appendChild(level.element);
  };

  updateGame(game);
  showScreen(gameContainerElement);
  startPlayer();
};

export default startGame;

import INITIAL_GAME from './data/game';
import QUESTIONS from './data/questions';
import MESSAGES from './data/messages';

export const getElementFromTemplate = (template) => {
  let element = document.createElement(`div`);
  element.innerHTML = template.trim();
  element = element.firstChild;
  return element;
};

export const showScreen = (screen) => {
  const main = document.querySelector(`.main`);
  main.innerHTML = ``;
  main.appendChild(screen);
};

export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

export const changeLife = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Life should be of type number`);
  }

  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};

export const changeTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    time
  });
  return newGame;
};

export const calculateScore = (answers, lives) => {
  const LONG_TIME = INITIAL_GAME.time.longAnswer;
  const INIT_GAME_LIVES = INITIAL_GAME.lives;

  if (answers.length < QUESTIONS.length || lives < 0) {
    return -1;
  }

  const wrongAnswers = answers.filter((element) => !element.answer);
  if (wrongAnswers.length > 2) {
    return -1;
  }

  const answerScore = answers.reduce((score, answer) => {
    return score + (answer.time >= LONG_TIME ? 1 : 2);
  }, 0);

  const livesScore = (INIT_GAME_LIVES - lives) * 2;
  const totalScore = answerScore - livesScore;

  return totalScore;
};

export const getResult = (answers, game) => {
  const INIT_GAME_LIVES = INITIAL_GAME.lives;
  const LONG_TIME = INITIAL_GAME.time.longAnswer;
  const answersFast = answers.filter((answer) => answer.time <= LONG_TIME);
  const time = answers.reduce((summ, answer) => summ + answer.time, 0);

  const newResult = {
    score: {
      total: calculateScore(answers, game.lives),
      fast: answersFast.length
    },
    time: {
      total: time,
      get minutes() {
        return Math.trunc(this.total / 60);
      },
      get seconds() {
        return this.total % 60;
      }
    },
    mistakes: INIT_GAME_LIVES - game.lives
  };

  return newResult;
};

export const getResultMessage = (curResult) => {
  const {failNoLives, failNoTime, success} = MESSAGES;

  if (curResult.mistakes > 3) {
    return failNoLives;
  }

  if (curResult.time.total <= 0) {
    return failNoTime;
  }

  const curMessageSuccess = success(curResult.time, curResult.score, curResult.mistakes);
  return curMessageSuccess;
};

export const getRatingMessage = (curScore, otherResults) => {
  otherResults.push(curScore);
  otherResults.sort((a, b) => b - a);

  const curPosition = otherResults.indexOf(curScore) + 1;
  const betterThan = (otherResults.length - curPosition) / otherResults.length * 100;
  const curMessageRating = MESSAGES.rating(curPosition, otherResults.length, betterThan);
  return curMessageRating;
};

export const getWordEnding = (amount, endings) => {
  amount = Math.abs(amount);
  const cases = [2, 0, 1, 1, 1, 2];
  return endings[(amount % 100 > 4 && amount % 100 < 20) ? 2 : cases [(amount % 10 < 5) ? amount % 10 : 5]];
};

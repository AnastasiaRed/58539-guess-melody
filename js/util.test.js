import {assert} from 'chai';
import {changeLevel, changeLife, changeTime, calculateScore, getResultMessage, getWordEnding} from './util';
import INITIAL_GAME from './data/game';

describe(`changeLevel()`, () => {
  it(`should update level of the game`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 2).level, 2);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
    assert.equal(changeLevel(INITIAL_GAME, 102).level, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, []).level, /Level should be of type number/);
  });
});

describe(`changeLife()`, () => {
  it(`should update lives of the game`, () => {
    assert.equal(changeLife(INITIAL_GAME, 1).lives, 1);
    assert.equal(changeLife(INITIAL_GAME, 2).lives, 2);
    assert.equal(changeLife(INITIAL_GAME, 10).lives, 10);
    assert.equal(changeLife(INITIAL_GAME, 102).lives, 102);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLife(INITIAL_GAME, []).level, /Life should be of type number/);
  });
});

describe(`changeTime()`, () => {
  it(`should update time of the game`, () => {
    assert.equal(changeTime(INITIAL_GAME, 1).time, 1);
    assert.equal(changeTime(INITIAL_GAME, 2).time, 2);
    assert.equal(changeTime(INITIAL_GAME, 10).time, 10);
    assert.equal(changeTime(INITIAL_GAME, 102).time, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, -1).time, /Time should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeTime(INITIAL_GAME, []).time, /Time should be of type number/);
  });
});

const testArray7Answers = [
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 1, time: 40}
];

const testArrayAnsweredRightLess8 = [
  {answer: 1, time: 40},
  {answer: 1, time: 50},
  {answer: 0, time: 60},
  {answer: 1, time: 70},
  {answer: 1, time: 40},
  {answer: 0, time: 35},
  {answer: 1, time: 60},
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 0, time: 40}
];

const testArrayAnsweredLong = [
  {answer: 1, time: 40},
  {answer: 1, time: 50},
  {answer: 1, time: 60},
  {answer: 1, time: 70},
  {answer: 1, time: 40},
  {answer: 1, time: 35},
  {answer: 1, time: 60},
  {answer: 1, time: 40},
  {answer: 1, time: 40},
  {answer: 1, time: 40}
];

const testArrayAnsweredFast = [
  {answer: 1, time: 20},
  {answer: 1, time: 10},
  {answer: 1, time: 5},
  {answer: 1, time: 15},
  {answer: 1, time: 19},
  {answer: 1, time: 0},
  {answer: 1, time: 22},
  {answer: 1, time: 10},
  {answer: 1, time: 15},
  {answer: 1, time: 5}
];

const testArrayAnswered5Long5Fast = [
  {answer: 1, time: 50},
  {answer: 1, time: 10},
  {answer: 1, time: 5},
  {answer: 1, time: 45},
  {answer: 1, time: 19},
  {answer: 1, time: 0},
  {answer: 1, time: 32},
  {answer: 1, time: 30},
  {answer: 1, time: 55},
  {answer: 1, time: 5}
];

describe(`calculateScore()`, () => {
  it(`should return -1 if total answers is less than 10`, () => {
    assert.equal(calculateScore(testArray7Answers, 2, INITIAL_GAME), -1);
  });

  it(`should return -1 if there is no lives`, () => {
    assert.equal(calculateScore(testArrayAnsweredLong, -1, INITIAL_GAME), -1);
  });

  it(`should return -1 if right answers is less than 8`, () => {
    assert.equal(calculateScore(testArrayAnsweredRightLess8, 2, INITIAL_GAME), -1);
  });

  it(`should calculate right score`, () => {
    assert.equal(calculateScore(testArrayAnsweredLong, 2, INITIAL_GAME), 10);
    assert.equal(calculateScore(testArrayAnsweredLong, 0, INITIAL_GAME), 6);
    assert.equal(calculateScore(testArrayAnsweredFast, 2, INITIAL_GAME), 20);
    assert.equal(calculateScore(testArrayAnswered5Long5Fast, 1, INITIAL_GAME), 13);
  });
});

const testArrayOtherResults = [4, 5, 8, 11];
const testArrayCurResultsNoLives = {score: 10, lives: -1, time: 20};
const testArrayCurResultsNoTime = {score: 10, lives: 0, time: 0};
const testArrayCurResultsNoTimeNoLives = {score: 10, lives: -1, time: 0};
const testArrayCurResults = {score: 10, lives: 1, time: 10};

describe(`getResultMessage()`, () => {
  it(`should return У вас закончились все попытки... if there is no lives`, () => {
    assert.equal(getResultMessage(testArrayCurResultsNoLives), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return Время вышло... if there is no time`, () => {
    assert.equal(getResultMessage(testArrayCurResultsNoTime), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return У вас закончились все попытки... if there is no lives and no time`, () => {
    assert.equal(getResultMessage(testArrayCurResultsNoTimeNoLives), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return Вы заняли ... if the score is used`, () => {
    assert.equal(getResultMessage(testArrayCurResults, testArrayOtherResults), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
  });
});

const minuteEndings = [`минуту`, `минуты`, `минут`];
const secEndings = [`cекунду`, `cекунды`, `cекунд`];

describe(`getWordEnding()`, () => {
  it(`should return right word ending`, () => {
    assert.equal(getWordEnding(0, minuteEndings), `минут`);
    assert.equal(getWordEnding(1, minuteEndings), `минуту`);
    assert.equal(getWordEnding(22, minuteEndings), `минуты`);
    assert.equal(getWordEnding(43, secEndings), `cекунды`);
    assert.equal(getWordEnding(-156, secEndings), `cекунд`);
  });
});

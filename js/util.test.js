import {assert} from 'chai';
import {changeLevel, changeLife, changeTime, calculateScore, getResultMessage, getWordEnding} from './util';
import MESSAGES from './data/messages';
import WORD_ENDINGS from './data/word-endings';

describe(`changeLevel()`, () => {
  it(`should update level of the game`, () => {
    assert.equal(changeLevel(1).level, 1);
    assert.equal(changeLevel(2).level, 2);
    assert.equal(changeLevel(10).level, 10);
    assert.equal(changeLevel(102).level, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(-1).level, /Level should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLevel([]).level, /Level should be of type number/);
  });
});

describe(`changeLife()`, () => {
  it(`should update lives of the game`, () => {
    assert.equal(changeLife(1).lives, 1);
    assert.equal(changeLife(2).lives, 2);
    assert.equal(changeLife(10).lives, 10);
    assert.equal(changeLife(102).lives, 102);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLife([]).level, /Life should be of type number/);
  });
});

describe(`changeTime()`, () => {
  it(`should update time of the game`, () => {
    assert.equal(changeTime(1).time, 1);
    assert.equal(changeTime(2).time, 2);
    assert.equal(changeTime(10).time, 10);
    assert.equal(changeTime(102).time, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeTime(-1).time, /Time should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeTime([]).time, /Time should be of type number/);
  });
});

const testArray7Answers = [
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40}
];

const testArrayAnsweredRightLess8 = [
  {answer: true, time: 40},
  {answer: true, time: 50},
  {answer: false, time: 60},
  {answer: true, time: 70},
  {answer: true, time: 40},
  {answer: false, time: 35},
  {answer: true, time: 60},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: false, time: 40}
];

const testArrayAnsweredLong = [
  {answer: true, time: 40},
  {answer: true, time: 50},
  {answer: true, time: 60},
  {answer: true, time: 70},
  {answer: true, time: 40},
  {answer: true, time: 35},
  {answer: true, time: 60},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40}
];

const testArrayAnsweredFast = [
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 5},
  {answer: true, time: 15},
  {answer: true, time: 19},
  {answer: true, time: 0},
  {answer: true, time: 22},
  {answer: true, time: 10},
  {answer: true, time: 15},
  {answer: true, time: 5}
];

const testArrayAnswered5Long5Fast = [
  {answer: true, time: 50},
  {answer: true, time: 10},
  {answer: true, time: 5},
  {answer: true, time: 45},
  {answer: true, time: 19},
  {answer: true, time: 0},
  {answer: true, time: 32},
  {answer: true, time: 30},
  {answer: true, time: 55},
  {answer: true, time: 5}
];

describe(`calculateScore()`, () => {
  it(`should return -1 if total answers is less than 10`, () => {
    assert.equal(calculateScore(testArray7Answers, 2), -1);
  });

  it(`should return -1 if there is no lives`, () => {
    assert.equal(calculateScore(testArrayAnsweredLong, -1), -1);
  });

  it(`should return -1 if right answers is less than 8`, () => {
    assert.equal(calculateScore(testArrayAnsweredRightLess8, 2), -1);
  });

  it(`should calculate right score`, () => {
    assert.equal(calculateScore(testArrayAnsweredLong, 2), 10);
    assert.equal(calculateScore(testArrayAnsweredLong, 0), 6);
    assert.equal(calculateScore(testArrayAnsweredFast, 2), 20);
    assert.equal(calculateScore(testArrayAnswered5Long5Fast, 1), 13);
  });
});

const testArrayOtherResults = [4, 5, 8, 11];
const testArrayCurResultsNoLives = {score: 10, lives: -1, time: 20};
const testArrayCurResultsNoTime = {score: 10, lives: 0, time: 0};
const testArrayCurResultsNoTimeNoLives = {score: 10, lives: -1, time: 0};
const testArrayCurResults = {score: 10, lives: 1, time: 10};

describe(`getResultMessage()`, () => {
  it(`should return У вас закончились все попытки... if there is no lives`, () => {
    assert.equal(getResultMessage(testArrayCurResultsNoLives, testArrayOtherResults, MESSAGES), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return Время вышло... if there is no time`, () => {
    assert.equal(getResultMessage(testArrayCurResultsNoTime, testArrayOtherResults, MESSAGES), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return У вас закончились все попытки... if there is no lives and no time`, () => {
    assert.equal(getResultMessage(testArrayCurResultsNoTimeNoLives, testArrayOtherResults, MESSAGES), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return Вы заняли ... if the score is used`, () => {
    assert.equal(getResultMessage(testArrayCurResults, testArrayOtherResults, MESSAGES), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
  });
});

describe(`getWordEnding()`, () => {
  it(`should return right word ending`, () => {
    assert.equal(getWordEnding(0, WORD_ENDINGS.minutes), `минут`);
    assert.equal(getWordEnding(1, WORD_ENDINGS.minutes), `минуту`);
    assert.equal(getWordEnding(22, WORD_ENDINGS.minutes), `минуты`);
    assert.equal(getWordEnding(43, WORD_ENDINGS.seconds), `cекунды`);
    assert.equal(getWordEnding(-156, WORD_ENDINGS.seconds), `cекунд`);
  });
});

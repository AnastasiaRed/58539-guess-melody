import WORD_ENDINGS from '../data/word-endings';
import {getWordEnding} from '../util';

const MESSAGES = Object.freeze({
  failNoTime: `Время вышло! Вы не успели отгадать все мелодии`,
  failNoLives: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  rating: (position, others, betterThan) => `Вы заняли ${position} место из ${others} игроков. Это лучше, чем у ${betterThan}% игроков`,
  success: (time, score, mistakes) => `За ${time.minutes} ${getWordEnding(time.minutes, WORD_ENDINGS.minutes)} и ${time.seconds} ${getWordEnding(time.seconds, WORD_ENDINGS.seconds)}
  вы набрали ${score.total} ${getWordEnding(score.total, WORD_ENDINGS.scores)} (${score.fast} быстрых),
  совершив ${mistakes} ${getWordEnding(mistakes, WORD_ENDINGS.mistakes)}`
});

export default MESSAGES;

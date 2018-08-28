const MESSAGES = Object.freeze({
  failNoTime: `Время вышло! Вы не успели отгадать все мелодии`,
  failNoLives: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  success: (position, others, betterThan) => `Вы заняли ${position} место из ${others} игроков. Это лучше, чем у ${betterThan}% игроков`,
});

export default MESSAGES;

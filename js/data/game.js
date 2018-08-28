export const INITIAL_GAME = Object.freeze({
  level: 0,
  score: 0,
  lives: 2,
  time: {
    total: 300,
    get minutes() {
      return Math.trunc(this.time / 60);
    },
    get seconds() {
      return this.time % 60;
    }
  },
  longTimeAnswer: 30
});

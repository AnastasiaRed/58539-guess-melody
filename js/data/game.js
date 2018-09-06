const INITIAL_GAME = Object.freeze({
  level: 0,
  score: 0,
  lives: 3,
  time: {
    total: 300,
    longAnswer: 30,
    get minutes() {
      return Math.trunc(this.total / 60);
    },
    get seconds() {
      return this.total % 60;
    }
  }
});

export default INITIAL_GAME;

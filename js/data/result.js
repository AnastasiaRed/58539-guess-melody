const RESULT = Object.freeze({
  score: {
    total: 0,
    fast: 0
  },
  time: {
    total: 100,
    get minutes() {
      return Math.trunc(this.total / 60);
    },
    get seconds() {
      return this.total % 60;
    }
  },
  mistakes: 0
});

export default RESULT;

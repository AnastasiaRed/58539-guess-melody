const player = () => {
  const PLAY_BUTTONS = Array.from(document.querySelectorAll(`.track__button--play`));

  PLAY_BUTTONS.forEach((button) => {
    button.addEventListener(`click`, function (event) {
      event.preventDefault();

      const pauseButton = document.querySelector(`.track__button--pause`);

      if (pauseButton) {
        pauseButton.parentNode.querySelector(`audio`).pause();
        pauseButton.classList.remove(`track__button--pause`);

        if (event.target.parentNode.isEqualNode(pauseButton.parentNode)) {
          return;
        }
      }

      event.target.classList.add(`track__button--pause`);
      event.target.parentNode.querySelector(`audio`).play();
    });
  });

  PLAY_BUTTONS[0].click();
};

export default player;

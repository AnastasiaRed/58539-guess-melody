import AbstractView from './abstract-view';

export default class LevelView extends AbstractView {
  constructor(type) {
    super();
    this.type = type;
  }

  get template() {
    const errorTemplate = `
      <section class="modal">
        <h2 class="modal__title">Произошла ошибка!</h2>
        <p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
      </section>
    `;

    const confirmTemplate = `
      <section class="modal">
        <button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
        <h2 class="modal__title">Подтверждение</h2>
        <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
        <div class="modal__buttons">
          <button class="modal__button button">Ок</button>
          <button class="modal__button button">Отмена</button>
        </div>
      </section>
    `;

    const template = this.type === `error` ? errorTemplate : confirmTemplate;
    return template;
  }

  onCloseBtnClick() { }
  onOkBtnClick() { }
  onCancelBtnClick() { }

  bind() {
    if (this.question.type === `error`) {
      return;
    }

    const closeBtn = this.element.querySelector(`.modal__close`);
    closeBtn.addEventListener(`click`, () => {
      this.onCloseBtnClick();
    });

    const modalBtns = this.element.querySelectorAll(`.modal__button`);
    const okBtn = modalBtns[0];
    okBtn.addEventListener(`click`, () => {
      this.onOkBtnClick();
    });
    const cancelBtn = modalBtns[1];
    cancelBtn.addEventListener(`click`, () => {
      this.onCancelBtnClick();
    });
  }
}

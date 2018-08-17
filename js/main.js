'use strict';

const main = document.querySelector(`.main`);
let currentTemplate = 0;
const templatesArray = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);

const showTemplate = (element) => {
  main.innerHTML = ``;
  main.appendChild(element.cloneNode(true));
};

const selectTemplate = (index) => {
  index = index < 0 ? templatesArray.length - 1 : index;
  index = index >= templatesArray.length ? 0 : index;

  currentTemplate = index;
  showTemplate(templatesArray[currentTemplate]);
};

selectTemplate(currentTemplate);

/* Add keyboard navigation*/

const KEY_CODE_LEFT_ARROW = 37;
const KEY_CODE_RIGHT_ARROW = 39;

document.addEventListener(`keydown`, (event) => {
  switch (event.keyCode) {
    case KEY_CODE_RIGHT_ARROW:
      selectTemplate(currentTemplate + 1);
      break;
    case KEY_CODE_LEFT_ARROW:
      selectTemplate(currentTemplate - 1);
      break;
  }
});

/* Add visual navigation*/

const arrowsMarkup = document.createElement(`div`);
arrowsMarkup.classList.add(`arrows__wrap`);

const arrowsStyleCSS = document.createTextNode(`
.arrows__wrap {
  position: absolute;
  top: 135px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
`);
const arrowsStyle = document.createElement(`style`);
arrowsStyle.type = `text/css`;
arrowsStyle.appendChild(arrowsStyleCSS);

const arrowsButtonPrev = document.createElement(`button`);
arrowsButtonPrev.classList.add(`arrows__btn`);
arrowsButtonPrev.textContent = `<-`;
arrowsButtonPrev.addEventListener(`click`, () => {
  selectTemplate(currentTemplate - 1);
})

const arrowsButtonNext = arrowsButtonPrev.cloneNode();
arrowsButtonNext.textContent = `->`;
arrowsButtonNext.addEventListener(`click`, () => {
  selectTemplate(currentTemplate + 1);
})

arrowsMarkup.appendChild(arrowsStyle);
arrowsMarkup.appendChild(arrowsButtonPrev);
arrowsMarkup.appendChild(arrowsButtonNext);

const arrowsContainer = document.querySelector(`.app`);
arrowsContainer.appendChild(arrowsMarkup);

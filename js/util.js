const getElementFromTemplate = (template) => {
  let element = document.createElement(`div`);
  element.innerHTML = template.trim();
  element = element.firstChild;
  return element;
};

const main = document.querySelector(`.main`);
const showScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export {getElementFromTemplate, showScreen};

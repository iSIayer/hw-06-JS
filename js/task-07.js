const refs = {
  inputSizeControl: document.querySelector('#font-size-control'),
  textSpan: document.querySelector('#text'),
};

refs.inputSizeControl.addEventListener('input', setFontSize)

function setFontSize(event) {
  const fontSizeValue = Number(event.currentTarget.value);
  refs.textSpan.style.fontSize = `${fontSizeValue}px`;
};
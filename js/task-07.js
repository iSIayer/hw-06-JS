const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

function setFontSize(e) {
  refs.text.style.fontSize = `${e.currentTarget.value}px`;
}

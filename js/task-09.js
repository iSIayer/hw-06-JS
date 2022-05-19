const refsColors = {
  hashTagColor: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refsColors.changeColorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refsColors.hashTagColor.textContent = getRandomHexColor();
};
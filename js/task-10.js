const refs = {
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
  inputNumber: document.querySelector("#controls input[type='number']"),
  boxesContainer: document.querySelector("#boxes"),
  boxElement: document.querySelector(".boxes-item"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.createButton.addEventListener("click", () => {
  const amount = refs.inputNumber.value;
  const initSize = 30;
  const boxesArray = [];
  let currentSize = parseInt(refs.boxesContainer.lastElementChild?.style.width);

  if (amount === "") {
    alert("Please, type boxes count");
  }

  for (let i = 1; i <= amount; i += 1) {
    if (isNaN(currentSize)) {
      currentSize = initSize;
    } else {
      currentSize += 10;
    }
    boxesArray.push(createBoxElement(currentSize));
  }
  refs.boxesContainer.append(...boxesArray);
});

function createBoxElement(size) {
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomHexColor();
  box.style.display = "block";
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  console.log(size);
  return box;
}

refs.destroyButton.addEventListener("click", () => {
  refs.inputNumber.value = "";
  refs.boxesContainer.innerHTML = "";
});

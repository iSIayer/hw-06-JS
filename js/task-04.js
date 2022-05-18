let counterValue = 0;

const refs = {
    buttonPlus: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
    buttonMinus: document.querySelector('button[data-action="decrement"]'),
}

refs.buttonPlus.addEventListener('click', () => {
    counterValue+=1;
    refs.value.textContent = counterValue;
}
);
refs.buttonMinus.addEventListener('click', () => {
    counterValue-=1;
    refs.value.textContent = counterValue;
}
);
const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', () => {
    const DEFAULT_NAME = 'Anonymous';
    refs.nameOutput.textContent = refs.nameInput.value;
    
    return refs.nameOutput.textContent === '' ? refs.nameOutput.textContent = DEFAULT_NAME : refs.nameOutput.textContent;
}
);

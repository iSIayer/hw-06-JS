const refs = {
    input: document.querySelector("#validation-input"),
    inputlength: document.querySelector("input[data-length]"),
}
const textLength = Number(refs.inputlength.dataset.length);

refs.input.addEventListener('blur', checkValidation);

function checkValidation(e) {
    if (e.currentTarget.value.length === textLength) {
        refs.input.setAttribute('class','valid');
        
    } else {
        refs.input.setAttribute('class','invalid');
        
    }
    
}
 
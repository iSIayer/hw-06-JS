const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
      } = event.currentTarget;

if (email.value === "" || password.value ==="") {
    return alert(`Все поля должны быть заполнены!`)
    
} 
if (password.value.length <= 4) {
    alert(`The password must be received at least 4 characters!`)
    return;
}       
else {
    const formObj = {};
        formObj.email = email.value;
        formObj.password = password.value;
        
        console.log(formObj);
      
}
event.currentTarget.reset();
};


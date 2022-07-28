const passwordInput = document.querySelector('.password-input');

let showHide = document.querySelector('.show-hide');

showHide.addEventListener('click', () => {
    if(passwordInput.type == 'password') {
        passwordInput.type = 'text';
    } 
    else if(passwordInput.type == 'text') {
        passwordInput.type = 'password';
    }
})
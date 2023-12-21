const form = document.querySelector('.form');
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const eye = document.querySelector('#lock')
let emailflag;
let passwordflag


email.addEventListener('keydown', (e) => {
    const email = e.target.value;
    emailValidate(email)
    const icon = document.querySelector('.envelope')
    if (emailflag) {
        icon.classList.remove('fa-shake')
        icon.classList.remove('fa-envelope')
        icon.classList.add('fa-circle-check')
        icon.style.color = 'green'
    }
    else {
        icon.classList.add('fa-shake')
        icon.style.color = 'red'
    }
})
password.addEventListener('keydown', (e) => {
    const password = e.target.value;
    passwordValidate(password)
    const icon = document.querySelector('.lock')

    if (passwordflag) {
        icon.classList.remove('fa-shake')
        icon.style.color = 'green'
    }
    else {
        icon.classList.add('fa-shake')
        icon.style.color = 'red'
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

const emailValidate = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        emailflag = true
    } else {
        email = false
    }
}
const passwordValidate = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(password)) {
        return passwordflag = true
    } else {
        return passwordflag = false
    }
}
// passwordValidate("this is password")
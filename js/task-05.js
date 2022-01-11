const userNameEl = document.querySelector('#name-input');
const titleUserNameEl = document.querySelector('#name-output');

console.log(titleUserNameEl);

userNameEl.addEventListener ('input', event => {
    titleUserNameEl.textContent = event.currentTarget.value;
    if (titleUserNameEl.textContent === '') {
        titleUserNameEl.textContent = `Anonymous`;
    };
});
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault()

    const formElements = event.currentTarget.elements;


    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    if (formData.mail === '' || formData.password === '') {
        return alert('Упс, заполни все.')
    };


    console.log(formData);
    formEl.reset();
}

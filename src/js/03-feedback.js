import throttle from 'lodash.throttle';

const inputEls = document.querySelector('.feedback-form');

if (localStorage.getItem("feedback-form-state") !== null) {
    inputEls.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    inputEls.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}

inputEls.addEventListener('input', throttle((event) => {
    event.preventDefault();
    const elements = event.currentTarget;
    const dataEls = {
        email: elements.email.value,
        message: elements.message.value
    };
    function writeMemory (Els) {
        localStorage.setItem("feedback-form-state", JSON.stringify(Els));
    }
    writeMemory(dataEls);
}), 50000);
inputEls.addEventListener('submit', (event) => {
    event.preventDefault();
    if (localStorage.getItem("feedback-form-state") !== null) {
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    } else {console.log(`Вы не заполнили поля!`)};
    localStorage.clear();
    inputEls.reset();  
});


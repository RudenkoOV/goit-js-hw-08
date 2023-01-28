import throttle from 'lodash.throttle';

const inputEls = document.querySelector('.feedback-form');

if (localStorage.getItem("feedback-form-state") !== null) {
    inputEls.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    inputEls.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}

inputEls.addEventListener('input', dataEnter);
inputEls.addEventListener('submit', dataDel);

function dataEnter(event)  {
    event.preventDefault();
    const elements = event.currentTarget;
    const dataEls = {
        email: elements.email.value,
        message: elements.message.value
    };

    function writeMemory (Els) {
        console.log(Els);
        localStorage.setItem("feedback-form-state", JSON.stringify(Els));
    }
    writeMemory(dataEls);
    return dataEls;
}

function dataDel(event) {
    event.preventDefault();
    console.log(`E-mail: ${dataEnter(event).email}, MessagE:${dataEnter(event).message}`);
    localStorage.clear();
    inputEls.reset();  
}

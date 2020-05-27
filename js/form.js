import {openModalWindow, closeModalWindow} from './modalWindows.js';

export function setFormSubmission(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();

        const request = new XMLHttpRequest();

        request.onload = () => {
            handleResponse(request);
        };

        const formData = {
            name: document.getElementById('name'),
            tel: document.getElementById('tel'),
            email: document.getElementById('email'),
            message: document.getElementById('message')
        };
        const requestData = `name=${formData.name.value}&tel=${formData.tel.value}&email=${formData.email.value}&message=${formData.message.value}`;

        request.open('post', 'form.php');
        request.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded'
        );
        request.send(requestData);
    });
}

function handleResponse(request) {
    closeModalWindow('.modal-form-background');
    openModalWindow('.form-submission-window-background');
    if (request.status !== 200) {
        const failedSendData = [
            {
                selector: '.form-submission-window__title',
                text: 'Произошла ошибка'
            },
            {
                selector: '.form-submission-window__text',
                text: 'Попробуйте еще раз'
            },
            {
                selector: '.form-submission-window__close-btn',
                text: 'Закрыть'
            }
        ];
        failedSendData.forEach((e) => {
            document.querySelector(e.selector).textContent = e.text;
        });
    }
}

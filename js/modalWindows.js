export function setModalWindowEventListeners() {
    const events = [
        {
            selector: '.nav__request-button',
            name: 'click',
            handler: openModalForm
        },
        {
            selector: '.modal-form__close-button',
            name: 'click',
            handler: closeModalForm
        },
        {
            selector: '.form-submission-window__close-btn',
            name: 'click',
            handler: closeFormSubmissionWindow
        }
    ];

    events.forEach((event) => {
        const htmlElements = document.querySelectorAll(event.selector);
        if (htmlElements) {
            htmlElements.forEach((htmlEl) => {
                htmlEl.addEventListener(event.name, event.handler);
            });
        }
    });
}

function openModalForm() {
    openModalWindow('.modal-form-background');
}

function closeModalForm() {
    closeModalWindow('.modal-form-background');
}

export function openModalWindow(selector) {
    const modalWindow = document.querySelector(selector);
    modalWindow.style.opacity = '1';
    modalWindow.style.pointerEvents = 'auto';
}

export function closeModalWindow(selector) {
    const modalWindow = document.querySelector(selector);
    modalWindow.style.opacity = '0';
    modalWindow.style.pointerEvents = 'none';
}

function closeFormSubmissionWindow() {
    closeModalWindow('.form-submission-window-background');
}

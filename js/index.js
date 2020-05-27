import setSwiperForReviews from './swiper.js';
import { setFormSubmission } from './form.js';
import { setModalWindowEventListeners } from './modalWindows.js';
import { setTelInputMask } from './tel.js';
import { handleBackgroundChange } from './intro.js';

window.onload = function () {
    handleBackgroundChange();
    setModalWindowEventListeners();
    setTelInputMask();

    const forms = document.querySelectorAll('.form');
    forms.forEach((form) => {
        setFormSubmission(form);
    });

    setSwiperForReviews();
};

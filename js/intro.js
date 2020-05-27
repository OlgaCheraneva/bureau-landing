let counter = 0;

export function handleBackgroundChange() {
    const arrow = document.querySelector('.main-page__block-1__arrow-wrapper');
    if (arrow) {
        arrow.addEventListener('click', handleArrowClick);
    }
}

function handleArrowClick() {
    const intro = document.querySelector('.intro');
    if (intro) {
        const index = ++counter % 3;
        intro.style.backgroundPositionX = `${-100 * index}vw`;

        const slideNumber = document.querySelector(
            '.counter__current-slide-number'
        );
        if (slideNumber) {
            slideNumber.innerHTML = `0${index + 1}`;
        }
    }
}

import Inputmask from 'inputmask';

export function setTelInputMask() {
    const im = new Inputmask('+7 999-999-99-99');
    im.mask(document.querySelectorAll('.phone-number-input'));
}

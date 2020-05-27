import Swiper from 'swiper';

export default () =>
    new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' +
                    className +
                    '">' +
                    (++index < 10 ? '0' + index : index) +
                    '</span>'
                );
            }
        }
    });

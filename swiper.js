import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css/bundle';

export const swiperJS = () => {
    const swiper = new Swiper('.swiper', {
        direction: "vertical",
        speed: 500,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 200,
        mousewheel: true,
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        parallax: true,
        effect: "fade",
        modules: [Navigation],
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

    });
}
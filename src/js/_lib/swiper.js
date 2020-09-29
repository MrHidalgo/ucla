

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mainSwiper = new Swiper('.mainSwiper', {
    loop: true,
    effect: 'slide',
    autoplay: {
      delay: 5000,
			disableOnInteraction: true
    },
		speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.c-main__slider-btn--next',
      prevEl: '.c-main__slider-btn--prev',
    }
  });

	$('.mainSwiper').hover(
		() => {
			mainSwiper.autoplay.stop();
		},
		() => {
			mainSwiper.autoplay.start();
		}
	);

};

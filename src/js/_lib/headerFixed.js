

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {

  let countScroll = $(window).scrollTop(),
    headerElement = $('.header');

  if (countScroll > 0) {
    headerElement.addClass("header-fixed-js");
  } else {
    headerElement.removeClass("header-fixed-js");
  }

};

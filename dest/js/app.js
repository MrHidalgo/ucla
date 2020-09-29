"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if (countScroll > 0) {
    headerElement.addClass("header-fixed-js");
  } else {
    headerElement.removeClass("header-fixed-js");
  }
};

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });

  $('[popup-video-js]').magnificPopup({
    type: 'iframe',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var mainSwiper = new Swiper('.mainSwiper', {
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
      prevEl: '.c-main__slider-btn--prev'
    }
  });

  $('.mainSwiper').hover(function () {
    mainSwiper.autoplay.stop();
  }, function () {
    mainSwiper.autoplay.start();
  });
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
  initHeaderFixed();
});

(function () {
  /* CALLBACK :: start
  * ============================================= */
  var dropdownCB = function dropdownCB() {
    $('[dropdown-toggle-js]').on('click', function (ev) {
      var el = $(ev.currentTarget),
          elParent = el.closest('[dropdown-node-js]');

      if (elParent.hasClass('is-active')) {
        elParent.removeClass('is-active');
        elParent.find('[dropdown-js]').removeClass('is-open');
      } else {
        $('[dropdown-node-js]').removeClass('is-active');
        $('[dropdown-js]').removeClass('is-open');

        elParent.addClass('is-active');
        elParent.find('[dropdown-js]').addClass('is-open');
      }

      ev.preventDefault();
      return false;
    });

    $('[dropdown-js] a').on('click', function (ev) {
      $('[dropdown-node-js]').removeClass('is-active');
      $('[dropdown-js]').removeClass('is-open');
    });

    $('body').on('click', function (e) {
      var className = "[dropdown-node-js]";

      if (!$(e.target).closest(className).length) {
        $('[dropdown-node-js]').removeClass('is-active');
        $('[dropdown-js]').removeClass('is-open');
      }
    });
  };
  /* CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    initPopups();
    // ==========================================

    // callback
    dropdownCB();
    // ==========================================
  };

  window.addEventListener('load', function () {
    initNative();
  }, false);
})();
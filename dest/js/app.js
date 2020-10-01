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
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			if (elem.classList.contains('is-active')) {
				elem.classList.remove("is-active");
				mobileContainer.classList.add("is-animate");
				mobileContainer.classList.remove("is-open");
			} else {
				elem.classList.add("is-active");
				mobileContainer.classList.add("is-open");
			}

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});
	}
};

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
		$('[dropdown-node-js]').hover(function (ev) {
			var el = $(ev.currentTarget);

			if ($(window).width() > 1023) {
				if (el.closest('[dropdown-js]').length) {
					return false;
				}

				$('[dropdown-node-js]').removeClass('is-active');

				el.addClass('is-active');

				$('[dropdown-js]').removeClass('is-open');

				$(el.find('[dropdown-js]')[0]).addClass('is-open');
			}
		}, function (ev) {
			var el = $(ev.currentTarget),
			    elParent = el.closest('[dropdown-node-js]');

			if ($(window).width() > 1023) {
				elParent.removeClass('is-active');

				$(elParent.find('[dropdown-js]')[0]).removeClass('is-open');
			}
		});

		$('[dropdown-toggle-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elParent = el.closest('[dropdown-node-js]');

			if (el.closest('[dropdown-js]').length) {
				if ($(window).width() < 1024) {
					$(elParent.find('[dropdown-js]')[0]).slideToggle(350);
					return false;
				}
			}

			if (elParent.hasClass('is-active')) {

				if ($(window).width() > 1023) {} else {
					elParent.removeClass('is-active');
					$(elParent.find('[dropdown-js]')[0]).slideUp(350);
				}
			} else {

				if ($(window).width() > 1023) {} else {
					$('[dropdown-node-js]').removeClass('is-active');
					elParent.addClass('is-active');
					$('[dropdown-js]').slideUp(350);
					$(elParent.find('[dropdown-js]')[0]).slideDown(350);
				}
			}

			ev.preventDefault();
			return false;
		});

		$('[dropdown-js] > .header__nav-dropdown').hover(function (ev) {
			if ($(window).width() > 1023) {
				$(ev.currentTarget).closest('[dropdown-node-js]').find('[dropdown-js]').addClass('is-open');
			}
		}, function (ev) {
			if ($(window).width() > 1023) {
				$(ev.currentTarget).closest('[dropdown-node-js]').find('[dropdown-js]').removeClass('is-open');
			}
		});

		$('[dropdown-js] > a').on('click', function (ev) {
			$('[dropdown-node-js]').removeClass('is-active');

			if ($(ev.target).closest('[dropdown-toggle-js]').length) {
				return false;
			}

			if ($(window).width() > 1023) {
				$('[dropdown-js]').removeClass('is-open');
			} else {
				$('[dropdown-js]').slideUp(350);
			}
		});

		// $('body').on('click', function (e) {
		// 	const className = "[dropdown-node-js]";
		//
		// 	if (!$(e.target).closest(className).length) {
		// 		$('[dropdown-node-js]').removeClass('is-active');
		//
		// 		if($(window).width() > 1023) {
		// 			$('[dropdown-js]').removeClass('is-open');
		// 		} else {
		// 			$('[dropdown-js]').slideUp(350);
		// 		}
		// 	}
		// });
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
		initHamburger();
		// ==========================================

		// callback
		dropdownCB();
		// ==========================================
	};

	window.addEventListener('load', function () {
		initNative();
	}, false);
})();
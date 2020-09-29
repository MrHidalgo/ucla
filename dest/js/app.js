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

(function () {
	/* CALLBACK :: start
 * ============================================= */
	var dropdownCB = function dropdownCB() {
		$('[dropdown-toggle-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elParent = el.closest('[dropdown-node-js]');

			$('[dropdown-node-js]').removeClass('is-active');
			$('[dropdown-js]').removeClass('is-open');

			elParent.toggleClass('is-active');
			elParent.find('[dropdown-js]').toggleClass('is-open');

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
		// ==========================================

		// callback
		dropdownCB();
		// ==========================================
	};

	window.addEventListener('load', function () {
		initNative();
	}, false);
})();
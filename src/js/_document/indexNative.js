(function () {
	/* CALLBACK :: start
	* ============================================= */
	const dropdownCB = () => {
		$('[dropdown-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[dropdown-node-js]');

			if(elParent.hasClass('is-active')) {
				elParent.removeClass('is-active');

				if($(window).width() > 1023) {
					elParent.find('[dropdown-js]').removeClass('is-open');
				} else {
					elParent.find('[dropdown-js]').slideUp(350);
				}
			} else {
				$('[dropdown-node-js]').removeClass('is-active');

				elParent.addClass('is-active');

				if($(window).width() > 1023) {
					$('[dropdown-js]').removeClass('is-open');

					elParent.find('[dropdown-js]').addClass('is-open');
				} else {
					$('[dropdown-js]').slideUp(350);

					elParent.find('[dropdown-js]').slideDown(350);
				}
			}

			ev.preventDefault();
			return false;
		});

		$('[dropdown-js] a').on('click', (ev) => {
			$('[dropdown-node-js]').removeClass('is-active');

			if($(window).width() > 1023) {
				$('[dropdown-js]').removeClass('is-open');
			} else {
				$('[dropdown-js]').slideUp(350);
			}
		});

		$('body').on('click', function (e) {
			const className = "[dropdown-node-js]";

			if (!$(e.target).closest(className).length) {
				$('[dropdown-node-js]').removeClass('is-active');

				if($(window).width() > 1023) {
					$('[dropdown-js]').removeClass('is-open');
				} else {
					$('[dropdown-js]').slideUp(350);
				}
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
	const initNative = () => {
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

	window.addEventListener('load', () => {
		initNative();
	}, false);
})();

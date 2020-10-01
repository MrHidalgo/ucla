(function () {
	/* CALLBACK :: start
	* ============================================= */
	const dropdownCB = () => {
		$('[dropdown-node-js]').hover(
			(ev) => {
				const el = $(ev.currentTarget);

				if($(window).width() > 1023) {
					if(el.closest('[dropdown-js]').length) {
						return false;
					}

					$('[dropdown-node-js]').removeClass('is-active');

					el.addClass('is-active');

					$('[dropdown-js]').removeClass('is-open');

					$(el.find('[dropdown-js]')[0]).addClass('is-open');
				}
			},
			(ev) => {
				const el = $(ev.currentTarget),
					elParent = el.closest('[dropdown-node-js]');

				if($(window).width() > 1023) {
					elParent.removeClass('is-active');

					$(elParent.find('[dropdown-js]')[0]).removeClass('is-open');
				}
			}
		);

		$('[dropdown-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[dropdown-node-js]');

			if(el.closest('[dropdown-js]').length) {
				if($(window).width() < 1024) {
					$(elParent.find('[dropdown-js]')[0]).slideToggle(350);
					return false;
				}
			}

			if(elParent.hasClass('is-active')) {

				if($(window).width() > 1023) {} else {
					elParent.removeClass('is-active');
					$(elParent.find('[dropdown-js]')[0]).slideUp(350);
				}
			} else {

				if($(window).width() > 1023) {} else {
					$('[dropdown-node-js]').removeClass('is-active');
					elParent.addClass('is-active');
					$('[dropdown-js]').slideUp(350);
					$(elParent.find('[dropdown-js]')[0]).slideDown(350);
				}
			}

			ev.preventDefault();
			return false;
		});

		$('[dropdown-js] > .header__nav-dropdown').hover(
			(ev) => {
				if($(window).width() > 1023) {
					$(ev.currentTarget).closest('[dropdown-node-js]').find('[dropdown-js]').addClass('is-open');
				}
			},
			(ev) => {
				if($(window).width() > 1023) {
					$(ev.currentTarget).closest('[dropdown-node-js]').find('[dropdown-js]').removeClass('is-open');
				}
			}
		);

		$('[dropdown-js] > a').on('click', (ev) => {
			$('[dropdown-node-js]').removeClass('is-active');

			if($(ev.target).closest('[dropdown-toggle-js]').length) {
				return false;
			}

			if($(window).width() > 1023) {
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

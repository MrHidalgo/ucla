(function () {
	/* CALLBACK :: start
	* ============================================= */
	const dropdownCB = () => {
		$('[dropdown-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[dropdown-node-js]');

			$('[dropdown-node-js]').removeClass('is-active');
			$('[dropdown-js]').removeClass('is-open');

			elParent.toggleClass('is-active');
			elParent.find('[dropdown-js]').toggleClass('is-open');

			ev.preventDefault();
			return false;
		});

		$('[dropdown-js] a').on('click', (ev) => {
			$('[dropdown-node-js]').removeClass('is-active');
			$('[dropdown-js]').removeClass('is-open');
		});

		$('body').on('click', function (e) {
			const className = "[dropdown-node-js]";

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
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		dropdownCB();
		// ==========================================
	};

	window.addEventListener('load', () => {
		initNative();
	}, false);
})();

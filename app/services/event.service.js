(function() {
	'use strict';

	var service = {
		addEventListener: function(element, event, fn) {
			element.addEventListener(event, fn);
		}
	};
	module.exports = service;
})();

(function() {
	'use strict';

	var service = {
		addEventListener: function(element, event, callback) {
			element.addEventListener(event, callback);
		}
	};
	module.exports = service;
})();

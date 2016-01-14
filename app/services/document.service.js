(function() {
	'use strict';

	var service = {
		getElementById: function(id) {
			return document.getElementById(id);
		}
	};
	module.exports = service;
})();

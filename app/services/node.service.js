(function() {
	'use strict';

	var service = {
		textContent: function(node, value) {
			node.textContent = value;
		}
	};
	module.exports = service;
})();

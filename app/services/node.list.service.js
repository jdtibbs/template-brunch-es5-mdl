(function() {
	'use strict';

	var service = {
		forEach: function(nodeList, callback) {
			Array.prototype.forEach.call(nodeList, function(node) {
				callback(node);
			});
		}
	};
	module.exports = service;
})();

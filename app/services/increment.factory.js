	(function() {
		'use strict';

		var factory = {
			create: function() {
				var count = 0;

				return {
					decrement: function() {
						return --count;
					},
					increment: function() {
						return ++count;
					},
					reset: function() {
						count = 0;
						return count;
					}

				};
			}
		};

		module.exports = factory;
	})();

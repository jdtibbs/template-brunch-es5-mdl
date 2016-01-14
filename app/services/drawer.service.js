(function() {
	'use strict';

	var documentService = require('services/document.service');

	var service = {
		toggle: function() {
			var drawer = documentService.querySelectorAll('.mdl-layout__drawer, .mdl-layout__obfuscator');
			Array.prototype.forEach.call(drawer, function(child) {
				child.classList.remove('is-visible');
			});
		}
	};
	module.exports = service;
})();

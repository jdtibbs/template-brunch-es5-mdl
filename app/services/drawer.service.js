(function() {
	'use strict';

	var documentService = require('services/document.service');
	var nodeListService = require('services/node.list.service');

	var service = {
		toggle: function() {
			// close the navigation drawer when a link is clicked.
			nodeListService.forEach(documentService.querySelectorAll('.mdl-layout__drawer, .mdl-layout__obfuscator'), removeClass);

			function removeClass(node) {
				node.classList.remove('is-visible');
			}
		}
	};
	module.exports = service;
})();

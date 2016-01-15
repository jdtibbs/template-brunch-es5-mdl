(function() {
	'use strict';

	var documentService = require('services/document.service');
	var eventService = require('services/event.service');
	var nodeListService = require('services/node.list.service');

	function toggle() {
		// close the navigation drawer when a link is clicked.
		nodeListService.forEach(documentService.querySelectorAll('.mdl-layout__drawer, .mdl-layout__obfuscator'), removeClass);

		function removeClass(node) {
			node.classList.remove('is-visible');
		}
	}

	var service = {
		init: function(id) {
			nodeListService.forEach(documentService.getElementById(id).childNodes, addNodeEvent);

			function addNodeEvent(node) {
				eventService.addEventListener(node, 'click', toggle);
			}
		}
	};
	module.exports = service;
})();

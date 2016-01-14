	(function() {
		'use strict';

		var incrementFactory = require('services/increment.factory');
		var documentService = require('services/document.service');
		var eventService = require('services/event.service');

		var app = {
			init: function() {
				var increment = incrementFactory.create();
				var count = documentService.getElementById('count');

				eventService.addEventListener(documentService.getElementById('increment'), 'click', function() {
					count.textContent = increment.increment();
				});

				eventService.addEventListener(documentService.getElementById('decrement'), 'click', function() {
					count.textContent = increment.decrement();
				});

				eventService.addEventListener(documentService.getElementById('reset'), 'click', function() {
					count.textContent = increment.reset();
				});
			}
		};
		module.exports = app;
	})();

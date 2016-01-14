	(function() {
		'use strict';

		var documentService = require('services/document.service');
		var drawerService = require('services/drawer.service');
		var eventService = require('services/event.service');
		var incrementFactory = require('services/increment.factory');

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

				var drawer = documentService.getElementById('drawerNav');
				Array.prototype.forEach.call(drawer.childNodes, function(child) {
					eventService.addEventListener(child, 'click', function() {
						drawerService.toggle();
					});
				});

			}
		};
		module.exports = app;
	})();

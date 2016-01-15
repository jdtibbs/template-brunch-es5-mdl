	(function() {
		'use strict';

		var documentService = require('services/document.service');
		var drawerService = require('services/drawer.service');
		var eventService = require('services/event.service');
		var incrementFactory = require('services/increment.factory');
		var nodeListService = require('services/node.list.service');

		var app = {
			init: function() {

				eventService.addEventListener(document, 'DOMContentLoaded', addEvents);

				function addEvents() {
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

					nodeListService.forEach(documentService.getElementById('drawerNav').childNodes, addNodeEvent);

					function addNodeEvent(node) {
						eventService.addEventListener(node, 'click', function() {
							drawerService.toggle();
						});
					}
				}
			}
		};
		module.exports = app;
	})();

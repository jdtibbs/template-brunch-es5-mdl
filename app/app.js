	(function() {
		'use strict';

		var documentService = require('services/document.service');
		var drawerService = require('services/drawer.service');
		var eventService = require('services/event.service');
		var incrementFactory = require('services/increment.factory');
		var nodeListService = require('services/node.list.service');
		var nodeService = require('services/node.service');

		var app = {
			init: function() {

				eventService.addEventListener(document, 'DOMContentLoaded', addEvents);

				function addEvents() {
					var increment = incrementFactory.create();
					var count = documentService.getElementById('count');

					eventService.addEventListener(documentService.getElementById('increment'), 'click', function() {
						nodeService.textContent(count, increment.increment());
					});

					eventService.addEventListener(documentService.getElementById('decrement'), 'click', function() {
						nodeService.textContent(count, increment.decrement());
					});

					eventService.addEventListener(documentService.getElementById('reset'), 'click', function() {
						nodeService.textContent(count, increment.reset());
					});

					drawerService.init('drawerNav');
				}
			}
		};
		module.exports = app;
	})();

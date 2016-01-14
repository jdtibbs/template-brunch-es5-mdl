(function() {
	'use strict';

	var service = {
		getElementById: function(id) {
			return document.getElementById(id);
		},
		querySelector: function(classs) {
			return document.querySelector(classs);
		},
		querySelectorAll: function(classs) {
			return document.querySelectorAll(classs);
		}
	};
	module.exports = service;
})();

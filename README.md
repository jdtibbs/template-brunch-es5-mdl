# Brunch - ES5 - Material Design Lite 

This is application template built with [Brunch](http://brunch.io), ES5, and [Material Design Lite](http://www.getmdl.io).

## Information
* Brunch
    * Configuration: See brunch-config.js
    	* Brunch defaults to using CommonJS modules.
	* Run:
		* `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server.
	* Build
    	* `brunch build --production` — builds minified project for production.
    	
* [Tape](https://github.com/substack/tape)
	* tap-producing test harness for node and browses.
	* Run test:
		* node app/services/document.service.tape.js
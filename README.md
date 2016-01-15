# Brunch - ES5 - Material Design Lite 

This is an application template built with [Brunch](http://brunch.io), ES5, and [Material Design Lite](http://www.getmdl.io).

## Information
* Brunch
    * Configuration: See brunch-config.js
    	* Brunch defaults to using CommonJS modules.
	* Run:
		* `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server.
		* -or-
		* `npm run start`
	* Build
    	* `brunch build --production` — builds minified project for production.
    	
* [Tape](https://github.com/substack/tape)
	* TAP producing test harness for node and browses.
	* See "scripts":{} in package.json for configuration.
	* To run tests:
		* `npm run test`
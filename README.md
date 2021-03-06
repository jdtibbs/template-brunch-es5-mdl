# Brunch - ES5 - Material Design Lite 

[![Build Status](https://travis-ci.org/jdtibbs/template-brunch-es5-mdl.svg?branch=master)](https://travis-ci.org/jdtibbs/template-brunch-es5-mdl)

This is an application template built with [Brunch](http://brunch.io), ES5, and [Material Design Lite](http://www.getmdl.io).

Tests are run using [Tape](https://github.com/substack/tape).  
Tests results could be piped to [Faucet](https://github.com/substack/faucet).

## Information

* Brunch
    * Configuration: 
    	* See brunch-config.js
    	* Brunch defaults to using CommonJS modules.
	* Run:
		* `brunch watch --server` watches the project with continuous rebuild. This will also launch HTTP server.
	* Build:
    	* `brunch build --production` builds minified project for production.
    	
* Tape
	* TAP-producing test harness for node and browses.
	* See "scripts":{} in package.json for run configuration.
	* To run tests:
		* All tests: `npm run test`
		* Individual test: `node ./app/services/round.service.test.js`
	* Reading:
		* [Why I Use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.71rnxb1c9)
		* [Testing JavaScript Modules with Tape](https://ponyfoo.com/articles/testing-javascript-modules-with-tape)

* Travis CI
	* Provides continuous integration service to build, test, and deploy.
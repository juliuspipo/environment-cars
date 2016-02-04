'use strict';

describe('PatternsFactory', function() {
	
		beforeEach(module('coreFactories'));

	describe('patternsFactory', function() {
		var patternsFactory;

		beforeEach(inject(function(_patternsFactory_) {
			patternsFactory = _patternsFactory_;
		}));

		all('properties should be defined', 
			['address', 'curp', 'email', 'file', 'number', 'password', 'questions', 'police', 'spanish', 'numbers'],
			function (a) {
				expect(patternsFactory[a]).toBeDefined();
			}
		);

		all('strings should be tested against email pattern', 
			[
				['ricardo.lyon@globant.com', true],
				['ricardo.lyon@globant.mx', true],
				['ricardo.lyon@globant.com.mx', true],
				['ric.globant.com', false],
				['@globant.com', false],
				['ricardo.lyon@globant', false],
				['', false]
			],
			function (a, b) {
				var test = patternsFactory.email.test(a);
				console.log('TEST: ' + test);
				expect(test).toBe(b);
			}
		)
	});

});



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

		all('CURPs should be tested',
			[
				['validcurp', true],
				['validcurp', true],
				['INvalidcurp', false],
				['INvalidCURP', false]
			],
			function (a, expected) {
				expect(patternsFactory.curp.test(a)).toBe(expected);
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
				['', false],
				[null, false],
				[undefined, false]
			],
			function (a, expected) {
				expect(patternsFactory.email.test(a)).toBe(expected);
			}
		);


	});

});



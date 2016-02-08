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

		all('addresses should be tested', 
			[
				['Av. Insurgentes Sur 859 Piso 15, Benito Juarez, Nápoles, 03100 Ciudad de México, D.F.', true],
				['@#$@%$^&', false],
				['', false],
				[null, false],
				[undefined, false]
			],
			function (a, expected) {
				expect(patternsFactory.address.test(a)).toBe(expected);
			}
		);

		all('CURPs should be tested',
			[
				['LOCR750827HBCDEF01', true],
				['locr750827hbcdef01', true],
				['LOCR750827MBCDEF01', true],
				['locr750827Mbcdef01', true],
				['LOCR750827ABCDEF01', false],
				['INvalidcurp', false],
				['INvalidCURP', false],
				['', false],
				[null, false],
				[undefined, false]
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

		all('file names should be tested', 
			[
				['file.jpg', false],
				['', true],
				[null, false],
				[undefined, false]
			],
			function (a, expected) {
				expect(patternsFactory.file.test(a)).toBe(expected);
			}
		);

	});

});



const Parser = require('binary-parser').Parser;

module.exports = {};

module.exports.parseButtons = function (data) {
	return {
		dpadleft: (data[0] & 1) > 0,
		dpadright: (data[0] & 2) > 0,
		dpaddown: (data[0] & 4) > 0,
		dpadup: (data[0] & 8) > 0,
		plus: (data[0] & 16) > 0,
		accXLSB1: (data[0] & 32) > 0,
		accXLSB2: (data[0] & 64) > 0,
		two: (data[1] & 1) > 0,
		one: (data[1] & 2) > 0,
		B: (data[1] & 4) > 0,
		A: (data[1] & 8) > 0,
		minus: (data[1] & 16) > 0,
		accYLSB: (data[1] & 32) > 0,
		accZLSB: (data[1] & 64) > 0,
		home: (data[1] & 128) > 0
	};
};

module.exports.parseAccel = function (data) {
	var accelParser = new Parser()
		.buffer('buttons', {
			length: 2,
			formatter: module.exports.parseButtons
		}) // TODO read LSBs from buttons
		.uint8('x')
		.uint8('y')
		.uint8('z');
	return accelParser.parse(data);
};

module.exports.parseOutputReport = function (data) {

};

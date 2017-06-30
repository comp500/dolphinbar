const Parser = require('binary-parser').Parser;

module.exports = {};

module.exports.parseButtons = function (data) {
	return {
		dpadleft: (data[0] & 1) > 0,
		dpadright: (data[0] & 2) > 0,
		dpaddown: (data[0] & 4) > 0,
		dpadup: (data[0] & 8) > 0,
		plus: (data[0] & 16) > 0,
		two: (data[1] & 1) > 0,
		one: (data[1] & 2) > 0,
		B: (data[1] & 4) > 0,
		A: (data[1] & 8) > 0,
		minus: (data[1] & 16) > 0,
		home: (data[1] & 128) > 0
	};
};

module.exports.parseOutputReport = function (data) {

};

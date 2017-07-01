module.exports = {};

module.exports.buildStatus = function () {
	return [0x15, 0x00];
};

module.exports.setReportingMode = function (mode) {
	return [0x12, 0x00, mode];
};

module.exports = {};

module.exports.buildStatus = function () {
	return [0x15, 0x00];
};

module.exports.setReportingMode = function (mode) {
	let modeHex = 0x30; // just buttons
	if (mode.buttons) {
		if (mode.accel) {
			modeHex = 0x31; // buttons + accel
			if (mode.ir) {
				modeHex = 0x33; // buttons + accel + ir
				if (mode.ext) {
					modeHex = 0x37; // buttons + accel + ir + ext
				}
			} else if (mode.ext) {
				modeHex = 0x35; // buttons + accel + ext
			}
		} else {
			if (mode.ir) {
				if (mode.ext) {
					modeHex = 0x36; // buttons + ir + ext
				} else {
					modeHex = 0x33; // buttons + accel + ir
				}
			} else {
				if (mode.ext) {
					if (mode.extShort) {
						modeHex = 0x32; // buttons + ext 8
					} else {
						modeHex = 0x34; // buttons + ext 19
					}
				}
			}
		}
	} else {
		modeHex = 0x3d; // only non button mode is ext 21bytes
	}
	return [0x12, 0x04, modeHex];
};

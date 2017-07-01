const HID = require("node-hid");
const builder = require("./builder.js");
const parser = require("./parse.js");
module.exports = class Wiimote extends HID.HID {
	testConnection() {
		try {
			this.write(builder.buildStatus());
			return true;
		} catch (e) {
			return false;
		}
	}
	getButtons() {
		let test = this.readSync();
		return parser.parseButtons([test[1], test[2]]);
	}
	getAccel() {
		let test = this.readSync();
		return parser.parseAccel([test[1], test[2], test[3], test[4], test[5]]);
	}
	enableAccel() {
		this.write(builder.setReportingMode(0x31));
	}
};

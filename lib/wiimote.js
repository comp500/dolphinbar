const HID = require("node-hid");
module.exports = class Wiimote extends HID.HID {
	testConnection() {
		try {
			this.write([0x15]);
			return true;
		} catch (e) {
			return false;
		}
	}
};

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
};

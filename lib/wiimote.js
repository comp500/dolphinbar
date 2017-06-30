const HID = require("node-hid");
const builder = require("./builder.js");
const parser = require("./parse.js");
module.exports = class Wiimote extends HID.HID {
	testConnection() {
		try {
			this.write(builder.buildStatus());
			return true;
		} catch (e) {
			this.close();
			return false;
		}
	}
	getButtons() {
		let test = this.readSync();
		return parser.parseButtons([test[1], test[2]]);
	}
};

const HID = require("node-hid");
const vendorID = 1406; // Nintendo vendorID
const productID = 774; // Wiimote productID

module.exports = {};

class Wiimote extends HID.HID {
	testConnection() {
		try {
			this.write([0x15]);
			return true;
		} catch (e) {
			return false;
		}
	}
};

module.exports.getHIDDevices = function () {
	return HID.devices();
};

module.exports.getDolphinBarDevices = function () {
	let devices = HID.devices();
	let dolphinBar = [];
	for (let i = 0; i < devices.length; i++) {
		if (devices[i].vendorId == vendorID && devices[i].productId == productID) {
			dolphinBar[devices[i].interface] = devices[i].path;
		}
	}
	return dolphinBar;
};

module.exports.scanWiimotes = function (timeoutSec) {
	let pathList = module.exports.getDolphinBarDevices();
	let wiimoteList = [];
	for (let i = 0; i < pathList.length; i++) {
		let wiimote = new Wiimote(pathList[i]);
		if (wiimote.testConnection()) {
			wiimoteList.push(wiimote);
		}
	}
	return wiimoteList;
};

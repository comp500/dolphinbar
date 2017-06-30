const HID = require("node-hid");
const vendorID = 1406; // Nintendo vendorID
const productID = 774; // Wiimote productID

const Wiimote = require("./lib/wiimote.js");

module.exports = {};

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

module.exports.scanWiimotes = function () {
	let pathList = module.exports.getDolphinBarDevices();
	let wiimoteList = [];
	for (let i = 0; i < pathList.length; i++) {
		let wiimote = new Wiimote(pathList[i]);
		if (wiimote.testConnection()) {
			wiimoteList.push(wiimote);
		} else {
			wiimote.close();
		}
	}
	return wiimoteList;
};

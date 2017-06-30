const HID = require("node-hid");
const vendorID = 1406; // Nintendo vendorID
const productID = 774; // Wiimote productID

module.exports = {};

module.exports.wiimotes = [];
class Wiimote extends HID.HID {

};

module.exports.getHIDDevices = function() {
	return HID.devices();
};

module.exports.getDolphinBarDevices = function() {
	let devices = HID.devices();
	let dolphinBar = [];
	for (var i = 0; i < devices.length; i++) {
		if (devices[i].vendorId == vendorID && devices[i].productId == productID) {
			dolphinBar[devices[i].interface] = devices[i].path;
		}
	}
	return dolphinBar;
};

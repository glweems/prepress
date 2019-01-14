const base = "color: white; border-radius: 2px; padding: 1.75px; font-size: 11px;"
const success = "background: green;"
const danger = "background: red;"
const warning = "background: orange;"

export const logs = {
	methods: {
		logsuccess(str) {
			console.log("%c " + str + " ", base + success)
		},
		logdanger(str) {
			console.log("%c " + str + " ", base + danger)
		},
		logwarning(str) {
			console.log("%c " + str + " ", base + warning)
		}
	}
}

export const buttonMixin = {
	methods: {
		pressed(val) {
			console.log(val);
		}
	}
};
function padZero(str, len) {
	len = len || 2;
	var zeros = new Array(len).join('0');
	return (zeros + str).slice(-len);
}

export function invertColor(hex) {
	if (hex.indexOf('#') === 0) {
		hex = hex.slice(1);
	}
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
		throw new Error('Invalid HEX color.');
	}
	// invert color components
	var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
		g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
		b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
	// pad each with zeros and return
	return '#' + padZero(r) + padZero(g) + padZero(b);
}



export default { logs, buttonMixin }
var Hexadecimal = function(input) {
	this.hexString = input;
};

Hexadecimal.prototype.toDecimal = function() {
	if (!(/^[0-9A-F]*$/i.test(this.hexString))) {
		return 0;
	}
	
	var hexLength = this.hexString.length;

	var decimal = 0;
	for (var i = hexLength; i > 0; --i) {
		decimal += parseInt(this.hexString[i - 1], 16) * Math.pow(16, hexLength - i);
	}
	
	return decimal;
};

module.exports = Hexadecimal;
var Binary = function(input) {
	this.binaryString = input;
};

Binary.prototype.toDecimal = function() {
	if (!(/^[01]*$/i.test(this.binaryString))) {
		return 0;
	}
	
	var binaryLength = this.binaryString.length;

	var decimal = 0;
	for (var i = binaryLength; i > 0; --i) {
		decimal += parseInt(this.binaryString[i - 1]) * Math.pow(2, binaryLength - i);
	}
	
	return decimal;
};

module.exports = Binary;
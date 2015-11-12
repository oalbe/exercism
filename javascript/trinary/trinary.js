var Trinary = function(input) {
	this.ncInput = input;
};

Trinary.prototype.toDecimal = function() {
	var parsedNum = parseInt(this.ncInput);
	if (isNaN(parsedNum)) {
		return 0;
	}
	
	var decimal = 0;
	
	var inputLength = this.ncInput.length - 1;
	for (var i = inputLength; i >= 0; --i) {
		var currentDigit = parseInt(this.ncInput[i]);
		if (3 <= currentDigit) {
			return 0;
		}

		decimal += currentDigit * Math.pow(3, inputLength - i);
	}
	
	return decimal;
};

module.exports = Trinary;
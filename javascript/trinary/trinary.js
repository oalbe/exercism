var Trinary = function(input) {
	this.ncInput = input;
};

Trinary.prototype.toDecimal = function() {
	if (isNaN(parseInt(this.ncInput)) && !(/^[012]*$/i.test(this.ncInput))) {
		return 0;
	}
	
	var decimal = 0;
	
	var inputLength = this.ncInput.length - 1;
	for (var i = inputLength; i >= 0; --i) {
		decimal += parseInt(this.ncInput[i]) * Math.pow(3, inputLength - i);
	}
	
	return decimal;
};

module.exports = Trinary;
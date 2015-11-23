var Octal = function(input) {
	this.octalString = input;
};

Octal.prototype.toDecimal = function() {
	if (!(/^[0-7]*$/i.test(this.octalString))) {
		return 0;
	}
	
	var octalLength = this.octalString.length;

	var decimal = 0;
	for (var i = octalLength; i > 0; --i) {
		decimal += parseInt(this.octalString[i - 1]) * Math.pow(8, octalLength - i);
	}
	
	return decimal;
};

module.exports = Octal;
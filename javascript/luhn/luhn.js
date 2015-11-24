function Luhn(input) {
	this.number = input.toString();
	this.checkDigit = parseInt(this.number[this.number.length - 1]);
	this.addends = this.computeAddends();
	this.checksum = this.computeChecksum();
	this.valid = this.isValid();
}

Luhn.prototype.computeAddends = function() {
	var addendsArray = [];
	
	var numLenght = this.number.length;
	for (var i = numLenght - 1; i >= 0; --i) {
		if (0 === (numLenght - i) % 2) {
			var doubledNumber = parseInt(this.number[i]) * 2; 
			addendsArray.unshift((doubledNumber > 9) ? doubledNumber - 9 : doubledNumber);
		} else {
			addendsArray.unshift(parseInt(this.number[i]));
		}
	}
	
	return addendsArray;
};

Luhn.prototype.computeChecksum = function() {
	var computedChecksum = 0;
	
	var addendsLength = this.addends.length;
	for (var i = 0; i < addendsLength; ++i) {
		computedChecksum += this.addends[i];
	}
	
	return computedChecksum;
};

Luhn.prototype.isValid = function() {
	return (0 === (this.checksum % 10)) ? true : false;
};

Luhn.create = function(input) {
	var paddedInput = parseInt(input.toString() + '0');
	var number = new Luhn(paddedInput);

	if (!number.isValid()) {	
		var numberChecksum = number.checksum.toString();
		
		var generatedCheckDigit = 10 - parseInt(numberChecksum[numberChecksum.length - 1]);
		
		return parseInt(input.toString() + generatedCheckDigit);
	}
	
	return paddedInput;
};

module.exports = Luhn;
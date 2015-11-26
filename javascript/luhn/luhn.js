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

// this is a static method
Luhn.create = function(input) {
	// For easily dealing with digits. Not the most optimized idea here, though.
	input = input.toString();
	var paddedInput = parseInt(input + '0');
	var number = new Luhn(paddedInput);

	if (!number.isValid()) {	
		var numChecksum = number.checksum.toString();
		var generatedCheckDigit = 10 - parseInt(numChecksum[numChecksum.length - 1]);
		
		return parseInt(input + generatedCheckDigit);
	}
	
	return paddedInput;
};

module.exports = Luhn;
var basicNumbers = {
	// weight: { class: value, class: value }
	1: { 1: 'I', 5: 'V' },
	2: { 1: 'X', 5: 'L' },
	3: { 1: 'C', 5: 'D' },
	4: { 1: 'M'}
};

function convertDigit(digit, weight) {
	if (!digit) {
		return false;
	}
	
	var romanDigit = '';
	if (3 >= digit) {
		for (var i = digit; i > 0; --i) {
			romanDigit += basicNumbers[weight][1];
		}
	} else if (4 === digit) {
		romanDigit = basicNumbers[weight][1] + basicNumbers[weight][5];
	} else if (5 === digit) {
		romanDigit = basicNumbers[weight][5];
	} else if (8 >= digit) {
		romanDigit += basicNumbers[weight][5];
		
		for (var i = digit; i > 5; --i) {
			romanDigit += basicNumbers[weight][1];
		}
	} else if (9 === digit) {
		romanDigit = basicNumbers[weight][1] + basicNumbers[weight + 1][1];
	}

	return romanDigit;
}

function toRoman(number) {
	number = number.toString();
	var numberLength = number.length;
	
	var romanNumber = '';
	for (var i = 0; i < numberLength; ++i) {
		var convertedDigit = convertDigit(parseInt(number[i]), numberLength - i);
		
		if (convertedDigit) {
			romanNumber += convertedDigit;
		}
	}
	
	return romanNumber;
}

module.exports = toRoman;
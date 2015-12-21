function Say() {}

var unclassifiables = {
	'10': 'ten',
	'11': 'eleven',
	'12': 'twelve',
	'13': 'thirteen',
	'14': 'fourteen',
	'15': 'fifteen',
	'16': 'sixteen',
	'17': 'seventeen',
	'18': 'eighteen',
	'19': 'nineteen'
};

var unities = {
	'0': 'zero',
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine'
};

var tens = {
	'2': 'twenty',
	'3': 'thirty',
	'4': 'forty',
	'5': 'fifty',
	'6': 'sixty',
	'7': 'seventy',
	'8': 'eighty',
	'9': 'ninety'
};

Say.inEnglish = function(number) {
	if (unities[number]) {
		return unities[number];
	}
	
	var englishNumber = [];
	var digits = number.toString();
	
	var digitsLength = digits.length - 1;
	for (var i = digitsLength, position = 1; i >= 0; --i) {
		if ('0' === digits[i]) {
			++position;
			continue;
		}

		switch (position) {
			case 1:
				englishNumber.unshift(unities[digits[i]]);
				
				++position;
				break;
			case 2:
				var lastTwoDigits = '';
				if ('1' === digits[i]) {
					lastTwoDigits = unclassifiables[digits[i] + digits[i + 1]];
					
					// Remove the, now unnecessary, previous unities English 
					// version from the array.
					englishNumber.pop();
					
					englishNumber.unshift(lastTwoDigits);
					
					++position;
					break;
				}
				
				if ('0' === digits[i + 1]) {
					lastTwoDigits = tens[digits[i]];
				} else {
					lastTwoDigits = tens[digits[i]] + '-' + englishNumber.pop();
				}
				
				englishNumber.unshift(lastTwoDigits);
				
				++position;
				break;
			case 6:
			case 3:
				var lastThreeDigits = '';
				if (englishNumber.length > 0) {
					lastThreeDigits = unities[digits[i]] + ' hundred ' + englishNumber.pop();
				} else {
					lastThreeDigits = unities[digits[i]] + ' hundred';
				}
				
				englishNumber.unshift(lastThreeDigits);
				
				++position;
				break;
			case 4:
				var lastFourDigits = '';
				if (englishNumber.length > 0) {
					lastFourDigits = unities[digits[i]] + ' thousand ' + englishNumber.pop();
				} else {
					lastFourDigits = unities[digits[i]] + ' thousand';
				}
				
				englishNumber.unshift(lastFourDigits);
				
				++position;
				break;
			case 5:
				var lastFiveDigits = '';
				if ('1' === digits[i]) {
					var temp = englishNumber.pop().split(' ');
					
					// Remove the first (from left) element from the number so far.
					temp.shift();
					
					lastFiveDigits = unclassifiables[digits[i] + digits[i + 1]];
					
					englishNumber.unshift(lastFiveDigits + ' ' + temp.join(' '));
					
					++position;
					break;
				}
				
				lastFiveDigits = tens[digits[i]] + '-' + englishNumber.pop();
				
				englishNumber.unshift(lastFiveDigits);
			
				++position;
				break;
			/*case 6:
				var lastSixDigits = '';
				if (englishNumber.length > 0) {
					lastSixDigits = unities[digits[i]] + ' hundred ' + englishNumber.pop();
				} else {
					lastSixDigits = unities[digits[i]] + ' hundred';
				}
				
				englishNumber.unshift(lastSixDigits);
				
				++position;
				break;*/
			case 7:
				var lastSevenDigits = '';
				if (englishNumber.length > 0) {
					lastSevenDigits = unities[digits[i]] + ' million ' + englishNumber.pop();
				} else {
					lastSevenDigits = unities[digits[i]] + ' million';
				}
				
				englishNumber.unshift(lastSevenDigits);
				
				++position;
				break;
			case 8:
				var lastEightDigits = '';
				
				var tempEight = englishNumber.pop().split(' ');
				if ('1' === digits[i]) {
					// Remove the first (from left) element from the number so far.
					tempEight.shift();
					
					lastEightDigits = unclassifiables[digits[i] + digits[i + 1]];
					
					englishNumber.unshift(lastEightDigits + ' ' + tempEight.join(' '));
					
					++position;
					break;
				}
				
				if ('0' === digits[i + 1]) {
					lastEightDigits = tens[digits[i]];
				} else {
					lastEightDigits = tens[digits[i]] + '-';
				}
				
				if (-1 === tempEight.indexOf('million')) {
					englishNumber.unshift(lastEightDigits + ' million ' + tempEight.join(' '));
					
					++position;
					break;
				}

				englishNumber.unshift(lastEightDigits + tempEight.join(' '));
				
				++position;
				break;
			case 9:
				var lastNineDigits = '';
				if (englishNumber.length > 0) {
					lastNineDigits = unities[digits[i]] + ' hundred ' + englishNumber.pop();
				} else {
					lastNineDigits = unities[digits[i]] + ' hundred';
				}
				
				englishNumber.unshift(lastNineDigits);
				
				++position;
				break;
			case 10:
				var lastTenDigits = '';
				
				if (englishNumber.length > 0) {
					lastTenDigits = unities[digits[i]] + ' billion ' + englishNumber.pop();
				} else {
					lastTenDigits = unities[digits[i]] + ' billion';
				}
				
				englishNumber.unshift(lastTenDigits);
				
				++position;
				break;
		}
	}
	
	return englishNumber.join();
};

module.exports = Say;
function Say() {}

var xteen = {
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
	if ((0 > number) || (999999999999 < number)) {
		throw new Error('Number must be between 0 and 999,999,999,999.');
	}
	
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
			case 2: case 5: case 8: case 11:
				var tempFive = [];
				var space = (2 === position) ? '' : ' ';
				
				if (englishNumber.length > 0) {
					tempFive = englishNumber.pop().split(' ');
				}
				
				if ('1' === digits[i]) {
					// Remove the first (from left) element from the number so far.
					tempFive.shift();
					
					var xteenNumber = xteen[digits[i] + digits[i + 1]];
					englishNumber.unshift(xteenNumber + space + tempFive.join(' '));
					
					++position;
					break;
				}
				
				var currentTwoDigits = tens[digits[i]] + (('0' !== digits[i + 1]) ? '-' : '');
				
				if (2 !== position) {
					var mb_illion = 'thousand';
					if (8 === position) {
						mb_illion = 'million'
					} else if (11 === position) {
						mb_illion = 'billion';
					}
					
					if (-1 === tempFive.indexOf(mb_illion)) {
						englishNumber.unshift(
							currentTwoDigits + ' ' + mb_illion + ' ' + tempFive.join(' ')
						);
						
						++position;
						break;
					}
				}
				
				englishNumber.unshift(currentTwoDigits + tempFive.join(' '));
			
				++position;
				break;
			case 3: case 6: case 9: case 12: // Deals with hundreds
			case 4: case 7: case 10:
				var magnitude = ' hundred';
				if (4 === position) {
					magnitude = ' thousand';
				} else if (7 === position) {
					magnitude = ' million';
				} else if (10 === position) {
					magnitude = ' billion';
				}
					
				var currentOneDigit = '';
				if (englishNumber.length > 0) {
					currentOneDigit = unities[digits[i]] + magnitude + ' ' + englishNumber.pop();
				} else {
					currentOneDigit = unities[digits[i]] + magnitude;
				}
				
				englishNumber.unshift(currentOneDigit);
				
				++position;
				break;
		}
	}
	
	return englishNumber.join();
};

module.exports = Say;
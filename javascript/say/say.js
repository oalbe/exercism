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

function Say() {}

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
		
		if (1 === position) {
			// Deals with rightmost digit
			englishNumber.unshift(unities[digits[i]]);
				
			++position;
			continue;
		} else if (2 === (position % 3)) {
			// Deals with tens (tens of hundred, tens of thousand etc.)
			var temp = [];
			var space = (2 === position) ? '' : ' ';
			
			if (englishNumber.length > 0) {
				temp = englishNumber.pop().split(' ');
			}
			
			if ('1' === digits[i]) {
				// Remove the first (from left) element from the number so far.
				temp.shift();
				
				var xteenNumber = xteen[digits[i] + digits[i + 1]];
				englishNumber.unshift(xteenNumber + space + temp.join(' '));
				
				++position;
				continue;
			}
			
			var currentTwoDigits = tens[digits[i]] + (('0' !== digits[i + 1]) ? '-' : '');
			
			if (2 !== position) {
				var magnitude = 'thousand';
				if (8 === position) {
					magnitude = 'million'
				} else if (11 === position) {
					magnitude = 'billion';
				}
				
				if (-1 === temp.indexOf(magnitude)) {
					englishNumber.unshift(
						currentTwoDigits + ' ' + magnitude + ' ' + temp.join(' ')
					);
					
					++position;
					continue;
				}
			}
			
			englishNumber.unshift(currentTwoDigits + temp.join(' '));

			++position;
			continue;
		} else if ((0 === (position % 3)) || (1 === (position % 3))) {
			// Deals with hundreds, thousands, millions and billions (like 1000, 9.234.567)
			var magnitude = '';
			if (0 === (position % 3)) {
				magnitude = ' hundred';
			} else if (4 === position) {
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
			continue;
		}
	}
	
	return englishNumber.join();
};

module.exports = Say;
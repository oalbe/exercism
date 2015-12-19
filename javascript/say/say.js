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
	
	if (tens[number]) {
		return tens[number];
	}
	
	var englishNumber = [];
	
	var digits = number.toString();
	var digitsLength = digits.length;
	var position = 1;
	for (var i = digitsLength - 1; i >= 0; --i) {
		switch (position) {
			case 1:
				if ('0' === digits[i]) {
					++position;
					break;
				}
				
				englishNumber.unshift(unities[digits[i]]);
				
				++position;
				break;
			case 2:
				if ('0' === digits[i]) {
					++position;
					break;
				}
				
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
		}
	}
	
	return englishNumber.join();
};

module.exports = Say;
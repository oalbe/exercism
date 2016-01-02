// Creates an array containing the strings corresponding to each line of the multi-line number.
function parseMultilines(binaryString) {
	var multiline = [];
	
	var rows = binaryString.split('\n');
	
	var offset = (rows[0].length + 1) * 4;
	var numberOfDigitLines = parseInt(rows.length / 4);
	for (var i = 0; i < numberOfDigitLines; ++i) {
		multiline.push([]);
	
		multiline[i] = binaryString.substr(i * offset, offset);
	}
	
	return multiline;
}

function toArr(binaryString) {
	var arrOfBinaries = [];
	
	// First, create an array of rows split by '\n'.
	var arrRows = binaryString.split('\n');
	
	// Second, loop through the array, three characters per row at time.
	var numOfMatrixes = parseInt(arrRows[0].length / 3);
	var numRows = arrRows.length - 1;
	
	for (var i = 0; i < numRows; ++i) { // For each row.
		for (var j = 0; j < numOfMatrixes; ++j) {
			if (0 === i) {
				arrOfBinaries.push([]);
			}
			
			arrOfBinaries[j].push(arrRows[i].substr(j * 3, 3));
		}
	}
	
	return arrOfBinaries;
}

function serialize(binaryMatrix) {
	var serialized = [];
	
	var arr = [];
	for (var m = 0; m < 3; ++m) {
		for (var a = 0; a < 3; ++a) {
			arr.push(binaryMatrix[m][a]);
		}
	}
	
	for (var i = 1; i < 9; ++i) {
		if (2 === i) continue;
		
		serialized.push((' ' === arr[i]) ? 0 : 1);
	}
	
	return serialized;
}

var BCD = {
	'1101111': '0',
	'0001001': '1',
	'1011110': '2',
	'1011011': '3',
	'0111001': '4',
	'1110011': '5',
	'1110111': '6',
	'1001001': '7',
	'1111111': '8',
	'1111011': '9'
};

function OCR() {}

OCR.convert = function(binaryNumber) {
	var parsedMulti = parseMultilines(binaryNumber);
	
	var digits = [];
	var parsedMultiLength = parsedMulti.length;
	for (var l = 0; l < parsedMultiLength; ++l) {
		digits.push(toArr(parsedMulti[l]));
	}
	
	var composedBCD = [];
	
	var digitsRows = digits.length;
	for (var j = 0; j < digitsRows; ++j) {
		var digitsLimit = digits[j].length;
		
		for (var i = 0; i < digitsLimit; ++i) {
			var nextDigit = BCD[serialize(digits[j][i]).join('').toString()];
			
			// Recognize garbled digits and deal with them.
			// Then appends the result to the string of translated digits.
			composedBCD += ('undefined' === typeof nextDigit) ? '?' : nextDigit;
		}

		composedBCD += ',';
	}

	// substr removes the last comma appended to the BCD.
	return composedBCD.substr(0, composedBCD.length - 1);
};

module.exports = OCR;
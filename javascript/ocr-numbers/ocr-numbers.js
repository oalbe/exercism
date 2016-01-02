// Creates an array containing the strings corresponding to each line of the multi-line number.
function parseMultilines(binaryString) {
	var multiline = [];
	
	var rows = binaryString.split('\n');
	var numRows = rows.length;
	var numberOfDigitLines = parseInt(numRows / 4);
	
	for (var i = 0; i < numberOfDigitLines; ++i) {
		multiline.push([]);
	
		var offset = (rows[0].length + 1) * 4;	
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
	
	var value;
	for (var i = 1; i < 9; ++i) {
		if (2 === i) continue;
		
		value = 1;
		if (' ' === arr[i]) {
			value = 0;
		}
		
		serialized.push(value);
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
	var lines = binaryNumber.split('\n');
	
	var parsedMulti = [];
	var arrOfBinaries = [];

	parsedMulti = parseMultilines(binaryNumber);
	
	arrOfBinaries = [];
	var parsedMultiLength = parsedMulti.length;
	for (var l = 0; l < parsedMultiLength; ++l) {
		arrOfBinaries.push(toArr(parsedMulti[l]));
	}
	
	var composedBCD = [];
	var serializedNum = [];
	
	var digitsRows = arrOfBinaries.length;
	for (var j = 0; j < digitsRows; ++j) {
		var digitsLimit = arrOfBinaries[j].length;
		for (var i = 0; i < digitsLimit; ++i) {
			serializedNum[i] = serialize(arrOfBinaries[j][i]);
			
			var nextDigit = BCD[serializedNum[i].join('').toString()];
			if ('undefined' === typeof nextDigit) {
				composedBCD += '?';
			} else {
				composedBCD += nextDigit;
			}
		}

		composedBCD += ',';
	}

	return composedBCD.substr(0, composedBCD.length - 1);
};

module.exports = OCR;
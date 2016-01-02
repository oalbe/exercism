function parseMultilines(binaryString) {
	var matIndex = 0;
	
	// First, create an array of rows split by '\n'.
	var arrRows = binaryString.split('\n');
	var numRows = binaryString.length;
	
	var numberOfDigitLines = parseInt(arrRows.length / 4);
	
	var multiline = [];
	
	for (var i = 0; i < numberOfDigitLines; ++i) {
		multiline.push([]);
		multiline[i] = binaryString.substr(i * 40, 40);
	}
	
	return multiline;
}

function toArr(binaryString) {
	var arrOfBinaries = [];
	
	// First, create an array of rows split by '\n'.
	var arrRows = binaryString.split('\n');
	
	// Second, loop through the array, three characters per row at time.
	var limit = arrRows[0].length;
	var numOfMatrixes = parseInt(limit / 3);
	var numRows = arrRows.length - 1;
	
	for (var i = 0; i < numRows; ++i) { // For each row.
		for (var k = 0; k < numOfMatrixes; ++k) {
			if (0 === i) {
				arrOfBinaries.push([]);
			}
			
			arrOfBinaries[k].push(arrRows[i].substr(k * 3, 3));
		}
	}
	
	return arrOfBinaries;
}

function toMatrix(binaryString) {
	return binaryString.split('\n').map(function(row) {
		return row.split('');
	});
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

OCR.convert = function(binaryNumber) {
	var lines = binaryNumber.split('\n');
	
	var parsedMulti = [];
	var arrOfBinaries = [];
	if (lines.length > 4) {
		parsedMulti = parseMultilines(binaryNumber);
		
		arrOfBinaries = [];
		for (var l = 0; l < parsedMulti.length; ++l) {
			arrOfBinaries.push(toArr(parsedMulti[l]));
		}
		
		var composedBCD = [];
		var digitsRows = arrOfBinaries.length;
		
		var serializedNum = [];
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
	} else {
		arrOfBinaries = toArr(binaryNumber);
		var limit = arrOfBinaries.length;
		
		var cpdBCD = [];
		var serNum = [];
		for (var k = 0; k < limit; ++k) {
			serNum[k] = serialize(arrOfBinaries[k]);
			
			var nxtDigit = BCD[serNum[k].join('').toString()];
			if ('undefined' === typeof nxtDigit) {
				cpdBCD += '?';
			} else {
				cpdBCD += nxtDigit;
			}
		}
		
		return cpdBCD;
	}
};

module.exports = OCR;
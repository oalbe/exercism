function toArr(binaryString) {
	var arrOfBinaries = [];
	
	// First, create an array of rows split by '\n'.
	var arrRows = binaryString.split('\n');
	console.log(arrRows);
	
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
	
	// console.log(arrOfBinaries);
	
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
	
	// console.log(arr);
	
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
	var arrOfBinaries = toArr(binaryNumber);
	var digitsLimit = arrOfBinaries.length;
	
	var composedBCD = [];
	
	var matrixRep = [];
	var serializedNum = [];
	for (var i = 0; i < digitsLimit; ++i) {
		matrixRep.push(toMatrix(binaryNumber));
		
		// console.log(matrixRep);
		
		serializedNum[i] = serialize(matrixRep[i]);
		
		console.log(serializedNum[i]);
		
		composedBCD += BCD[serializedNum[i].join('').toString()];
	}
	
	// console.log(matrixRep);
	
	// console.log('SN = ' + serializedNum.join('').toString());
	return composedBCD;
};

module.exports = OCR;
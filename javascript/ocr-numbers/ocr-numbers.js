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
	
	console.log(arr);
	
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
	var matrixRep = toMatrix(binaryNumber);
	
	console.log(matrixRep);
	
	var serializedNum = serialize(matrixRep);
	
	console.log('SN = ' + serializedNum.join('').toString());
	return BCD[serializedNum.join('').toString()];
};

module.exports = OCR;
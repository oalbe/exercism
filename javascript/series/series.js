function Series(string) {
	this.digits = digitize(string);
}

Series.prototype.slices = function(slicesNum) {
	if (slicesNum > this.digits.length) {
		throw new Error('Slice size is too big.');
	}
	
	var limit = this.digits.length - (slicesNum - 1);
	var generatedSlices = [];
	
	for (var i = 0; i < limit; ++i) {
		var slice = [];
		for (var span = 0; span < slicesNum; ++span) {
			slice.push(this.digits[i + span]);
		}
		
		generatedSlices.push(slice);
	}

	return generatedSlices;
};

function digitize(string) {
	var digits = [];
	var stringLength = string.length;
	for (var i = 0; i < stringLength; ++i) {
		digits.push(parseInt(string[i]));
	}
	
	return digits;
}

module.exports = Series;
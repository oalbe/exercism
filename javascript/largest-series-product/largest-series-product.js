Array.prototype.max = function() {
	return Math.max.apply(null, this);
};

function Series(input) {
	this.digits = input.split('').map(function(element) {
		return parseInt(element);
	});
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

Series.prototype.largestProduct = function(num) {
	var slicedSeries = this.slices(num);
	
	var products = [];
	var partialProduct;
	
	var slicesCount = slicedSeries.length;
	for (var i = 0; i < slicesCount; ++i) {
		partialProduct = 1;
		for (var j = 0; j < num; ++j) {
			partialProduct *= slicedSeries[i][j];
		}
		
		products.push(partialProduct);
	}
	
	return products.max();
};

module.exports = Series;
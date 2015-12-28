// REVIEW: I don't think writing a constructor this way is a good idea. Figure out.
function SumOfMultiples(input) {
	if (!(this instanceof SumOfMultiples)) {
	    if ('undefined' === typeof input) {
		    return new SumOfMultiples([3, 5]);
		} else {
		    return new SumOfMultiples(input);
		}
	}
	
	this.factors = input;
}

function multiple(number, factors) {
	var factorsLength = factors.length;
	for (var i = 0; i < factorsLength; ++i) {
		if (0 === (number % factors[i])) {
			return true;
		}
	}
	
	return false;
};

SumOfMultiples.prototype.to = function(limit) {
	var sum = 0;
	
	for (var i = 0; i < limit; ++i)	{
		if (multiple(i, this.factors)) {
			sum += i;
		}
	}
	
	return sum;
};

module.exports = SumOfMultiples;
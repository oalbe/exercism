// REVIEW: I don't think writing a constructor this way is a good idea.
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

function multiple(number, factor) {
	if (0 === (number % factor)) {
		return true;
	}
	
	return false;
};

SumOfMultiples.prototype.to = function(limit) {
	var sum = 0;
	var flag = false;
	var factorsLength = this.factors.length;
	for (var i = 0; i < limit; ++i)	{
		for (var j = 0; j < factorsLength; ++j) {
			if (multiple(i, this.factors[j])) {
				flag = true;
			}
		}
		
		if (flag) {
			sum += i;
		}
		
		flag = false;
	}
	
	return sum;
};

module.exports = SumOfMultiples;
var primeFactors = function() {};

primeFactors.prototype.for = function(number) {
	var factors = [];
	
	for (var i = 2; i <= number; ++i) {
		if (number % i === 0) {
			number = number / i;
			factors.push(i);
			
			i = 1;
		}
	}
	
	return factors;
};

module.exports = new primeFactors();
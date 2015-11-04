var primeFactors = function() {};

primeFactors.prototype.for = function(number) {
	var factors = [];
	
	for (var i = 2; i <= number; ++i) {
		if (0 === (number % i)) {
			factors.push(i);
			
			number /= i;
			i = 1;
		}
	}
	
	return factors;
};

module.exports = new primeFactors();
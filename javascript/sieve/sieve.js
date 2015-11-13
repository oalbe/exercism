var Sieve = function(limit) {
	this.limit = limit;
	this.primes = this.findPrimes();
};

Sieve.prototype.generateSequence = function() {
	var sequence = {};
	for (var i = 2; i <= this.limit; ++i) {
		sequence[i] = false;
	}
	
	return sequence;
};

Sieve.prototype.findPrimes = function() {
	var sequence = this.generateSequence();
	
	for (var i = 2; i <= this.limit; ++i) {
		// Jumps to the next iteration of the loop in case the current iteration
		// (current `i`) is a number of the sequence we already marked.
		if (true === sequence[i]) {
			continue;
		}
		
		for (var j = i + 1; j <= this.limit; ++j) {
			if (0 === (j % i)) {
				sequence[j] = true;
			}
		}
		
	}
	
	return this.objToArr(sequence);
	
};

Sieve.prototype.objToArr = function(obj) {
	var arr = [];
	for (var key in obj) {
		if (false === obj[key]){
			arr.push(parseInt(key));
		}
	}
	
	return arr;
};

module.exports = Sieve;
function Prime() {}

function isPrime(number) {
	for(var i = 2; i < number; ++i) {
        if (0 === (number % i)) {
            return false;
        }
    }
    
    return true;
}

// Brute forcedly find all the primes up to `index`.
// This takes a buttload of time...
Prime.nth = function(index) {
	if (index < 1) {
		throw new Error('Prime is not possible');
	}
	
	var i = 0;
    for(var possiblePrime = 2; i < index; ++possiblePrime) {
        if (isPrime(possiblePrime)) {
            ++i;
        }
    }

    return possiblePrime - 1;
};

module.exports = Prime;
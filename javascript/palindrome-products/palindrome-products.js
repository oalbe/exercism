Array.prototype.max = function() {
  	return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  	return Math.min.apply(null, this);
};

function isPalindrome(number) {
	var stringizedNumber = number.toString();
	
	var digits = stringizedNumber.length;
	for (var i = 0; i < digits; ++i) {
		if (stringizedNumber[i] !== stringizedNumber[digits - i - 1]) {
			return false;
		}
	}
	
	return true;
}

function Palindromes(initObject) {
	this.maxFactor = initObject.maxFactor;
	this.minFactor = 'undefined' === typeof initObject.minFactor ? 1 : initObject.minFactor;
}

Palindromes.prototype.generate = function() {
	this.pFactors = {};
	this.pProducts = [];
	
	var product = 0;
	for (var i = this.maxFactor; i >= this.minFactor; --i) {
		for (var j = this.maxFactor; j >= this.minFactor; --j) {
			product = i * j;
			if (isPalindrome(product)) {
				this.pFactors[product] = [i, j];
				this.pProducts.push(product);
			}
		}
	}
};

Palindromes.prototype._largest_smallest_helper = function(callback) {
	var product = callback.call(this.pProducts);
	
	return {
		value: product,
		factors: [this.pFactors[product]]
	};
};

Palindromes.prototype.largest = function() {
	return this._largest_smallest_helper(Array.prototype.max);
};

Palindromes.prototype.smallest = function() {
	return this._largest_smallest_helper(Array.prototype.min);
};

module.exports = Palindromes;
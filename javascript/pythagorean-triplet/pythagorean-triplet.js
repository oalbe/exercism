function Triplet(first, second, third) {
	this.first = first;
	this.second = second;
	this.third = third;
}

Triplet.prototype.sum = function() {
	return this.first + this.second + this.third;
};

Triplet.prototype.product = function() {
	return this.first * this.second * this.third;
};

Triplet.prototype.isPythagorean = function() {
	var firstSquared = Math.pow(this.first, 2);
	var secondSquared = Math.pow(this.second, 2);
	var thirdSquared = Math.pow(this.third, 2);
	
	if ((firstSquared + secondSquared) === thirdSquared) {
		return true;
	}
	
	return false;
};

module.exports = Triplet;
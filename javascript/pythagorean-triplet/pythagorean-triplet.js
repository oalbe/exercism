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

function pythagorean(a, b, c) {
	var firstSquared = Math.pow(a, 2);
	var secondSquared = Math.pow(b, 2);
	var thirdSquared = Math.pow(c, 2);
	
	if ((firstSquared + secondSquared) === thirdSquared) {
		return true;
	}
	
	return false;
}

Triplet.prototype.isPythagorean = function() {
	return pythagorean(this.first, this.second, this.third);
};

Triplet.where = function(object) {
	if (!object.hasOwnProperty('maxFactor')) {
		return [];
	}
	
	var generatedTriples = [];
	
	var triple = new Triplet(1, 1, 1);
	
	var startingPoint = 2;
	if (object.hasOwnProperty('minFactor')) {
		startingPoint = object.minFactor;
	}
	
	var sumFilter = false;
	if (object.hasOwnProperty('sum')) {
		sumFilter = object.sum;
	}
	
	// TODO: Optimize this ugly thing. Seriously.
	var limit = object.maxFactor + 1;
	for (var a = startingPoint; a < limit; ++a) {
		for (var b = a; b < limit; ++b) {
			for (var c = b; c < limit; ++c) {
				if (pythagorean(a, b, c)) {
					if (sumFilter) {
						if ((a + b + c) === sumFilter) {
							generatedTriples.push(new Triplet(a, b, c));
						}
					} else {
						generatedTriples.push(new Triplet(a, b, c));
					}
				}
			}
		}
	}

	return generatedTriples;
};

module.exports = Triplet;
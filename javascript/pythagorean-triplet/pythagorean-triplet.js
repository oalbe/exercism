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
	var a_sqr = Math.pow(a, 2);
	var b_sqr = Math.pow(b, 2);
	var c_sqr = Math.pow(c, 2);
	
	if ((a_sqr + b_sqr) === c_sqr) {
		return true;
	}
	
	return false;
}

Triplet.prototype.isPythagorean = function() {
	return pythagorean(this.first, this.second, this.third);
};

function tripletsGenerator(begin, end) {
	var triplets = [];
	
	// Generates an array of ALL possible triplets
	// TODO: Optimize this ugly thing. Seriously.
	for (var a = begin; a < end; ++a) {
		for (var b = a; b < end; ++b) {
			for (var c = b; c < end; ++c) {
				if (pythagorean(a, b, c)) {
					triplets.push(new Triplet(a, b, c));
				}
			}
		}
	}
	
	return triplets;
}

Triplet.where = function(object) {
	if (!object.hasOwnProperty('maxFactor')) {
		return [];
	}
	
	var startingPoint = 2;
	if (object.hasOwnProperty('minFactor')) {
		startingPoint = object.minFactor;
	}
	
	var generatedTriplets = tripletsGenerator(startingPoint, object.maxFactor + 1);

	// Filters triplets on sum if needed
	if (object.hasOwnProperty('sum')) {
		return tripletsFilter(generatedTriplets, object.sum);
	}
	
	return generatedTriplets;
};

function tripletsFilter(triplets, filter) {
	var filteredTriplets = [];
	
	var tripletsLength = triplets.length;
	for (var i = 0; i < tripletsLength; ++i) {
		if (triplets[i].sum() === filter) {
			filteredTriplets.push(triplets[i]);
		}
	}
	
	return filteredTriplets;
}

module.exports = Triplet;
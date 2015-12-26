// TODO: Try rewriting this exercise as structured directly inherited from Array.
function CustomSet(arrElements) {
	this.elements = ('undefined' === typeof arrElements) ? [] : arrElements;
	
	this.length = this.elements.length;
}

CustomSet.prototype.sort = function() {
	return this.elements.sort();
};

CustomSet.prototype.eql = function(set) {
	if (this.elements.length !== set.length) {
		return false;
	}
	
	if (0 === set.length) {
		return true;
	}

	var thisSet = this.elements.sort();
	var anotherSet = set.sort();
	
	var thisSetLength = thisSet.length;
	for (var i = 0; i < thisSetLength; ++i) {
		if (thisSet[i] !== anotherSet[i]) {
			return false;
		}
	}
	
	return true;
};

CustomSet.prototype.delete = function(element) {
	var elementIndex = this.elements.indexOf(element);
	
	// Return prematurely in case you are trying to delete an element 
	// that's not actually part of the set.
	if (-1 === elementIndex) {
		return this;
	}
	
	this.elements.splice(elementIndex, 1);
	return this;
};

CustomSet.prototype.difference = function(set) {
	var diff = [];
	
	var elements = this.elements;
	var elementsLength = elements.length;
	for (var i = 0; i < elementsLength; ++i) {
		if (-1 === set.elements.indexOf(elements[i])) {
			diff.push(elements[i]);
		}
	}
	
	return new CustomSet(diff);
};

CustomSet.prototype.disjoint = function(set) {
	if ((0 === set.length) || (0 === this.elements.length)) {
		return true;
	}
	
	var elements = this.elements
	var setLength = set.length;
	for (var i = 0; i < setLength; ++i) {
		if (-1 !== elements.indexOf(set.elements[i])) {
			return false;
		}
	}
	
	var elementsLength = this.elements.length;
	for (var j = 0; j < elementsLength; ++j) {
		if (-1 !== set.elements.indexOf(elements[j])) {
			return false;
		}
	}
	
	return true;
};

CustomSet.prototype.empty = function() {
	this.elements = [];
	
	// For chaining purposes.
	return this;
};

// TODO: This could be optimized by looping on the smaller set of the two.
CustomSet.prototype.intersection = function(set) {
	var intersect = [];
	
	var elements = this.elements;
	var setLength = set.length;
	for (var i = 0; i < setLength; ++i) {
		if (-1 !== elements.indexOf(set.elements[i])) {
			intersect.push(set.elements[i]);
		}
	}
	
	return new CustomSet(intersect);
};

module.exports = CustomSet;
function CustomSet(arrElements) {
	this.elements = arrElements;
	
	this.length = this.elements.length;
}

CustomSet.prototype.sort = function() {
	return this.elements.sort();
};

CustomSet.prototype.eql = function(set) {
	if (this.elements.length !== set.length) {
		return false;
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

module.exports = CustomSet;
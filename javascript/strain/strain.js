var Strain = function() {};

Strain.prototype._helper = function(collection, callback, mode) {
	var remainingElements = [];
	
	var collectionLength = collection.length;
	for (var i = 0; i < collectionLength; ++i) {
		if (mode === callback(collection[i])) {
			remainingElements.push(collection[i]);
		}
	}
	
	return remainingElements;
};

Strain.prototype.keep = function(collection, callback) {
	return this._helper(collection, callback, true);
};

Strain.prototype.discard = function(collection, callback) {
	return this._helper(collection, callback, false);
};


module.exports = new Strain();
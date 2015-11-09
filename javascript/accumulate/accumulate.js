function accumulate(collection, callback) {
	if ('undefined' === typeof collection) {
		return [];
	}
	
	var resultCollection = [];
	
	var collectionLength = collection.length;
	for (var i = 0; i < collectionLength; ++i) {
		resultCollection[i] = callback(collection[i]);
	}
	
	return resultCollection;
}

module.exports = accumulate;
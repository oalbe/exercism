function BinarySearch(inputArray) {
	if (inputArray.isSorted()) {
		this.array = inputArray;
	}
}

Array.prototype.equals = function (compareArray) {
    if (!compareArray) {
        return false;
    }

    if (this.length !== compareArray.length) {
        return false;
    }

    var limit = this.length;
    for (var i = 0; i < limit; ++i) {
        if (this[i] !== compareArray[i]) {
            return false;   
        }           
    }
    
    return true;
};

Array.prototype.isSorted = function() {
	var test = this.slice();
	
	test.sort(function(a, b) { return a < b ? -1 : 1; });
	if (this.equals(test)) {
		return true;
	}
	
	return false;
};

BinarySearch.prototype.indexOf = function(element) {
	var begin = 0;
	var end = this.array.length - 1;
	
	while (begin <= end) {
		var middle = Math.floor((begin + end) / 2);
		
		if (element === this.array[middle]) {
			return middle;
		} else if (element > this.array[middle]) {
			begin = middle + 1;
		} else {
			end = middle - 1;
		}
	}
	
	return -1; // Element not found.
};

module.exports = BinarySearch;
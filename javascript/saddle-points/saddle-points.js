Array.prototype.max = function() {
	return Math.max.apply(null, this);
};

Array.prototype.min = function() {
	return Math.min.apply(null, this);
};

function Matrix(initString) {
	this.rows = [];
	this.columns = [];
	
	if ('undefined' !== typeof initString) {
		this.rows = initString.split('\n').map(function(row) {
			return row.split(' ').map(function(element) {
				return parseInt(element)
			})
		});
		
		var rowsNum = this.rows.length;
		var rowsLength = this.rows[0].length;
		for (var i = 0; i < rowsLength; ++i) {
			this.columns.push([]);
			for (var j = 0; j < rowsNum; ++j) {
				this.columns[i][j] = this.rows[j][i];
			}
		}
	}
	
	this.saddlePoints = this.findSaddlePoints();
}

// Returns an array of the coordinates of the element inside Matrix,
// including coordinates of duplicates.
Matrix.prototype.coordinatesRow = function(element, rowIndex) {
	var coordinates = [];
	
	var rowLength = this.rows[rowIndex].length;
	for (var i = 0; i < rowLength; ++i) {
		if (element === this.rows[rowIndex][i]) {
			coordinates.push([rowIndex, i]);
		}
	}
	
	return coordinates;
};

Matrix.prototype.findSaddlePoints = function() {
	var saddles = [];
	
	// Loop all the lines.
	var rowsLimit = this.rows.length;
	for (var i = 0; i < rowsLimit; ++i) {
		// For each line, find the max element in that line.
		var maxRowElem = this.rows[i].max();
				
		// Extract the coordinates of that element and its duplicates.
		var maxCoord = this.coordinatesRow(maxRowElem, i);
		
		var coordLimit = maxCoord.length;
		for (var c = 0; c < coordLimit; ++c) {
			var rowIndex = maxCoord[c][0];
			var colIndex = maxCoord[c][1];

			// For each column of the found max elements, find the min element in that column.
			var minColElem = this.columns[colIndex].min();

			if (minColElem === maxRowElem) {
				saddles.push([rowIndex, colIndex]);
			}
		}
	}
	
	return saddles;
};

module.exports = Matrix;
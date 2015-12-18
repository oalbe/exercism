function PascalTriangle(numRows) {
	this.rows = this.generateRows(numRows);
	this.lastRow = this.rows[this.rows.length - 1];
}

PascalTriangle.prototype.generateRows = function(limit) {
	if (1 === limit) {
		return [[1]];
	}
	
	if (2 === limit) {
		return [[1], [1, 1]];
	}
	
	var pascalTriangleRows = [[1], [1, 1]];
	limit -= 2;
	for (var i = 0; i < limit; ++i) {
		var currentRow = [1];
		
		var lastRow = pascalTriangleRows[pascalTriangleRows.length - 1];
		var lastRowLength = lastRow.length - 1;
		for (var j = 0; j < lastRowLength; ++j) {
			currentRow.push(lastRow[j] + lastRow[j + 1]);
		}
		currentRow.push(1);
		
		pascalTriangleRows.push(currentRow);
	}
	
	return pascalTriangleRows;
};

module.exports = PascalTriangle;
function Matrix(stringizedMatrix) {
	this.input = stringizedMatrix;
	this.rows = this.parseRows();
	this.columns = this.parseColumns();
}

Matrix.prototype.parseRows = function() {
	var stringRows = this.input.split('\n');
	
	var rows = [];

	// REVIEW: I could have done this with a `for` and a `map()` call or two `for`s,
	// but for some reason JSLint complained about creating functions inside loops.
	stringRows.map(function(stringRow) {
		rows.push(stringRow.split(' ').map(function(element) {
			return parseInt(element);
		}));
	});
	
	return rows;
};

Matrix.prototype.parseColumns = function() {
	var columns = [];
	
	var colsNum = this.rows.length;
	var rowsNum = this.rows[0].length;
	for (var i = 0; i < rowsNum; ++i) {
		var column = [];
		
		for (var j = 0; j < colsNum; ++j) {
			column.push(this.rows[j][i]);
		}
		
		columns.push(column);
	}
	
	return columns;
};

module.exports = Matrix;
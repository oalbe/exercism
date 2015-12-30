function Matrix(initString) {
	this.rows = ('undefined' === typeof initString) ? [] : initString.split('\n').map(function(row) { return row.split(' ').map(function(element) { return parseInt(element)})});
}

module.exports = Matrix;
function Squares(limit) {
	this.squareOfSums = this._square_of_sums(limit);
	this.sumOfSquares = this._sum_of_squares(limit);
	this.difference = this.squareOfSums - this.sumOfSquares;
}

Squares.prototype._square_of_sums = function(limit) {
	var sum = 0;
	for (var i = 2; i <= limit; ++i) {
		sum += i;
	}
	
	return Math.pow(sum + 1, 2);
};

Squares.prototype._sum_of_squares = function(limit) {
	var sum = 0;
	for (var i = 2; i <= limit; ++i) {
		sum += Math.pow(i, 2);
	}
	
	return sum + 1;
};

module.exports = Squares;
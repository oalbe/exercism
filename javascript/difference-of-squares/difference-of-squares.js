function Squares(limit) {
	this.squareOfSums = this._square_of_sums(limit);
	this.sumOfSquares = this._sum_of_squares(limit);
	this.difference = this.squareOfSums - this.sumOfSquares;
}

Squares.prototype._square_of_sums = function(limit) {
	var sum = 1;
	for (var i = 2; i <= limit; ++i) {
		sum += i;
	}
	
	return sum * sum;
};

Squares.prototype._sum_of_squares = function(limit) {
	var sum = 1;
	for (var i = 2; i <= limit; ++i) {
		sum += i * i;
	}
	
	return sum;
};

module.exports = Squares;
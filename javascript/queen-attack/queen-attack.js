String.prototype.replace = function(index, new_chr) {
    return this.substr(0, index) + new_chr + this.substr(index + new_chr.length);
};

function Queens(posObj) {
	if ('undefined' === typeof posObj) {
		this.white = [0, 3];
		this.black = [7, 3];
	} else {
		if (posObj.white === posObj.black) {
			throw 'Queens cannot share the same space';
		}
		
		this.white = posObj.white;
		this.black = posObj.black;
	}
}

Queens.prototype.toString = function() {
	var stringified_board = "";
    for (var i = 0; i < 8; ++i) {
        stringified_board += "_ _ _ _ _ _ _ _\n";
    }
    
    var white_position = 2 * ((this.white[0] * 8) + this.white[1]);
    var black_position = 2 * ((this.black[0] * 8) + this.black[1]);

    return stringified_board.replace(white_position, 'W').replace(black_position, 'B');
};

Queens.prototype.canAttack = function() {
	// Check if they are in the same line
	if (this.white[0] === this.black[0]) {
		return true;
	}
	
	// Check if they are in the same column
	if (this.white[1] === this.black[1]) {
		return true;
	}
	
	// Check if they are in the same diagonal
	var deltax = this.white[0] - this.black[0];
	var deltay = this.white[1] - this.black[1];

	if (deltay === -deltax) {
		return true;
	}
	
	return deltay === deltax;
};

module.exports = Queens;
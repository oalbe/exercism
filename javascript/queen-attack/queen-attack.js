function Queens(posObj) {
	if ('undefined' === typeof posObj) {
		this.white = [0, 3];
		this.black = [7, 3];
	} else {
		if (posObj.white === posObj.black) {
			throw 'Queens cannot share the same space';
		} else {
			this.white = posObj.white;
			this.black = posObj.black;
		}
	}
}

function initMatrix() {
	var matrix = [];
	
	for (var i = 0; i < 8; ++i) {
		matrix.push([]);
		for (var j = 0; j < 8; ++j) {
			matrix[i].push('_');
		}
	}
	
	return matrix;
}

Queens.prototype.toString = function() {
	var strBoard = '';
	var matrixBoard = initMatrix();
	
	matrixBoard[this.white[0]][this.white[1]] = 'W';
	matrixBoard[this.black[0]][this.black[1]] = 'B';
	
	for (var i = 0; i < 8; ++i) {
		strBoard += matrixBoard[i].join(' ') + '\n';
	}
	
	return strBoard;
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
	
	var deltax = this.white[0] - this.black[0];
	var deltay = this.white[1] - this.black[1];

	if (deltay === -deltax) {
		return true;
	}

	if (deltay === deltax) {
		return true;
	}
	
	return false;
};

module.exports = Queens;
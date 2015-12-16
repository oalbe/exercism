function Robot() {}

var directions = {
	'north': 0,
	'east': 1,
	'south': 2,
	'west': 3
};

function isValidDirection(direction) {
	if (directions[direction] > -1 && directions[direction] < 5) {
		return true;
	}
	
	return false;
}

Robot.prototype.orient = function(givenDirection) {
	if (!isValidDirection(givenDirection)) {
		throw 'Invalid Robot Bearing';
	}
	
	this.bearing = givenDirection;
};

Robot.prototype.turnRight = function() {
	if ('west' === this.bearing) {
		this.bearing = 'north';
	} else {
		// REVIEW: The `keys()` method is not guaranteed to keep the order of the keys.
		var dirs = Object.keys(directions);
		this.bearing = dirs[directions[this.bearing] + 1];
	}
};

Robot.prototype.turnLeft = function() {
	if ('north' === this.bearing) {
		this.bearing = 'west';
	} else {
		// REVIEW: The `keys()` method is not guaranteed to keep the order of the keys.
		var dirs = Object.keys(directions);
		this.bearing = dirs[directions[this.bearing] - 1];
	}
};

Robot.prototype.at = function(x, y) {
	this.coordinates = [x, y];
};

Robot.prototype.advance = function() {
	if ('north' === this.bearing) {
		this.coordinates[1] += 1;
	} else if ('east' === this.bearing) {
		this.coordinates[0] += 1;
	} else if ('south' === this.bearing) {
		this.coordinates[1] -= 1;
	} else {
		this.coordinates[0] -= 1;
	}
};

Robot.prototype.instructions = function(instructions) {
	var instructionsList = [];
	
	var instructionsLength = instructions.length;
	for (var i = 0; i < instructionsLength; ++i) {
		switch (instructions[i]) {
			case 'L':
				instructionsList.push('turnLeft');
				break;
			case 'R':
				instructionsList.push('turnRight');
				break;
			case 'A':
				instructionsList.push('advance');
				break;
		}
	}
	
	return instructionsList;
};

Robot.prototype.place = function(initObject) {
	this.coordinates = [initObject.x, initObject.y];
	this.bearing = initObject.direction;
};

Robot.prototype.evaluate = function(movements) {
	var translatedMovements = this.instructions(movements);
	
	var limit = translatedMovements.length;
	for (var i = 0; i < limit; ++i) {
		if ('function' === typeof this[translatedMovements[i]]) {
			this[translatedMovements[i]]();
		}
	}
};

module.exports = Robot;
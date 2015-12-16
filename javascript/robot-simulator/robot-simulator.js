var directions = {
	'north': 0,
	'east': 1,
	'south': 2,
	'west': 3
};

function isValidDirection(direction) {
	if (direction in directions) {
		return true;
	}
	
	return false;
}

// Returns the keys of the object provided, keeping the order of the keys imposed by the object.
// Note: the values of the keys must be unique integers.
function orderedKeys(object) {
	var keys = [];
	
	for (var key in object) {
		keys[object[key]] = key;
	}
	
	return keys;
}

function Robot() {}

Robot.prototype.orient = function(givenDirection) {
	if (!isValidDirection(givenDirection)) {
		throw 'Invalid Robot Bearing';
	}
	
	this.bearing = givenDirection;
};

// The code duplication in `turnRight()` and `turnLeft()` methods does not 
// seem to be worth the effort of eliminating it.
Robot.prototype.turnRight = function() {
	if ('west' === this.bearing) {
		this.bearing = 'north';
	} else {
		var dirs = orderedKeys(directions);
		this.bearing = dirs[directions[this.bearing] + 1];
	}
};

Robot.prototype.turnLeft = function() {
	if ('north' === this.bearing) {
		this.bearing = 'west';
	} else {
		var dirs = orderedKeys(directions);
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

// TODO: This method can be optimized.
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
		// Check that the array element is actually an existing method before calling it.
		if ('function' === typeof this[translatedMovements[i]]) {
			this[translatedMovements[i]]();
		}
	}
};

module.exports = Robot;
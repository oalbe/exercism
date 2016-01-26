function Garden(plants, students) {
	this.students = ('undefined' !== typeof students) ? students.sort() : [
		'alice', 'bob', 'charlie', 'david', 
		'eve', 'fred', 'ginny', 'harriet', 
		'ileana', 'joseph', 'kincaid', 'larry'
	];
	
	this.plants = plants;
	this.studentsRoster = this._generate_students();
	
	for (var child in this.studentsRoster) {
		this[child] = this._parse_plants(this.studentsRoster[child]);
	}
}

Garden.prototype._generate_students = function() {
	var limit = this.students.length;
	
	var roster = {};
	for (var i = 0; i < limit; ++i) {
		roster[this.students[i].toLowerCase()] = i * 2;
	}
	
	return roster;
};

Garden.prototype.plantsList = {
	'C': 'clover',
	'G': 'grass',
	'R': 'radishes',
	'V': 'violets'
};

// TODO: This method could use some refactoring and performances improvements.
Garden.prototype._parse_plants = function(child) {
	var plantsArray = this.plants.split('\n');
	
	var childsPlants = [];
	
	var limit = child + 2;
	for (var j = 0; j < 2; ++j) {
		for (var i = child; i < limit; ++i) {
			childsPlants.push(this.plantsList[plantsArray[j][i]]);
		}
	}
	
	return childsPlants;
};

module.exports = Garden;
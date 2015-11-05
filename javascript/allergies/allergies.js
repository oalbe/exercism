var Allergies = function(score) {
	this.allergens = {
		'cats': 128,
		'pollen': 64,
		'chocolate': 32,
		'tomatoes': 16,
		'strawberries': 8,
		'shellfish': 4,
		'peanuts': 2,
	    'eggs': 1
	};
	
	this.allergyScore = score % 256;
};

Allergies.prototype.list = function() {
	var allergensList = [];
	
	var mScore = this.allergyScore;
	for (var aKey in this.allergens) {
		if (this.allergens[aKey] <= mScore) {
			allergensList.push(aKey);
			mScore -= this.allergens[aKey];
		}
	}
	
	// TODO: this must be optimized
	return allergensList.reverse();
};

Allergies.prototype.allergicTo = function(allergen) {
	var allergicToList = this.list();
	
	return (-1 !== allergicToList.indexOf(allergen));
};


module.exports = Allergies;
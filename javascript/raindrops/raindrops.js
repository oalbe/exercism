var Raindrops = function() {};

Raindrops.prototype.convert = function(number) {
	var output = '';
	
	if (0 === (number % 3)) {
		output += 'Pling';
	}
	
	if (0 === (number % 5)) {
		output += 'Plang';
	}
	
	if (0 === (number % 7)) {
		output += 'Plong';
	}
	
	if ('' === output) {
		return number.toString();
	}
	
	return output;
};

module.exports = Raindrops;
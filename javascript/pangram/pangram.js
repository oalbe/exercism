function Pangram(text) {
	this.string = text;
}

Pangram.prototype.isPangram = function() {
	if ('' === this.string) {
		return false;
	}
	
	var cleanString = this.string.toLowerCase().replace(/[-!#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]*/g, '');
	
	for (var i = 97; i < 123; ++i) {
		if (-1 === cleanString.indexOf(String.fromCharCode(i))) {
			return false;
		}
	}
	
	return true;
};

module.exports = Pangram;
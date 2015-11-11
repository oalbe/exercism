var Crypto = function(plainString) {
	this.rawText = plainString;
	this.normalizedText = this.normalizePlaintext();
};

// TODO: Once again, `replace()` probably hides a loop.
// Figure out if there's a better way to write this method.
Crypto.prototype.normalizePlaintext = function() {
	return this.rawText.toLowerCase().replace(/[-!#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]*/g, '');
};

Crypto.prototype.size = function() {
	return Math.ceil(Math.sqrt(this.normalizedText.length));
};

Crypto.prototype._text_helper = function(textToSegment) {
	var segmentedText = [];
	
	var segmentSize = this.size();
	var loops = textToSegment.length / segmentSize;
	for (var i = 0; i < loops; ++i) {
		segmentedText.push(textToSegment.substr(i * segmentSize, segmentSize));
	}
	
	return segmentedText;
};

Crypto.prototype.plaintextSegments = function() {
	return this._text_helper(this.normalizedText);
};

Crypto.prototype.normalizeCiphertext = function() {
	var encryptedSegments = this._text_helper(this.ciphertext());
	
	// TODO: Is there a better way to do this? `join()` is very likely to hide a loop.
	return encryptedSegments.join(' ');
};

// FIXME: This method looks ugly. Needs refactoring.
Crypto.prototype.ciphertext = function() {
	var encryptedText = '';
	var plainSegments = this.plaintextSegments();
	
	var plainSegmentsLength = plainSegments.length;
	var segmentLength = plainSegments[0].length;
	for (var j = 0; j < segmentLength; ++j) {
		for (var i = 0; i < plainSegmentsLength; ++i) {
			if ('undefined' !== typeof plainSegments[i][j]) {
				encryptedText += plainSegments[i][j];
			}
		}
	}
	
	return encryptedText;
};

module.exports = Crypto;
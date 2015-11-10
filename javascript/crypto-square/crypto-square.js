var Crypto = function(plainString) {
	this.rawText = plainString;
	this.normalizedText = this.normalizePlaintext();
};

Crypto.prototype.normalizePlaintext = function() {
	return this.rawText.toLowerCase().replace(/[-!#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]*/g, '');
};

Crypto.prototype.size = function() {
	return Math.ceil(Math.sqrt(this.normalizedText.length));
};

Crypto.prototype.plaintextSegments = function() {
	var segments = [];
	
	var segmentSize = this.size();
	var loops = this.normalizedText.length / segmentSize;
	for (var i = 0; i < loops; ++i) {
		segments.push(this.normalizedText.substr(i * segmentSize, segmentSize));
	}
	
	return segments;
};

Crypto.prototype.ciphertext = function() {
	var encryptedText = '';
	var plainSegments = this.plaintextSegments();
	
	var plainSegmentsLength = plainSegments.length;
	for (var j = 0; j < plainSegments[0].length; ++j) {
		for (var i = 0; i < plainSegmentsLength; ++i) {
			if ('undefined' !== typeof plainSegments[i][j])
			encryptedText += plainSegments[i][j];
		}
	}
	
	return encryptedText;
};

Crypto.prototype.normalizeCiphertext = function() {
	var normalizedEncrypted = '';
	
	var segmentSize = this.size();
	var loops = this.normalizedText.length / segmentSize;
	for (var i = 0; i < loops; ++i) {
		normalizedEncrypted += ' ' + this.ciphertext().substr(i * segmentSize, segmentSize);
	}
	
	return normalizedEncrypted.trim();
};

module.exports = Crypto;
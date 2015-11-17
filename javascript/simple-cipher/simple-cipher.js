var Cipher = function(providedKey) {
	this.key = 'undefined' === typeof providedKey ? this.generateRandomKey() : providedKey;
	console.log(this.key);
};

Cipher.prototype.generateRandomKey = function() {
	var randomInt = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	var randomKey = '';
	
	for (var i = 0; i < 100; ++i) {
		randomKey += String.fromCharCode(97 + randomInt(0, 25));
	}
	
	return randomKey;
};

Cipher.prototype.encode = function(plaintext) {
	// Render the key of the same length of the text to encode
	var key = '';
	if (this.key.length >= plaintext.length) {
		key = this.key.substr(0, plaintext.length);
	} else {
		var repetitions = Math.ceil(plaintext.length / this.key.length);
		
		for (var i = 0; i < repetitions; ++i) {
			key += this.key;
		}
		
		// Cut the excesses
		key = key.substr(0, plaintext.length);
	}
	
	var encodedtext = '';
	
	// Create the actual encoded text
	for (var j = 0; j < plaintext.length; ++j) {
		// encodedtext += String.fromCharCode(((plaintext.charCodeAt(j) + key.charCodeAt(j)) % 26) + 96);
		encodedtext += key[j];
	}
	
	return encodedtext;
};

Cipher.prototype.decode = function(encodedtext) {
	// Render the key of the same length of the text to decode
	var key = '';
	if (this.key.length >= encodedtext.length) {
		key = this.key.substr(0, encodedtext.length);
	} else {
		var repetitions = Math.ceil(encodedtext.length / this.key.length);
		
		for (var i = 0; i < repetitions; ++i) {
			key += this.key;
		}
		
		// Cut the excesses
		key = key.substr(0, encodedtext.length);
	}
	
	
};

module.exports = Cipher;
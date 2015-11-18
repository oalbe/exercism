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

// Render the key of the same length of the text to encode
Cipher.prototype.renderKey = function(textLength) {
	var renderedKey = '';
	if (this.key.length >= textLength) {
		renderedKey = this.key.substr(0, textLength);
	} else {
		var repetitions = Math.ceil(textLength / this.key.length);
		
		for (var i = 0; i < repetitions; ++i) {
			renderedKey += this.key;
		}
		
		// Cut the excesses
		renderedKey = renderedKey.substr(0, textLength);
	}
	
	return renderedKey;
};

Cipher.prototype.translation_helper = function(text) {
	var renderedKey = this.renderKey(text.length);
	
	console.log('renderedKey = ' + renderedKey);
	
	var translatedText = '';
	
	// Create the actual encoded text
	for (var j = 0; j < text.length; ++j) {
		translatedText += String.fromCharCode(
			Math.abs(text.charCodeAt(j) - renderedKey.charCodeAt(j)) + 97
		);
		
		console.log('Math.abs(' + text.charCodeAt(j) + ' - ' + renderedKey.charCodeAt(j) + ') = ' + Math.abs(text.charCodeAt(j) - renderedKey.charCodeAt(j)));
	}
	
	return translatedText;
};

Cipher.prototype.encode = function(plaintext) {
	console.log('##################################### encode');
	console.log('  plaintext = ' + plaintext);
	return this.translation_helper(plaintext);
};

Cipher.prototype.decode = function(encodedtext) {
	console.log('##################################### decode');
	console.log('encodedtext = ' + encodedtext);
	return this.translation_helper(encodedtext);
};

module.exports = Cipher;
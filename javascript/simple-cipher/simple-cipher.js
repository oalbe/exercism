var Cipher = function(providedKey) {
	providedKey = 'undefined' === typeof providedKey ? this.generateRandomKey() : providedKey;
	
	if ((providedKey.toUpperCase() === providedKey) || 
		/[0-9]/g.test(providedKey) || 
		(0 === providedKey.length)) {
		throw new Error('Bad key');
	}
	
	this.key = providedKey;
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates a random key one character at time.
// TODO: figure out if there's a way to generate all the characters at once.
Cipher.prototype.generateRandomKey = function() {
	var randomKey = '';
	
	for (var i = 0; i < 100; ++i) {
		randomKey += String.fromCharCode(97 + randomInt(0, 25));
	}
	
	return randomKey;
};

// Render the key of the same length of the text to encode
Cipher.prototype.renderKey = function(textLength) {
	var renderedKey = '';
	var keyLength = this.key.length;
	
	if (keyLength >= textLength) {
		renderedKey = this.key.substr(0, textLength);
	} else {
		var repetitions = Math.ceil(textLength / keyLength);
		
		for (var i = 0; i < repetitions; ++i) {
			renderedKey += this.key;
		}
		
		// Cut the excesses
		renderedKey = renderedKey.substr(0, textLength);
	}
	
	return renderedKey;
};

String.prototype.absPosition = function() {
	return this.charCodeAt(0) - 97;
};

Cipher.prototype.translation_helper = function(text, mode) {
	// TODO: it isn't strictly required to call this function more than once. Move it.
	var renderedKey = this.renderKey(text.length);
	
	var operation = function(leftOperand, rightOperand) {
		if (leftOperand < rightOperand) {
			return (leftOperand + 26) - rightOperand;
		}
		
		return (leftOperand + 25) - rightOperand;
	};
	
	var modulo = 25;
	
	if (mode) {
		operation = function(leftOperand, rightOperand) {
			return leftOperand + rightOperand;
		};
		
		modulo = 26;
	}
	
	var translatedText = '';
	var textLength = text.length;
	
	// Create the actual encoded text
	for (var j = 0; j < textLength; ++j) {
		translatedText += String.fromCharCode(
			Math.abs(operation(text[j].absPosition(), renderedKey[j].absPosition())) % modulo + 97
		);
	}
	
	return translatedText;
};

Cipher.prototype.encode = function(plaintext) {
	return this.translation_helper(plaintext, true);
};

Cipher.prototype.decode = function(encodedtext) {
	return this.translation_helper(encodedtext, false);
};

module.exports = Cipher;
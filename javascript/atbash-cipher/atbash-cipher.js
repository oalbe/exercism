var Cipher = function() {};

// space = 32
// 'a' = 97
// 'z' = 122
Cipher.prototype.cleanInput = function(text) {
	return text.toLowerCase().replace(/[,\.]/g, '').replace(/\s+/g, '');
};

Cipher.prototype.encode = function(text) {
	var cText = this.cleanInput(text);
	
	var encodedText = '';
	var cTextLength = cText.length;
	for (var i = 0; i < cTextLength; ++i) {
		if (cText.charCodeAt(i) >= 97 && cText.charCodeAt(i) <= 122) {
			var posEncodedChar = cText.charCodeAt(i) - 97;
			encodedText += String.fromCharCode(122 - posEncodedChar);
			
		} else if (cText.charCodeAt(i) >= 48 && cText.charCodeAt(i) <= 58) {
			encodedText += cText[i];
		}
		
		// Adds a space separator every 5 encoded characters
		if (((i + 1) % 5) === 0) {
			encodedText += ' ';
		}
	}
	
	
	return encodedText.trim();	
};


module.exports = new Cipher();
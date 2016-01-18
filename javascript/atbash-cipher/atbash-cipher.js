var Cipher = function() {};

// 'a' = ASCII 97 | 'z' = ASCII 122
Cipher.prototype.cleanInput = function(text) {
	// TODO: I have a feeling `replace()` hides a loop. Remove it.
	return text.toLowerCase().replace(/[,\.\s+]/g, '');
};

Cipher.prototype.encode = function(text) {
	var cText = this.cleanInput(text);
	var encodedText = '';
	
	var cTextLength = cText.length;
	for (var i = 0; i < cTextLength; ++i) {
		// TODO: Is there a cast hidden here? Figure it out.
		if ('a' <= cText[i] && 'z' >= cText[i]) {
			// cText.charCodeAt(i) - 97: position of the equivalent char, counting from z backwards
			encodedText += String.fromCharCode(122 - (cText.charCodeAt(i) - 97));
		} else if ('0' <= cText[i] && '9' >= cText[i]) {
			encodedText += cText[i];
		}
		
		// Adds a space separator every 5 encoded characters
		if (4 === (i % 5)) {
			encodedText += ' ';
		}
	}
	
	// TODO: Try making this trimming unnecessary.
	return encodedText.trim();
};

module.exports = new Cipher();
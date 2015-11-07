var Cipher = function() {};

// space = 32
// 'a' = 97
// 'z' = 122
Cipher.prototype.cleanInput = function(text) {
	// TODO: I have a feeling `replace()` hides a loop. Remove it.
	return text.toLowerCase().replace(/[,\.\s+]/g, '');
};

Cipher.prototype.encode = function(text) {
	var cText = this.cleanInput(text);
	
	var encodedText = '';
	var cTextLength = cText.length;
	for (var i = 0; i < cTextLength; ++i) {
		// if (cText.charCodeAt(i) >= 97 && cText.charCodeAt(i) <= 122) {
		if (cText[i] >= 'a' && cText[i] <= 'z') { // Is there a cast hidden here?
			var posEncodedChar = cText.charCodeAt(i) - 97;
			encodedText += String.fromCharCode(122 - posEncodedChar);
		} else if (cText[i] >= '0' && cText[i] <= '9') {
			encodedText += cText[i];
		}
		
		// Adds a space separator every 5 encoded characters
		if ((i % 5) === 4) { // 4 % 5 = 4; 9 % 5 = 4; 14 % 5 = 4;
			encodedText += ' ';
		}
	}
	
	// TODO: make this trimming unnecessary.
	return encodedText.trim();	
};


module.exports = new Cipher();
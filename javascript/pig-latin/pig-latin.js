function PigLatin() {}

PigLatin.compose_helper = function(word, index) {
	return word.substring(index + 1) + word.substring(0, index + 1) + 'ay';
};

PigLatin.translate_helper = function(word) {
	var hPos = word.indexOf('h');
	var qPos = word.indexOf('q');
	if (-1 !== hPos) {
		if (('r' === word[hPos + 1]) && ('t' === word[hPos - 1])) {
			return this.compose_helper(word, hPos + 1);
		}
		
		return this.compose_helper(word, hPos);
	} else if (('u' === word[qPos + 1]) && (1 >= qPos) && (-1 !== qPos)) {
		return this.compose_helper(word, qPos + 1);
	}
		
	if (isVowel(word[0])) {
		return word + 'ay';
	}
	
	return this.compose_helper(word, 0);
};

PigLatin.translate = function(input) {
	// it's a phrase
	if (-1 !== input.indexOf(' ')) {
		var messedPhrase = '';
		var words = input.split(' ');
		
		var wordsLength = words.length;
		for (var i = 0; i < wordsLength; ++i) {
			messedPhrase += this.translate_helper(words[i]) + ' ';
		}
		
		return messedPhrase.trim();
	}
	
	// it's a single word
	return this.translate_helper(input);
};

function isVowel(character) {
	return (-1 !== ['a', 'e', 'i', 'o', 'u'].indexOf(character));
}

module.exports = PigLatin;
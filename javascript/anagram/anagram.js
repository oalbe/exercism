'use strict';

var Anagram = function(word) {
    this._word = word;
};

Anagram.prototype.match = function(matchWord) {
    var wordLength = this._word.length;

    if (wordLength !== matchWord.length) {
        return false;
    }

    var lowercasedWord = this._word.toLowerCase();

    // FIXME: This doesn't handle in a proper way words with two (or more) 
    // times the same letter in them.
    // UPDATE: probably fixed.
    var checkedIndexes = [];
    for (var i = 0; i < wordLength; ++i) {
        var currentIndex = matchWord.indexOf(lowercasedWord[i]);
        if (-1 !== checkedIndexes.indexOf(currentIndex)) {
            return false;
        }

        if (-1 === currentIndex) {
            return false;
        }

        checkedIndexes.push(currentIndex);
    }

    return true;
};

Anagram.prototype.matches = function(listMatches) {
    var matchedWords = [];

    var listMatchesLength = listMatches.length;
    for (var i = 0; i < listMatchesLength; ++i) {
        if (this.match(listMatches[i].toLowerCase())) {
            matchedWords.push(listMatches[i]);
        }
    }

    return matchedWords;
};

module.exports = Anagram;
function anagram(word) {
    return {
        matches : function(listMatches) {
            if (listMatches instanceof Array) {
                return matches(word, listMatches);
            }

            // convert the Object type into an Array type
            var convertedObject = [];
            var argumentsLength = arguments.length;
            for (var i = 0; i < argumentsLength; ++i) {
                convertedObject.push(arguments[i]);
            }

            return matches(word, convertedObject);
        }
    };
}

function match(word, matchWord) {
    var wordLength = word.length;
    var matchWordLength = matchWord.length;

    if (wordLength !== matchWordLength) {
        return false;
    }

    // l = lowercased
    var lWord = word.toLowerCase();
    var lMatchWord = matchWord.toLowerCase();

    if (lMatchWord === lWord) {
        return false;
    }

    // will contain the indexes from `word` of the letters that have already been checked.
    var checkedIndexes = [];
    for (var i = 0; i < wordLength; ++i) {
        var currentIndex = lMatchWord.indexOf(lWord[i]);
        var newIndex = checkedIndexes.indexOf(currentIndex);

        // if the currently checked letter has already been checked before
        if (-1 !== newIndex) {
            // create a substring of the current matchWord from the subsequent point where
            // the collision has been found, to the end of the word
            var newMatchWord = lMatchWord.substr(newIndex + 1, matchWordLength);

            // if in this newly created string there isn't any other match with the
            // letter at hand, it means there was a bad collision
            if (-1 === newMatchWord.indexOf(lWord[i])) {
                return false;
            }

            // otherwise it was a good collision, in which case we prepare it
            // to be added to the array that keeps track of the letters already checked
            currentIndex = lMatchWord.indexOf(lWord[i], currentIndex + 1);
        }

        if (-1 === currentIndex) {
            return false;
        }

        checkedIndexes.push(currentIndex);
    }

    return true;
}

function matches(word, listMatches) {
    var matchedWords = [];

    var listMatchesLength = listMatches.length;
    for (var i = 0; i < listMatchesLength; ++i) {
        if (match(word, listMatches[i].toLowerCase())) {
            matchedWords.push(listMatches[i]);
        }
    }

    return matchedWords;
}

module.exports = anagram;
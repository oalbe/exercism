function score(word) {
    if (!((null !== word) && (0 !== word.length))) {
        return 0;
    }

    var lWord = word.toLowerCase();

    var pointsTable = {
        'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
        'd': 2, 'g': 2,
        'b': 3, 'c': 3, 'm': 3, 'p': 3,
        'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
        'k': 5,
        'j': 8, 'x': 8,
        'q': 10, 'z': 10
    };

    var occurrences = {};

    var wordLength = lWord.length;
    for (var i = 0; i < wordLength; ++i) {
        if (lWord[i] in occurrences) {
            ++occurrences[lWord[i]];
        } else {
            occurrences[lWord[i]] = 1;
        }
    }

    var totalPoints = 0;
    for (var letter in occurrences) {
        totalPoints += pointsTable[letter] * occurrences[letter];
    }

    return totalPoints;
}

module.exports = score;
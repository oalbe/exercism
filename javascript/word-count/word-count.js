var wordsCounter = function(phrase) {
    // clean the input from leading or trailing whitespaces, tabs, terminators etc.
    phrase = phrase.trim();

    // /\s+/ regex represents all whitespaces (spaces, tabs, newlines, return) characters
    // wd: with duplicates
    var wdWords = phrase.split(/\s+/);

    var wordsCounts = {};
    var wdWordsLength = wdWords.length;
    for (var i = 0; i < wdWordsLength; ++i) {
        if (!(wdWords[i] in wordsCounts) || isNaN(wordsCounts[wdWords[i]])) {
            wordsCounts[wdWords[i]] = 1;
        } else {
            ++wordsCounts[wdWords[i]];
        }
    }

    return wordsCounts;
};

module.exports = wordsCounter;
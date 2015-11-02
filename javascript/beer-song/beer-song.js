var Beer = function() {};

var setPlaceholders = function(bottles, plural, oneit, rBottles, iPlurals) {
    return (placeholders = {
        '%BOTTLES%' : bottles,
        '%PLURAL%' : plural,
        '%ONEORIT%' : oneit,
        '%REMAININGBOTTLES%' : rBottles,
        '%INDPLURAL%' : iPlurals
    });
};

Beer.prototype.verse = function(verseNumber) {
    var rawVerse = '%BOTTLES% bottle%PLURAL%of beer on the wall, ' +
                    '%BOTTLES% bottle%PLURAL%of beer.\n';
    var rawVerseToAlt ='Take %ONEORIT%down and pass it around, ';
    var rawVerseFinal = '%REMAININGBOTTLES% bottle%INDPLURAL%of beer on the wall.\n';
    var rawVerseAlt = 'Go to the store and buy some more, ';
    
    var placeholders = {};

    if ((verseNumber <= 99) && (verseNumber > 2)) {
        rawVerse += rawVerseToAlt + rawVerseFinal;
        placeholders = setPlaceholders(verseNumber, 's ', 'one ', (verseNumber - 1), 's ');
    } else if (verseNumber === 2) {
        rawVerse += rawVerseToAlt + rawVerseFinal;
        placeholders = setPlaceholders(verseNumber, 's ', 'one ', (verseNumber - 1), ' ');
    } else if (verseNumber === 1) {
        rawVerse += rawVerseToAlt + rawVerseFinal;
        placeholders = setPlaceholders(verseNumber, ' ', 'it ', 'no more', 's ');
    } else {
        rawVerse += rawVerseAlt + rawVerseFinal;
        placeholders = setPlaceholders('no more', 's ', ' ', 99, 's ');
    }

    var replacedVerse = rawVerse.replace(/%\w+%/g, function(all) {
        return placeholders[all] || all;
    });

    // capitalize the first letter lowered in the `else` part of the `if`.
    if (replacedVerse[0] !== replacedVerse[0].toUpperCase()) {
        replacedVerse = replacedVerse.charAt(0).toUpperCase() + replacedVerse.slice(1);
    }

    return replacedVerse;
};

Beer.prototype.sing = function(end, begin) {
    begin = typeof begin === 'undefined' ? 0 : begin;

    var compositeVerse = '';

    for (var i = end; i >= begin; --i) {
        compositeVerse += this.verse(i);

        if (i !== begin) {
            compositeVerse += "\n";
        }
    }

    return compositeVerse;
};

module.exports = new Beer;


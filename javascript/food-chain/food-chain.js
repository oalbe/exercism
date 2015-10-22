exports.verse = verse;
exports.verses = verses;

function verse_helper(thing, things) {
    // 0 = fly | 7 = horse
    if ((0 === thing) || (7 === thing)) return;

    // 2 = bird
    if (2 === thing) {
        return 'She swallowed the ' + things[thing] + ' to catch the ' + 
            things[thing - 1] + ' that wriggled and jiggled and tickled inside her.\n';
    }

    return 'She swallowed the ' + things[thing] + ' to catch the ' + things[thing - 1] + '.\n';
}

function verse(verseNumber) {
    var swallowedThings = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

    var beginning = 'I know an old lady who swallowed a ';

    var swallowedEvents = { // ew...
        'fly' : 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
        'spider' : 'It wriggled and jiggled and tickled inside her.\n',
        'bird' : 'How absurd to swallow a bird!\n',
        'cat' : 'Imagine that, to swallow a cat!\n',
        'dog' : 'What a hog, to swallow a dog!\n',
        'goat' : 'Just opened her throat and swallowed a goat!\n',
        'cow' : 'I don\'t know how she swallowed a cow!\n',
        'horse' : 'She\'s dead, of course!\n'
    };

    var commonComposition = beginning + 
        swallowedThings[verseNumber - 1] + '.\n' +
        swallowedEvents[swallowedThings[verseNumber - 1]];

    if ((1 === verseNumber) || (8 === verseNumber)) {
        return commonComposition;
    }

    var specificComposition = '';
    for (var i = 2; i <= verseNumber; ++i) {
        var stIndex = verseNumber - i;
        var seIndex = swallowedThings[stIndex];

        specificComposition += verse_helper(stIndex + 1, swallowedThings);

        if (i === verseNumber) {
            specificComposition += swallowedEvents[seIndex];
        }
    }

    return commonComposition + specificComposition;
}

function verses(begin, end) {
    var bunch = '';
    for (var i = begin; i <= end; ++i) {
        bunch += verse(i) + '\n';
    }

    return bunch;
}
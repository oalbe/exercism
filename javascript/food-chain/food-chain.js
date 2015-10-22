exports.verse = verse;
exports.verses = verses;
// exports.song = verse.bind(null, 1, 8);

function song() {
    return {
        verse : function(verseNumber) {
            return verse(verseNumber);
        }
    };
}

function verse(verseNumber) {
    var swallowedThings = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

    var swallowedEvents = { // ew...
        'fly' : [
            'I don\'t know why she swallowed the fly. ',
            'Perhaps she\'ll die.\n'
        ],
        'spider' : [
            'It wriggled and jiggled and tickled inside her.\n',
            'She swallowed the spider to catch the fly.\n'
        ],
        'bird' : [
            'How absurd to swallow a bird!\n',
            'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n'
        ],
        'cat' : [
            'Imagine that, to swallow a cat!\n',
            'She swallowed the cat to catch the bird.\n'
        ],
        'dog' : [
            'What a hog, to swallow a dog!\n',
            'She swallowed the dog to catch the cat.\n'
        ],
        'goat' : [
            'Just opened her throat and swallowed a goat!\n',
            'She swallowed the goat to catch the dog.\n'
        ],
        'cow' : [
            'I don\'t know how she swallowed a cow!\n',
            'She swallowed the cow to catch the goat.\n'
        ],
        'horse' : [
            'She\'s dead, ',
            'of course!\n'
        ]
    };

    var beginning = 'I know an old lady who swallowed a ';

    var commonComposition = 
        beginning + 
        swallowedThings[verseNumber - 1] + '.\n' +
        swallowedEvents[swallowedThings[verseNumber - 1]][0] +
        swallowedEvents[swallowedThings[verseNumber - 1]][1];

    if ((1 === verseNumber) || (8 === verseNumber)) {
        return commonComposition;
    }

    var specificComposition = '';
    for (var i = 2; i <= verseNumber; ++i) {
        var seIndex = swallowedThings[verseNumber - i];

        if (i === verseNumber) {
            specificComposition += swallowedEvents[seIndex][0];
        }

        specificComposition += swallowedEvents[seIndex][1];
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
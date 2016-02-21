def set_placeholders(bottles, plural, oneit, r_bottles, i_plurals):
    placeholders = {
        "%BOTTLES%" : bottles,
        "%PLURAL%" : plural,
        "%ONEORIT%" : oneit,
        "%REMAININGBOTTLES%" : r_bottles,
        "%INDPLURAL%" : i_plurals
    }
    
    return placeholders

def verse(verse_number):
    raw_verse = "%BOTTLES% bottle%PLURAL%of beer on the wall, %BOTTLES% bottle%PLURAL%of beer.\n"
    raw_verse_to_alt = "Take %ONEORIT%down and pass it around, "
    raw_verse_final = "%REMAININGBOTTLES% bottle%INDPLURAL%of beer on the wall.\n"
    raw_verse_alt = "Go to the store and buy some more, "
    
    placeholders = {}

    if ((verseNumber <= 99) and (verseNumber > 2)):
        raw_verse += raw_verse_to_alt + raw_verse_final
        placeholders = setPlaceholders(verseNumber, "s ", "one ", (verseNumber - 1), "s ")
    elif (verseNumber == 2):
        raw_verse += raw_verse_to_alt + raw_verse_final
        placeholders = setPlaceholders(verseNumber, "s ", "one ", (verseNumber - 1), " ")
    elif (verseNumber == 1):
        raw_verse += raw_verse_to_alt + raw_verse_final
        placeholders = setPlaceholders(verseNumber, " ", "it ", "no more", "s ")
    else:
        raw_verse += raw_verse_alt + raw_verse_final
        placeholders = setPlaceholders("no more", "s ", " ", 99, "s ")

    regex = re.compile(r'%\w+%')
    
    while re.search(r'%\w+%', raw_verse):
        replaced_verse = regex.sub(, clean_input)
    
    # replaced_verse = raw_verse.replace(, function(all) {
    #     return placeholders[all] || all
    # })

     # capitalize the first letter lowered in the `else` part of the `if`.
    if (replaced_verse[0] != replaced_verse[0].toUpperCase()):
        replaced_verse = replaced_verse.charAt(0).toUpperCase() + replaced_verse.slice(1)

    return replaced_verse
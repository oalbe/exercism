import re
from string import ascii_uppercase


def find_uppercases(word):
    test_word = word[0].lower() + word[1:]
    for character in test_word:
        if character in ascii_uppercase:
            return character

    return -1

def abbreviate(name):
    split_name = re.split(r'[ -]', name)

    output = []
    for word in split_name:
        if word != word.upper():
            character = find_uppercases(word)
            if -1 != character:
                output.append(word[0].upper() + word[word.index(character)])
            else:
                output.append(word[0].upper())
        else:
            output.append(word[0].upper())

    return ''.join(output)

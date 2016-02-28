import re
from string import ascii_uppercase


def find_uppercases(word):
    test_word = word[0].upper() + word[1:]
    for character in test_word:
        if character.isupper():
            yield character

def abbreviate(name):
    split_name = re.split(r'[ -]', name)

    output = []
    for word in split_name:
        if word.isupper():
            word = word[0] + word[1:].lower()

        for up_char in find_uppercases(word):
            output.append(up_char)

    return ''.join(output)
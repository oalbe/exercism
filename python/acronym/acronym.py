import re


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
            output.append(word[0])
            continue

        output.extend(find_uppercases(word))

    return ''.join(output)
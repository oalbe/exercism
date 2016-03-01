import re


def find_uppercases(word):
    yield word[0].upper()
    for character in word[1:]:
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
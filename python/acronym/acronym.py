import re


def find_uppercases(word):
    test_word = word[0].lower() + word[1:]
    for character in test_word:
        if character == character.upper():
            return character

    return -1

def abbreviate(name):
    dash_regex = re.compile(r'-')
    nodash_name = dash_regex.sub(' ', name)

    punctuation_regex = re.compile(r'[\.,\:]')
    clean_name = punctuation_regex.sub('', nodash_name)

    split_name = clean_name.split(' ')

    output = ''
    for word in split_name:
        if word != word.upper():
            character = find_uppercases(word)
            if -1 != character:
                output += word[0].upper() + word[word.index(character)]
            else:
                output += word[0].upper()
        else:
            output += word[0].upper()

    return output
    
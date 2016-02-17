import re


def find_uppercases(word):
    test_word = word[0].lower() + word[1:]
    for character in test_word:
        if character in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            return character
    
    return -1

def abbreviate(name):
    dash_regex = re.compile(r'-')
    nodash_name = dash_regex.sub(' ', name)
    
    punctuation_regex = re.compile(r'\.,:')
    clean_name = punctuation_regex.sub('', nodash_name)
    
    split_name = clean_name.split(' ')
    
    print(find_uppercases(split_name[0]))
    
    output = ''
    for word in split_name:
        character = find_uppercases(word)
        if -1 != character:
            output += word[0].upper() + word[word.index(character)]
        else:
            output += word[0].upper()
    
    print(split_name)
    
    return output
    
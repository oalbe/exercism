import re


def abbreviate(name):
    dash_regex = re.compile(r'-')
    nodash_name = dash_regex.sub(' ', name)
    
    punctuation_regex = re.compile(r'\.,:')
    clean_name = punctuation_regex.sub('', nodash_name)
    
    split_name = clean_name.split(' ')
    
    output = ''
    for word in split_name:
        output += word[0].upper()
    
    
    print(split_name)
    
    return output
    
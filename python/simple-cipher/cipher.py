import re
import math
from random import randint


class Caesar():
    def translate_helper(self, text, mode):
        clean_input = text.lower()
        regex = re.compile(r'[0-9!,\.\'\s+]')
        text = regex.sub('', clean_input)
        
        translated_text = ''
        
        offset = 3 if mode else -3
        
        text_len = len(text)
        for i in range(text_len):
            character = ((ord(text[i]) - 97) + offset) % 26
            translated_text += chr(character + 97)
        
        return translated_text

    def encode(self, plain_text):
        return self.translate_helper(plain_text, True)
    
    def decode(self, encoded_text):
        return self.translate_helper(encoded_text, False)

class Cipher():
    def __init__(self, key=''):
        if (0 == len(key)):
            self.key = self.generate_key()
        else:
            if self.validate_key(key):
                self.key = key
            else:
                self.key = ''
                raise ValueError;
    
    def validate_key(self, key):
        key_len = len(key)
        for i in range(key_len):
            if (97 > ord(key[i])) or (122 < ord(key[i])):
                return False
        
        return True
    
    # TODO: This can probably be rendered in a more pythonic way
    def generate_key(self):
        random_key = ''
        
        for i in range(100):
            random_key += chr(randint(97, 122))
        
        return random_key

    def render_key(self, text_len):
        key_len = len(self.key)

        if (key_len == text_len):
            return self.key
        
        rendered_key = ''
        
        if (key_len > text_len):
            return self.key[0:text_len]
        else:
            repetitions = math.ceil(text_len / key_len)
            
            for i in range(repetitions):
                rendered_key += self.key
            
            rendered_key = rendered_key[0:text_len]
        
        return rendered_key
    
    def translate_helper(self, text, mode):
        sign = 1 if mode else -1
        
        translated_text = ''
        
        text_len = len(text)
        rendered_key = self.render_key(text_len)
        
        for i in range(text_len):
            text_chr = ord(text[i]) - 97
            key_chr = ord(rendered_key[i]) - 97
            translated_text += chr(((text_chr + (sign * key_chr)) % 26) + 97)
        
        return translated_text

    def encode(self, plain_text):
        return self.translate_helper(plain_text, True)

    def decode(self, encoded_text):
        return self.translate_helper(encoded_text, False)
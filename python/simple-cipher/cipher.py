import re
import math
from random import randint


class Caesar():
    def translate_helper(self, text, mode):
        clean_input = text.lower()
        regex = re.compile(r'[0-9!,\.\'\s+]')
        text = regex.sub('', clean_input)
        
        offset = 3 if mode else -3
        
        translated_text = ''
        for char in text:
            new_character = ((ord(char) - 97) + offset) % 26
            translated_text += chr(new_character + 97)
        
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
        for char in key:
            if (97 > ord(char)) or (122 < ord(char)):
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
        
        rendered_key = self.key
        if (key_len < text_len):
            repetitions = math.ceil(text_len / key_len)
            
            for i in range(1, repetitions):
                rendered_key += self.key
        
        return rendered_key[0:text_len]
    
    def translate_helper(self, text, mode):
        sign = 1 if mode else -1
        
        text_len = len(text)
        rendered_key = self.render_key(text_len)
        
        translated_text = ''
        for i in range(text_len):
            text_chr = ord(text[i]) - 97
            key_chr = ord(rendered_key[i]) - 97
            translated_text += chr(((text_chr + (sign * key_chr)) % 26) + 97)
        
        return translated_text

    def encode(self, plain_text):
        return self.translate_helper(plain_text, True)

    def decode(self, encoded_text):
        return self.translate_helper(encoded_text, False)
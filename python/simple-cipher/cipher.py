import re
import math


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
        self.key = key

    def render_key(self, text_len):
        key_len = len(self.key)
        
        if (0 == key_len):
            return ''

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

    def encode(self, plain_text):
        if (0 == len(self.key)):
            return plain_text
        
        encoded_text = ''
        
        plain_text_len = len(plain_text)
        rendered_key = self.render_key(plain_text_len)

        for i in range(plain_text_len):
            # print(ord(plain_text[i]), ' = ', ord(rendered_key[i]))
            text_chr = ord(plain_text[i]) - 97
            key_chr = ord(rendered_key[i]) - 97
            encoded_text += chr(((text_chr + key_chr) % 26) + 97)
        
        return encoded_text
    
    def decode(self, encoded_text):
        if (0 == len(self.key)):
            return encoded_text

        decoded_text = ''
        
        encoded_text_len = len(encoded_text)
        rendered_key = self.render_key(encoded_text_len)
    
        for i in range(encoded_text_len):
            text_chr = ord(encoded_text[i]) - 97
            key_chr = ord(rendered_key[i]) - 97
            decoded_text += chr(((text_chr - key_chr) % 26) + 97)
        
        return decoded_text
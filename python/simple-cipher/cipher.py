import re


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
	def encode(plain_text):
		return 'somethin'
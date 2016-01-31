import re


class Caesar():
	def translate_helper(self, text, mode):
		translated_text = ''
		
		offset = 3 if mode else -3
		
		text_len = len(text)
		for i in range(text_len):
			character = ((ord(text[i]) - 97) + offset) % 26
			translated_text += chr(character + 97)
		
		return translated_text

	def encode(self, plain_text):
		clean_input = plain_text.lower()
		regex = re.compile(r'[0-9!,\.\'\s+]')
		clean_input = regex.sub('', clean_input)

		return self.translate_helper(clean_input, True)
	
	def decode(self, encoded_text):
		return self.translate_helper(encoded_text, False)

class Cipher():
	def encode(plain_text):
		return 'somethin'
import re


class Caesar():
	def encode(self, plain_text):
		encoded_text = ''
		
		clean_input = plain_text.lower()
		regex = re.compile(r'[0-9!,\.\'\s+]')
		clean_input = regex.sub('', clean_input)
		
		# plain_text = 'abcdefghijklmnopqrstuvwxyz'
		clean_input_len = len(clean_input)
		for i in range(clean_input_len):
			character = ((ord(clean_input[i]) - 97) + 3) % 26
			encoded_text += chr(character + 97)
			# print(clean_input[i], ' = ', ((ord(clean_input[i]) - 97) + 3) %26)
		
		return encoded_text
	
	def decode(self, encoded_text):
		decoded_text = ''
		
		encoded_text_len = len(encoded_text)
		for i in range(encoded_text_len):
			character = ((ord(encoded_text[i]) - 97) - 3) % 26
			decoded_text += chr(character + 97)
		
		return decoded_text

class Cipher():
	def encode(plain_text):
		return 'somethin'
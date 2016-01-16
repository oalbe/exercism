import re

def cipher_helper(input_text):
	translated_text = ''
	
	input_len = len(input_text)
	for i in range(input_len):
		if ('a' <= input_text[i]) and ('z' >= input_text[i]):
			translated_text += chr(122 - (ord(input_text[i]) - 97))
		elif ('0' <= input_text[i]) and ('9' >= input_text[i]):
			translated_text += input_text[i]
	
	return translated_text

def encode(plain_text):
	clean_input = plain_text.lower()
	regex = re.compile(r'[,\.\s+]')
	clean_input = regex.sub('', clean_input)

	encoded_text = cipher_helper(clean_input)
	
	spaced_text = ''
	encoded_text_len = len(encoded_text)
	for i in range(encoded_text_len):
		spaced_text += encoded_text[i]
		if (4 == (i % 5)):
			spaced_text += " "
	
	return spaced_text.rstrip()
	
def decode(encoded_text):
	regex = re.compile(r'[\ ]')
	clean_input = regex.sub('', encoded_text)
	
	return cipher_helper(clean_input)
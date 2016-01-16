import re

def encode(plain_text):
	clean_input = plain_text.lower()
	regex = re.compile(r'[,\.\s+]')
	clean_input = regex.sub('', clean_input)

	encoded_text = ''
	
	input_len = len(clean_input)
	for i in range(input_len):
		if ('a' <= clean_input[i]) and ('z' >= clean_input[i]):
			encoded_text += chr(122 - (ord(clean_input[i]) - 97))
		elif ('0' <= clean_input[i]) and ('9' >= clean_input[i]):
			encoded_text += clean_input[i]

		if (4 == (i % 5)):
			encoded_text += " "
	
	return encoded_text.rstrip()
	
def decode(encoded_text):
	# Remove the spaces
	regex = re.compile(r'[\ ]')
	clean_input = regex.sub('', encoded_text)
	
	decoded_text = ''
	
	input_len = len(clean_input)
	for i in range(input_len):
		if ('a' <= clean_input[i]) and ('z' >= clean_input[i]):
			decoded_text += chr(122 - (ord(clean_input[i]) - 97))
		elif ('0' <= clean_input[i]) and ('9' >= clean_input[i]):
			decoded_text += clean_input[i]
	
	return decoded_text
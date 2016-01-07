def encode(input_string):
	encoded_data = ''
	
	input_length = len(input_string)
	
	current_char = input_string[0]
	count = 1
	for i in range(1, input_length):
		if (current_char == input_string[i]):
			count += 1
		else:
			if (1 == count):
				encoded_data += current_char
			else:
				encoded_data += str(count) + current_char
			
			current_char = input_string[i]
			count = 1
	
	# Concat the last processed character and return the encoding.
	if (1 == count):
		encoded_data += current_char
	else:
		encoded_data += str(count) + current_char

	return encoded_data

def is_digit(character):
	if ((47 < ord(character)) and (58 > ord(character))):
		return True
	
	return False

def decode(input_string):
	decoded_string = ''
	
	input_length = len(input_string)
	i = 0
	while (i < input_length):
		capturing_group = ''
		count = 1
		if (not is_digit(input_string[i])):
			character = input_string[i]
		else:
			while (is_digit(input_string[i])):
				capturing_group += input_string[i]
				i += 1
			
			capturing_group += input_string[i]
			
			count = int(capturing_group[:-1])
			character = capturing_group[-1]
		
		for j in range(0, count):
			decoded_string += character
		
		i += 1
	
	return decoded_string
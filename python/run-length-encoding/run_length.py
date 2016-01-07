def encode(input_string):
	encoded_data = ''
	
	input_string = input_string.decode('unicode-escape').encode('ascii')
	print(input_string)
	
	input_length = len(input_string)
	
	current_char = input_string[0]
	# print(current_char)
	count = 1
	for i in range(1, input_length):
		# print(current_char, ' ', input_string[i])
		
		if (current_char == input_string[i]):
			count += 1
			# print(count)
		else:
			if (1 == count):
				encoded_data += current_char
			else:
				encoded_data += str(count) + current_char
			
			current_char = input_string[i]
			count = 1
		
	if (1 == count):
		encoded_data += current_char
	else:
		encoded_data += str(count) + current_char
	# Concat the last processed character and return the encoding.
	print(encoded_data)
	return encoded_data

def decode(input_string):
	return True
import re
import string

def is_pangram(input_string):
	if ('' == input_string):
		return False

	clean_string = input_string.lower()

	for i in range(97, 123):
		if (chr(i) not in clean_string):
			return False
	
	return True
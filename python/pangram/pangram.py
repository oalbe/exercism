import re

def is_pangram(input_string):
	if ('' == input_string):
		return False
	
	clean_string = re.sub(r"[-!#$%^&*()_+|~=`{}\[\]:\";'<>?,.\/\s]*", "", input_string.lower())
	
	for i in range(97, 123):
		if (-1 == clean_string.find(chr(i))):
			return False
	
	return True
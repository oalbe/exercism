import re

def is_pangram(input_string):
	if ('' == input_string):
		return False
	
	clean_string = input_string.lower()
	clear_string = re.sub("[-!#$%^&*()_+|~=`{}\[\]:\";'<>?,.\/\s]*", "", clean_string)
	print("clean_string = " + clean_string)
	
	for i in range(97, 123):
		if (-1 == clean_string.index(chr(i))):
			print("CHR(i) = " + chr(i))
			return False
	
	return True
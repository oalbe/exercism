import re

def hey(what):
	what = what.strip()
	
	if not(what.strip()) or 0 == len(what):
		return "Fine. Be that way!"
	if re.search('[A-Z]', what) and what == what.upper():
		return "Whoa, chill out!"
	if "?" == what[len(what) - 1]:
		return "Sure."
	
	return "Whatever."

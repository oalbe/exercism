import re

def word_count(string):
	lString = string.lower()
	singleWords = lString.split()
	
	occurrences = {}
	for word in singleWords:
		if (word in occurrences):
			occurrences[word] += 1
		else:
			occurrences[word] = 1
	
	return occurrences
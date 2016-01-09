def index_noexcept(array, item):
	if item in array:
		return array.index(item)
	
	return -1

def match(word, match_word):
	word_len = len(word)
	match_word_len = len(match_word)
	
	if (word_len != match_word_len):
		return False
	
	low_word = word.lower()
	low_match_word = match_word.lower()
	
	if (low_word == low_match_word):
		return False
	
	checked_word_indexes = []
	for i in range(word_len):
		current_index = low_match_word.find(low_word[i])
		
		if (-1 != index_noexcept(checked_word_indexes, current_index)):
			new_match = low_match_word[index_noexcept(checked_word_indexes, current_index) + 1: match_word_len]
			
			if (-1 == new_match.find(low_word[i])):
				return False;

			current_index = low_match_word.find(low_word[i], current_index + 1)

		if (-1 == current_index):
			return False
		
		checked_word_indexes.append(current_index)

	return True;
	
	
def detect_anagrams(word, anagrams_list):
	possible_anagrams = []
	
	list_len = len(anagrams_list)
	for i in range(list_len):
		if (match(word, anagrams_list[i].lower())):
			possible_anagrams.append(anagrams_list[i])
	
	return possible_anagrams
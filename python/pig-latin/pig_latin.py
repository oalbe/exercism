def index_noexcept(array, item):
	if item in array:
		return array.index(item)

	return -1

def vowel(character):
	return (-1 != index_noexcept(['a', 'e', 'i', 'o', 'u'], character))

def compose_helper(word, index):
	return word[index + 1:] + word[0:index + 1] + 'ay'

def translate_helper(word):
	h_pos = index_noexcept(word, 'h')
	q_pos = index_noexcept(word, 'q')

	if (-1 != h_pos):
		if (('r' == word[h_pos + 1]) and ('t' == word[h_pos - 1])):
			return compose_helper(word, h_pos + 1)

		return compose_helper(word, h_pos)
	elif (('u' == word[q_pos + 1]) and (1 >= q_pos) or (-1 != q_pos)):
		return compose_helper(word, q_pos + 1)

	if vowel(word[0]):
		return word + 'ay'

	return compose_helper(word, 0)

def translate(english_word):
	# it's a phrase
	if (-1 != index_noexcept(english_word, ' ')):
		messed_phrase = ''
		words = english_word.split(' ')

		words_len = len(words)
		for i in range(words_len):
			messed_phrase += translate_helper(words[i]) + ' '

		return messed_phrase.strip()

	# it's a single word
	return translate_helper(english_word)
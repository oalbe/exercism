# Learn bitwise operations to make this code shorter
def index_noexcept(array, item):
	if item in array:
		return array.index(item)
	
	return -1

class Allergies:
	allergens_keys = [
		"cats",
		"pollen",
		"chocolate",
		"tomatoes",
		"strawberries",
		"shellfish",
		"peanuts", 
		"eggs"
	]

	def __init__(self, score):
		self.score = score % 256
	
	@property
	def lst(self):
		allergens_list = []
		
		if (0 == self.score):
			return []
	
		score = self.score
		
		keys_len = len(self.allergens_keys)
		for i in range(keys_len):
			current_key = self.allergens_keys[i]
			
			current_allergen_value = 2 ** (keys_len - i - 1)
			if (current_allergen_value <= score):
				allergens_list.append(current_key)
				score -= current_allergen_value
		
		return list(reversed(allergens_list))
	
	def is_allergic_to(self, allergen):
		allergic_to = self.lst
	
		return (-1 != index_noexcept(allergic_to, allergen))
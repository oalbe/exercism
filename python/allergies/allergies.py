def index_noexcept(array, item):
	if item in array:
		return array.index(item)
	
	return -1

class Allergies:
	allergens = {
		"cats": 128,
		"pollen": 64,
		"chocolate": 32,
		"tomatoes": 16,
		"strawberries": 8,
		"shellfish": 4,
		"peanuts": 2,
	    "eggs": 1
	}
	
	# Necessary to keep the ordering of the dictionary's keys
	allergens_keys = ["cats", "pollen", "chocolate", "tomatoes",
					  "strawberries", "shellfish", "peanuts", "eggs"]
	
	def __init__(self, score):
		self.score = score
	
	@property
	def lst(self):
		allergens_list = []
		
		if (0 == self.score):
			return []
	
		score = self.score
		
		keys_len = len(self.allergens_keys)
		for i in range(keys_len):
			current_key = self.allergens_keys[i]
			if (self.allergens[current_key] <= score):
				allergens_list.append(current_key)
				score -= self.allergens[current_key]
		
		return list(reversed(allergens_list))
	
	def is_allergic_to(self, allergen):
		allergic_to = self.lst
	
		return (-1 != index_noexcept(allergic_to, allergen))
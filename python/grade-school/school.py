class School:
	db = {}
	
	def __init__(self, school_name):
		self.name = school_name
	
	def add(self, student, grade):
		if (grade not in self.db):
			self.db[grade] = set()
		
		self.db[grade].add(student)
	
	def grade(self, wanted_grade):
		if (wanted_grade in self.db):
			return self.db[wanted_grade]
		
		return set()
	
	def sort(self):
		# Why the hell is it expecting to sort a dictionary into a tuple...
		print('### ', sorted(self.db.items()))
		return sorted(self.db.items())
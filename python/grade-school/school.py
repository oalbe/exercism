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
	
	# REVIEW: Still trying to figure out how this code exactly works
	def sort(self):
		return sorted((grade, tuple(sorted(students))) for grade, students in self.db.items())
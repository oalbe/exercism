class Garden:
	students = {
		'Alice': 0,
		'Bob': 2,
		'Charlie': 4,
		'David': 6,
		'Eve': 8,
		'Fred': 10,
		'Ginny': 12,
		'Harriet': 14,
		'Ileana': 16,
		'Joseph': 18,
		'Kincaid': 20,
		'Larry': 22
	}
	
	plants_varietys = {
		'C': 'Clover',
		'G': 'Grass',
		'R': 'Radishes',
		'V': 'Violets'
	}
	
	def __init__(self, plants_string):
		self.garden = plants_string.split('\n')
	
	def plants(self, student):
		student_plants = []
		
		child = self.students[student]
		for i in range(2):
			for j in range(child, child + 2):
				student_plants.append(self.plants_varietys[self.garden[i][j]])
		
		return student_plants
class Garden:
	students = {}
	plants_varietys = {
		'C': 'Clover',
		'G': 'Grass',
		'R': 'Radishes',
		'V': 'Violets'
	}
	
	def __init__(self, plants_string, students=None):
		if (None == students):
			self.students = {
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
		else:
			sorted_students = sorted(students)
			self.students = self.parse_students(sorted_students)
			
		self.garden = plants_string.split('\n')
	
	def parse_students(self, students_list):
		students_dict = {}

		limit = len(students_list)
		for i in range(limit):
			students_dict[students_list[i]] = i * 2

		return students_dict
	
	def plants(self, student):
		student_plants = []
		
		child = self.students[student]
		for i in range(2):
			for j in range(child, child + 2):
				student_plants.append(self.plants_varietys[self.garden[i][j]])
		
		return student_plants
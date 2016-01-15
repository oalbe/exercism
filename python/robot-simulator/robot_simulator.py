NORTH, EAST, SOUTH, WEST = range(4)

class Robot:
	directions = [NORTH, EAST, SOUTH, WEST]
	
	def __init__(self, direction=NORTH, x=0, y=0):
		self.coordinates = (x, y)
		self.bearing = direction
	
	def turn_helper(self, side):
		discriminant = 1 if side else -1
		
		new_direction = (self.bearing + discriminant) % 4
		self.bearing = self.directions[new_direction]	
		
	def turn_right(self):
		self.turn_helper(True)
	
	def turn_left(self):
		self.turn_helper(False)
	
	def advance(self):
		if (NORTH == self.bearing):
			self.coordinates = (self.coordinates[0], self.coordinates[1] + 1)
		elif (EAST == self.bearing):
			self.coordinates = (self.coordinates[0] + 1, self.coordinates[1])
		elif (SOUTH == self.bearing):
			self.coordinates = (self.coordinates[0], self.coordinates[1] - 1)
		elif (WEST == self.bearing):
			self.coordinates = (self.coordinates[0] - 1, self.coordinates[1])
	
	def simulate(self, commands_string):
		commands_len = len(commands_string)
		
		for i in range(commands_len):
			if ("L" == commands_string[i]):
				self.turn_left()
			elif ("R" == commands_string[i]):
				self.turn_right()
			elif("A" == commands_string[i]):
				self.advance()
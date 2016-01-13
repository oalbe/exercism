NORTH, EAST, SOUTH, WEST = range(4)

class Robot:
	def __init__(self, direction=NORTH, x=0, y=0):
		self.coordinates = (x, y)
		self.bearing = direction
	
	def turn_right(self):
		directions = [NORTH, EAST, SOUTH, WEST]
		if (WEST == self.bearing):
			self.bearing = NORTH
		else:
			self.bearing = directions[self.bearing + 1]
	
	def turn_left(self):
		directions = [NORTH, EAST, SOUTH, WEST]
		if (NORTH == self.bearing):
			self.bearing = WEST
		else:
			self.bearing = directions[self.bearing - 1]
	
	def advance(self):
		if (NORTH == self.bearing):
			self.coordinates = (self.coordinates[0], self.coordinates[1] + 1)
		elif (EAST == self.bearing):
			self.coordinates = (self.coordinates[0] + 1, self.coordinates[1])
		elif (SOUTH == self.bearing):
			self.coordinates = (self.coordinates[0], self.coordinates[1] - 1)
		elif (WEST == self.bearing):
			self.coordinates = (self.coordinates[0] - 1, self.coordinates[1])
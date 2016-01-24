NORTH, EAST, SOUTH, WEST = range(4)

class Robot:
	directions = [NORTH, EAST, SOUTH, WEST]
	
	def __init__(self, direction=NORTH, x=0, y=0):
		self.x = x
		self.y = y
		self.bearing = direction
	
	@property
	def coordinates(self):
	    return (self.x, self.y)
	
	
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
			self.y += 1
		elif (EAST == self.bearing):
			self.x += 1
		elif (SOUTH == self.bearing):
			self.y -= 1
		elif (WEST == self.bearing):
			self.x -= 1
	
	commands = {
		'A': advance,
		'L': turn_left,
		'R': turn_right
	}
	
	def simulate(self, commands_string):
		for instruction in commands_string:
			self.commands[instruction](self)
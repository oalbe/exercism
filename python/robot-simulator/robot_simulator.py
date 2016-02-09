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

    def turn_right(self):
        self.bearing = self.directions[(self.bearing + 1) % 4]
    
    def turn_left(self):
        self.bearing = self.directions[(self.bearing - 1) % 4]
    
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
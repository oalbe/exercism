import math

class SpaceAge:
	def __init__(self, sec):
		self.seconds = sec
	
	def on_earth(self):
		return round(self.seconds / 31557600, 2)
	
	def on_mercury(self):
		return round(self.seconds / 7600543.81992, 2)
	
	def on_venus(self):
		return round(self.seconds / 19414149.052176, 2)
	
	def on_mars(self):
		return round(self.seconds / 59354032.69008, 2)
	
	def on_jupiter(self):
		return round(self.seconds / 374355659.124, 2)
	
	def on_saturn(self):
		return round(self.seconds / 929292362.8848, 2)
	
	def on_uranus(self):
		return round(self.seconds / 2651370019.3296, 2)
	
	def on_neptune(self):
		return round(self.seconds / 5200418560.032, 2)
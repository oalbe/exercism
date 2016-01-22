import math

convert_values = {
	'earth' : 31557600,
	'mercury' : 7600543.81992,
	'venus' : 19414149.052176,
	'mars': 59354032.69008,
	'jupiter': 374355659.124,
	'saturn': 929292362.8848,
	'uranus': 2651370019.3296,
	'neptune': 5200418560.032,
}

class SpaceAge:
	def __init__(self, sec):
		self.seconds = sec
	
	def convert_helper(self, planet):
		return round(self.seconds / convert_values[planet], 2)
	
	def on_earth(self):
		return self.convert_helper("earth")
	
	def on_mercury(self):
		return self.convert_helper("mercury")
	
	def on_venus(self):
		return self.convert_helper("venus")
	
	def on_mars(self):
		return self.convert_helper("mars")
	
	def on_jupiter(self):
		return self.convert_helper("jupiter")
	
	def on_saturn(self):
		return self.convert_helper("saturn")
	
	def on_uranus(self):
		return self.convert_helper("uranus")
	
	def on_neptune(self):
		return self.convert_helper("neptune")
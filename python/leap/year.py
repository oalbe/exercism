def is_leap_year(year):
	return ((0 == (year % 4)) and (0 != (year % 100))) or (0 == (year % 400))
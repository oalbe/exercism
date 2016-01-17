def multiple(number, factors):
	factors_len = len(factors)
	for i in range(factors_len):
		if (0 == (number % factors[i])):
			return True
	
	return False

def sum_of_multiples(limit, factors=[3, 5]):
	# Remove zero as a factor since you can't divide things by zero
	if 0 in factors:
		del factors[0]
	
	s = 0
	
	for i in range(limit):
		if multiple(i, factors):
			s += i
	
	return s
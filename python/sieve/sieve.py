def generate_sequence(limit):
	sequence = {}
	for i in range(2, limit + 1):
		sequence[i] = False
	
	return sequence;

def objtoarr(dic):
	arr = []
	for key, value in dic.items():
		if (False == value):
			arr.append(int(key))
	
	return arr

def sieve(limit):
	sequence = generate_sequence(limit)
	for i in range(2, limit + 1):
		if (True == sequence[i]):
			continue
		
		for j in range(i + 1, limit + 1):
			if (0 == (j % i)):
				sequence[j] = True
	
	return objtoarr(sequence);
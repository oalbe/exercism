def indexestoarr(arr):
	output = []
	for i in range(len(arr)):
		if (False == arr[i]):
			output.append(i)
	
	return output

def sieve(limit):
	sequence = [False] * (limit + 1)
	
	sequence[0] = True
	sequence[1] = True
	
	for i in range(2, limit + 1):
		if (True == sequence[i]):
			continue
		
		for j in range(i + 1, limit + 1):
			if (0 == (j % i)):
				sequence[j] = True
	
	# TODO: Inspect this kind of syntax
	# return [i for i, j in enumerate(sequence) if not j]
	return indexestoarr(sequence)
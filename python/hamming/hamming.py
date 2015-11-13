# class Hamming:
def distance(strand1, strand2):
	if len(strand1) != len(strand2):
		return 0
	
	if strand1 == strand2:
		return 0
	
	hammingDistance = 0
	
	strandsLength = len(strand1)
	for i in range(0, strandsLength):
		if strand1[i] != strand2[i]:
			hammingDistance += 1
	
	return hammingDistance
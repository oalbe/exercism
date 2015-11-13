def to_rna(strand):
	nucleotides = {
		"G": "C",
		"C": "G",
		"T": "A",
		"A": "U"
	}
	
	convertedStrand = ''
	strandLength = len(strand)
	for i in range(0, strandLength):
		convertedStrand += nucleotides[strand[i]]
	
	return convertedStrand
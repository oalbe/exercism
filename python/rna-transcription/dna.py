def to_rna(strand):
	nucleotides = {
		"G": "C",
		"C": "G",
		"T": "A",
		"A": "U"
	}
	
	convertedStrand = ''
	for i in range(0, len(strand)):
		convertedStrand += nucleotides[strand[i]]
	
	return convertedStrand
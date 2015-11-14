def to_rna(strand):
	nucleotides = {
		"G": "C",
		"C": "G",
		"T": "A",
		"A": "U"
	}
	
	return ''.join(nucleotides[n] for n in strand)
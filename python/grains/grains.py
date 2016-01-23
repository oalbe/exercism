def on_square(square):
	return 2 ** (square - 1)

def total_after(square):
	total_grains = 0
	
	square += 1
	for i in range(1, square):
		total_grains += on_square(i)
	
	return total_grains	
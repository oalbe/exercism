def on_square(square):
	# print('square = ', square)
	# print('square - 1 = ', square - 1)
	# print('2 ** (square - 1) = ', 2 ** (square - 1))
	return 2 ** (square - 1)

def total_after(square):
	total_grains = 0
	
	for i in range(1, square + 1):
		# print(total_grains)
		# print("#", i, " = ", on_square(i))
		total_grains += on_square(i)
	
	return total_grains	
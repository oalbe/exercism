def slices(serie, slices_num):
	if ((slices_num > len(serie)) or (slices_num < 1)):
		raise ValueError('Slice size is too big.')
	
	generated_slices = []
	
	limit = len(serie) - (slices_num - 1)
	for i in range(limit):
		current_slice = []
		
		for span in range(slices_num):
			current_slice.append(int(serie[i + span]))
		
		generated_slices.append(current_slice)

	return generated_slices
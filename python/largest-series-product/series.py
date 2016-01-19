def slices(digits, slice_size):
	if (slice_size > len(digits)):
		raise ValueError('Slice size is too big.')
	
	limit = len(digits) - (slice_size - 1)
	generated_slices = []
	
	for i in range(limit):
		single_slice = []
		for span in range(slice_size):
			single_slice.append(int(digits[i + span]))
		
		generated_slices.append(single_slice)

	return generated_slices

def largest_product(digits, consecutive_digits):
	sliced_series = slices(digits, consecutive_digits)
	
	products = []
	partial_product = 1
	
	slices_len = len(sliced_series)
	for i in range(slices_len):
		partial_product = 1
		
		for j in range(consecutive_digits):
			partial_product *= sliced_series[i][j]
		
		products.append(partial_product)
	
	return max(products)
def square_of_sum(limit):
	sq_sum = 0
	limit += 1
	for i in range(1, limit):
		sq_sum += i

	return sq_sum ** 2

def sum_of_squares(limit):
	sum_sq = 0
	limit += 1
	for i in range(1, limit):
		sum_sq += i ** 2
	
	return sum_sq


def difference(limit):
	sq_sum = square_of_sum(limit)
	sum_sq = sum_of_squares(limit)
	
	return sq_sum - sum_sq
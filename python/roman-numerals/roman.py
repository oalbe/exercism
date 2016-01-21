# TODO: The whole thing could use some more "pythonic" refactoring.
base_numbers = {
	# weight: { class: value, class: value }
	1: { 1: 'I', 5: 'V' },
	2: { 1: 'X', 5: 'L' },
	3: { 1: 'C', 5: 'D' },
	4: { 1: 'M'}
}

def convert_digit(digit, weight):
	if (not digit):
		return False
	
	roman_digit = ''
	if (3 >= digit):
		for i in range(digit, 0, -1):
			roman_digit += base_numbers[weight][1]
	elif (4 == digit):
		roman_digit = base_numbers[weight][1] + base_numbers[weight][5]
	elif (5 == digit):
		roman_digit = base_numbers[weight][5]
	elif (8 >= digit):
		roman_digit += base_numbers[weight][5]
		
		for i in range(digit, 5, -1):
			roman_digit += base_numbers[weight][1]
	elif (9 == digit):
		roman_digit = base_numbers[weight][1] + base_numbers[weight + 1][1]

	return roman_digit

def numeral(arabic_number):
	number = str(arabic_number)
	number_len = len(number)
	
	roman_number = ''
	for i in range(number_len):
		converted_digit = convert_digit(int(number[i]), number_len - i)
		
		if (converted_digit):
			roman_number += converted_digit
	
	return roman_number
import re

def index_noexcept(array, item):
	if item in array:
		return array.index(item)
	
	return -1

xteen = {
	'10': 'ten',
	'11': 'eleven',
	'12': 'twelve',
	'13': 'thirteen',
	'14': 'fourteen',
	'15': 'fifteen',
	'16': 'sixteen',
	'17': 'seventeen',
	'18': 'eighteen',
	'19': 'nineteen'
}

unities = {
	'0': 'zero',
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine'
}

tens = {
	'2': 'twenty',
	'3': 'thirty',
	'4': 'forty',
	'5': 'fifty',
	'6': 'sixty',
	'7': 'seventy',
	'8': 'eighty',
	'9': 'ninety'
}

def say(number):
	number = int(number)
	if ((0 > number) or (999999999999 < number)):
		raise AttributeError('Number must be between 0 and 999,999,999,999.')
	
	digits = str(number)
	if (digits in unities):
		return unities[digits]
	
	english_number = []
	
	position = 1
	digits_length = len(digits) - 1
	for i in range(digits_length, -1, -1):
		if ('0' == digits[i]):
			position += 1
			continue

		if (1 == position):
			temp = []
			if (i + 1 != digits_length):
				temp.append('and ' + unities[digits[i]])
			else:
				temp.append(unities[digits[i]])
			
			english_number.extend(temp)
				
			position += 1
			continue
		elif (2 == (position % 3)):
			temp = []
			space = '' if (2 == position) else ' '
			
			eng_num_len = len(english_number)
			if (eng_num_len > 0):
				temp = re.split(' ', english_number.pop())
			
			if ('1' == digits[i]):
				del temp[0]
				xteen_number = xteen[digits[i] + digits[i + 1]]
				
				temp_eng = []
				if (i + 1 != digits_length):
					temp_eng.append(' and ' + xteen_number + space + ' '.join(temp))
				else:
					del temp[0]
					temp_eng.append(xteen_number)
				
				english_number.extend(temp_eng)
				
				position += 1
				continue

			currentTwoDigits = tens[digits[i]] + ('-' if ('0' != digits[i + 1]) else '')
			
			if (2 != position):
				magnitude = 'thousand'
				if (8 == position):
					magnitude = 'million'
				elif (11 == position):
					magnitude = 'billion'
				
				if (-1 == index_noexcept(temp, magnitude)):
					temp = []
					if (i + 1 != digits_length):
						temp.append(currentTwoDigits + ' ' + magnitude + ' and ' + ' '.join(temp))
					else:
						temp.append(currentTwoDigits + ' ' + magnitude + ' ' + ' '.join(temp))
					english_number.extend(temp)
					
					position += 1
					continue
			
			t = []
			if (i + 1 != digits_length):
				t.append('and ' + currentTwoDigits + ' '.join(temp))
			else:
				if len(temp) > 0:
					del temp[0]
				
				t.append(currentTwoDigits + ' '.join(temp))
			english_number.extend(t)

			position += 1
			continue
		elif ((0 == (position % 3)) or (1 == (position % 3))):
			magnitude = ''
			if (0 == (position % 3)):
				magnitude = ' hundred'
				if (len(english_number) > 0):
					t = english_number.pop()
					temp_string = re.sub(r'and\ ', '', t)
					english_number.append(temp_string)
					
					magnitude = ' hundred and'
			elif (4 == position):
				magnitude = ' thousand'
			elif (7 == position):
				magnitude = ' million'
			elif (10 == position):
				magnitude = ' billion'
			
			currentOneDigit = ''
			if (len(english_number) > 0):
				currentOneDigit = unities[digits[i]] + magnitude + ' ' + english_number.pop()
			else:
				currentOneDigit = unities[digits[i]] + magnitude
			
			t = []
			t.append(currentOneDigit)
			english_number.extend(t)
			
			position += 1
			continue

	return ' '.join(english_number)
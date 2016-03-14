from reverse_lookup_dict import reverse_lookup_dict

bcd = reverse_lookup_dict({
    '020101121000': '0',
    '000001001000': '1',
    '020021120000': '2',
    '020021021000': '3',
    '000121001000': '4',
    '020120021000': '5',
    '020120121000': '6',
    '020001001000': '7',
    '020121121000': '8',
    '020121021000': '9'
})

def to_arr(list_number):
    binaries_array = []

    matrixes_number = len(list_number[0]) // 3
    rows_number = 4
    for j in range(matrixes_number):
        binaries_array.append([])
        for i in range(rows_number):
            current = j * 3
            binaries_array[j].append(list_number[i][current:(current + 3)])

    return binaries_array

def serialize(list_number):
    arr = []
    for m in range(4):
        for a in range(3):
            arr.append(list_number[m][a])

    serialized = ''
    for i in range(0, 12):
        if ('|' == arr[i]):
            serialized += '1'
        elif ('_' == arr[i]):
            serialized += '2'
        else: 
            serialized += '0'

    return serialized

def valid_grid(list_number):
    if len(list_number) != 4:
        return False

    for row in list_number:
        if (len(row) % 3) != 0:
            return False

    return True

def number(list_number):
    if not valid_grid(list_number):
        raise ValueError('Your grid got problems.')

    digits = to_arr(list_number)
    
    composed_bcd = ''
    
    digits_limit = len(digits)
    for i in range(digits_limit):
        bcd_key = serialize(digits[i])
        
        next_digit = '?'
        if bcd.has(bcd_key):
            next_digit = bcd.get(bcd_key)

        composed_bcd += next_digit

    return composed_bcd

def deserialize(bcd_string):
    digit_grid = []
    
    bcd_string_index = 0
    while (bcd_string_index < len(bcd_string)):
        row = ''
        for i in range(3):
            if '0' == bcd_string[bcd_string_index]:
                row += ' '
            elif '1' == bcd_string[bcd_string_index]:
                row += '|'
            elif '2' == bcd_string[bcd_string_index]:
                row += '_'
            
            bcd_string_index += 1
        
        digit_grid.append(row)

    return digit_grid

def dict_find(dictionary, value):
    for key in dictionary:
        if dictionary[key] == value:
            return key
    
    return False

def valid_digits_sequence(str_number):
    for digit in str_number:
        if digit not in "0123456789":
            return False
    
    return True

def grid(str_number):
    if not valid_digits_sequence(str_number):
        raise ValueError("Invalid digit sequence.")

    final_grid = ['', '', '', '']
    for digit in str_number:
        current_digit = deserialize(bcd.get(digit))

        final_grid[0] += current_digit[0]
        final_grid[1] += current_digit[1]
        final_grid[2] += current_digit[2]
        final_grid[3] += current_digit[3]

    return final_grid
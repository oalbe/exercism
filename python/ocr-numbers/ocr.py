def to_arr(list_number):
    binaries_array = []

    # Loop through the array, three characters per row at time.
    matrixes_number = len(list_number[0]) // 3
    rows_number = 4
    for j in range(matrixes_number):
        binaries_array.append([])
        for i in range(rows_number):
            current = j * 3
            # print("# =", list_number[i][current:(current + 3)])
            binaries_array[j].append(list_number[i][current:(current + 3)])

    # print("binaries_array = ", binaries_array)
    return binaries_array

def serialize(list_number):
    serialized = ''

    arr = []
    for m in range(4):
        for a in range(3):
            arr.append(list_number[m][a])

    for i in range(0, 12):
        # if (2 == i):
        #     continue
        if ('|' == arr[i]):
            serialized += '1'
        elif ('_' == arr[i]):
            serialized += '2'
        else: 
            serialized += '0'

    return serialized

bcd = {
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
}

# bcd = {
#     '1101111000': '0',
#     '0001001000': '1',
#     '1011110000': '2',
#     '1011011000': '3',
#     '0111001000': '4',
#     '1110011000': '5',
#     '1110111000': '6',
#     '1001001000': '7',
#     '1111111000': '8',
#     '1111011000': '9'
# }

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
        if bcd_key in bcd:
            next_digit = bcd[bcd_key]

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

def grid(str_number):
    final_grid = ['', '', '', '']
    for digit in str_number:
        current_digit = deserialize(dict_find(bcd, digit))

        final_grid[0] += current_digit[0]
        final_grid[1] += current_digit[1]
        final_grid[2] += current_digit[2]
        final_grid[3] += current_digit[3]

    return final_grid
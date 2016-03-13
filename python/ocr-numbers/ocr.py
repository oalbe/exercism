def grid():
    return 0

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

    for i in range(1, 12):
        if (2 == i):
            continue
        
        serialized += '1' if ('|' == arr[i] or '_' == arr[i]) else '0'

    return serialized

bcd = {
    '1101111000': '0',
    '0001001000': '1',
    '1011110000': '2',
    '1011011000': '3',
    '0111001000': '4',
    '1110011000': '5',
    '1110111000': '6',
    '1001001000': '7',
    '1111111000': '8',
    '1111011000': '9'
}

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
    # print(digits_limit)
    for i in range(digits_limit):
        bcd_key = serialize(digits[i])
        
        next_digit = '?'
        if bcd_key in bcd:
            next_digit = bcd[bcd_key]

        composed_bcd += next_digit

    return composed_bcd
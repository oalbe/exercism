def grid():
    return 0

def to_arr(list_number):
    binaries_array = []

    # Loop through the array, three characters per row at time.
    matrixes_number = len(list_number[0]) // 3
    rows_number = 3
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
    for m in range(3):
        for a in range(3):
            arr.append(list_number[m][a])

    for i in range(1, 9):
        if (2 == i):
            continue
        
        serialized += '0' if (' ' == arr[i]) else '1'

    return serialized

bcd = {
    '1101111': '0',
    '0001001': '1',
    '1011110': '2',
    '1011011': '3',
    '0111001': '4',
    '1110011': '5',
    '1110111': '6',
    '1001001': '7',
    '1111111': '8',
    '1111011': '9'
}

def number(list_number):
    digits = to_arr(list_number)
    
    composed_bcd = ''
    
    digits_limit = len(digits)
    # print(digits_limit)
    for i in range(digits_limit):
        # TODO: Remove str(''.join()) since serialize() already returns a string.
        bcd_key = str(''.join(serialize(digits[i])))
        
        next_digit = '?'
        if bcd_key in bcd:
            next_digit = bcd[bcd_key]

        composed_bcd += next_digit

    return composed_bcd
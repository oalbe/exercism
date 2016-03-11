def grid():
    return 0

# TODO: Simplify this, since there is no use case with multiline digits.
def to_arr(list_number):
    arrOfBinaries = []

    # Loop through the array, three characters per row at time.
    numOfMatrixes = len(list_number[0]) // 3
    numRows = len(list_number) - 1

    for i in range(numRows):
        for j in range(numOfMatrixes):
            arrOfBinaries.append(list_number[i][j * 3:(j * 3) + 3])

    return arrOfBinaries

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
    
    composedBCD = ''
    
    digitsLimit = len(digits)
    for i in range(1):
        nextDigit = bcd[str(''.join(serialize(digits)))]
        # Recognize garbled digits and deal with them.
        # Then appends the result to the string of translated digits.
        composedBCD += nextDigit

    # substr removes the last comma appended to the BCD.
    return composedBCD
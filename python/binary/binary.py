def validate_binary_string(binary_string):
    for digit in binary_string:
        if (digit != "1") and (digit != "0"):
            return False

    return True

def to_dec(binary_string):
    binary_string = binary_string[::-1]
    decimal = 0
    
    binary_string_len = len(binary_string)
    for i in range(binary_string_len):
        decimal += int(binary_string[i]) * (2 ** i)

    return decimal

def parse_binary(binary_string):
    if not validate_binary_string(binary_string):
        raise ValueError("The string is not a valid binary number.")

    # return int(binary_string, 2)
    return to_dec(binary_string)
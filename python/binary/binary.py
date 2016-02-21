def validate_binary_string(binary_string):
    for digit in binary_string:
        if (digit != "1") and (digit != "0"):
            return False

    return True

def parse_binary(binary_string):
    if not validate_binary_string(binary_string):
        raise ValueError("The string is not a valid binary number.")

    return int(binary_string, 2)
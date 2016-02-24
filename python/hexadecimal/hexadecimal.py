hex_chars = {
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15
}

def int_digit_noexcept(digit):
    if digit in "0123456789":
        return int(digit)

    return False

def to_hex(hex_string):
    hex_string = hex_string[::-1].lower()
    decimal = 0

    hex_string_len = len(hex_string)
    for i in range(hex_string_len):
        digit = 0
        if hex_string[i] in "abcdef":
            digit = hex_chars[hex_string[i]]
        else:
            digit = int(hex_string[i])

        decimal += digit * (16 ** i)

    return decimal

def hexa(hex_string):
    # TODO: Validate the hex_string here.

    return to_hex(hex_string)
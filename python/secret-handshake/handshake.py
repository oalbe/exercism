commands = {
    1: 'wink',
    10: 'double blink',
    100: 'close your eyes',
    1000: 'jump'
}

def handshake(code_num):
    binary_code = code_num
    if type(code_num) is int:
        if code_num < 0:
            return []

        # `[2:]` cuts the `0b` at the beginning of the binary number
        binary_code = str(bin(code_num)[2:])

    secret = []
    
    revert = False
    if len(binary_code) > 4:
        binary_code = binary_code[1:]
        revert = True

    binary_code_len = len(binary_code)
    for i in range(binary_code_len - 1, -1, -1):
        binary_code_digit = int(binary_code[i])
        if binary_code_digit > 1:
            return []

        command_index = binary_code_digit * 10 ** (binary_code_len - i -1)
        if command_index > 0:
            secret.append(commands[command_index])

    if revert:
        # reverse the list through slicing notation
        return secret[::-1]

    return secret

def extract_key(value):
    for key, element in commands.items():
        if element == value:
            return key

    return -1

def check_sorting(code_list):
    code_list_len = len(code_list)
    for i in range(code_list_len - 1):
        if extract_key(code_list[i]) > extract_key(code_list[i + 1]):
            return True

    return False

def validate_code_list(code_list):
    for element in code_list:
        if -1 == extract_key(element):
            return False

    return True

def code(code_list):
    if not validate_code_list(code_list):
        return '0'

    reverted = False
    if check_sorting(code_list):
        reverted = True
        code_list = code_list[::-1]

    num = str(extract_key(code_list[0]))

    # `code_list[1:]` start looping over the list skipping the fist element.
    for element in code_list[1:]:
        extracted_key = str(extract_key(element))
        num = extracted_key[0:len(extracted_key) - len(num)] + str(num)

    if reverted:
        num = '1' + num

    return num
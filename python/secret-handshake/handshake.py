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
        if int(binary_code[i]) > 1:
            return []

        command_index = int(binary_code[i]) * 10 ** (binary_code_len - i -1)
        if 0 < command_index:
            secret.append(commands[command_index])

    if revert:
        # reverse the list
        return secret[::-1]

    return secret

def extract_key(value):
    for key, element in commands.items():
        if element == value:
            return key
    
    return False

def code(code_list):
    num = ''

    # print(extract_key("wink"))
    for element in code_list:
        extracted_key = extract_key(element)

        if not extracted_key:
            return '0'
        
        if num:
            num = str(extracted_key)[0] + str(num)
        else:
            num += str(extracted_key)
    
    return num
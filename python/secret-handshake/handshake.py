commands = {
    1: 'wink',
    10: 'double blink',
    100: 'close your eyes',
    1000: 'jump'
}

def handshake(code_num):
    binary_code = code_num
    if type(code_num) is int:
        # `[2:]` cuts the `0b` at the beginning of the binary number
        binary_code = str(bin(code_num)[2:])
    
    print(binary_code)
    
    secret = []
    binary_code_len = len(binary_code)
    
    revert = False
    if binary_code_len > 4:
        binary_code = binary_code[1:]
        revert = True
        binary_code_len = len(binary_code)
    
    for i in range(binary_code_len - 1, -1, -1):
    # for i in range(0, binary_code_len):
        command_index = int(binary_code[i]) * 10 ** (binary_code_len - i -1)
        print("command_index = ", command_index)
        if 0 < command_index:
            print("commands[command_index] = ", commands[command_index])
            secret.append(commands[command_index])
    
    if revert:
        return list(reversed(secret))

    return secret

def code(code_list):
    return 0
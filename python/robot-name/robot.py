from random import randint


used_names = {}

def generate_name():
    first_letter = chr(65 + randint(0, 25))
    second_letter = chr(65 + randint(0, 25))
    digits = randint(0, 999)

    if (100 > digits):
        digits = str(digits)
        digits = ('0' + digits) if (2 == len(digits)) else ('00' + digits)

    return first_letter + second_letter + str(digits)

class Robot:
    def __init__(self):
        self.reset()
    
    def reset(self):
        temp_name = generate_name()

        # Loop until a name not present inside the `used_names` dictionary has been generated.
        while temp_name not in used_names:
            used_names[temp_name] = True
            temp_name = generate_name()

       
        used_names[temp_name] = True
        self.name = temp_name
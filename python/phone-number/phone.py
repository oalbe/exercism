import re


class Phone:
    def __init__(self, input_number):
        self.raw_number = input_number

    @property
    def number(self):
        regex = r"[\(\)\-\.\s]"

        clean_number = self.raw_number
        if (re.search(regex, clean_number)):
            clean_number = re.sub(regex, '', clean_number)

        clean_number_len = len(clean_number)
        if (10 == clean_number_len):
            return clean_number
        elif (11 == clean_number_len) and ("1" == clean_number[0]):
            return clean_number[1:]

        return "0000000000"

    def area_code(self):
        return self.number[0:3]

    def pretty(self):
        return '(' + self.number[0:3] + ') ' + self.number[3:6] + '-' +  self.number[6:]
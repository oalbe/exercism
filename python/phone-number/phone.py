import re


class Phone:
    def __init__(self, input_number):
        self.raw_number = input_number
    
    @property
    def number(self):
        cleanedNumber = ''
    
        regex = r"[\(\)\-\.\s]"

        if (re.search(regex, self.raw_number)):
            cleanedNumber = re.sub(regex, '', self.raw_number)
        else:
            cleanedNumber = self.raw_number

        cleanNumLength = len(cleanedNumber)
        if (10 == cleanNumLength):
            self.raw_number = cleanedNumber
        elif ((11 == cleanNumLength) and ("1" == cleanedNumber[0])):
            self.raw_number = cleanedNumber[1:cleanNumLength]
        else: # number < 10, number > 11, number == 11 but not starting with '1'
            self.raw_number = "0000000000"

        return self.raw_number
        
    def area_code(self):
        return self.number[0:3]
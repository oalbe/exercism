class Luhn:
    def __init__(self, num):
        self._number = str(num)
        self._addends = self.addends()
    
    def addends(self):
        digits = self._number
        addends_arr = []
    
        num_len = len(digits)
        for i in range(num_len - 1, -1, -1):
            if (0 == (num_len - i) % 2):
                doubled_num = int(digits[i]) * 2
                addends_arr.append((doubled_num - 9) if (doubled_num > 9) else doubled_num)
            else:
                addends_arr.append(int(digits[i]))
        
        return addends_arr
    
    def checksum(self):
        computed_checksum = 0
        
        addends_len = len(self._addends)
        for i in range(addends_len):
            computed_checksum += self._addends[i]
        
        return computed_checksum
    
    def is_valid(self):
        return True if (0 == (self.checksum() % 10)) else False
    
    # Theoretically, this is the way to create static methods. (without the `self`)
    def create(num):
        num = str(num)
        padded_input = int(num + '0')
        number = Luhn(padded_input)

        if (not number.is_valid()):
            num_checksum = str(number.checksum())
            generated_check_digit = 10 - int(num_checksum[len(num_checksum) - 1])
            return int(num + str(generated_check_digit))
        
        return padded_input
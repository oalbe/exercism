class Luhn:
	def __init__(self, num):
		self._number = str(num)
		self._addends = self.addends()
	
	def addends(self):
		digits = self._number
		addends_arr = [];
	
		num_len = len(digits)
		for i in range(num_len - 1, -1, -1):
			if (0 == (num_len - i) % 2):
				doubled_num = int(digits[i]) * 2
				addends_arr.append((doubled_num - 9) if (doubled_num > 9) else doubled_num)
			else:
				addends_arr.append(int(digits[i]))
		
		return addends_arr;
	
	def checksum(self):
		computed_checksum = 0
		
		addends_len = len(self._addends)
		for i in range(addends_len):
			computed_checksum += self._addends[i]
		
		return computed_checksum;
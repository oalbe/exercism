from datetime import datetime
from datetime import timedelta

def add_gigasecond(startingDate):
	timestamp = (startingDate - datetime(1970, 1, 1)) / timedelta(seconds=1) + 1000000000
	return datetime(1970, 1, 1) + timedelta(seconds=timestamp)
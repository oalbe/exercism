function SecretHandshake(input) {
	if (isNaN(input)) {
		throw new Error('Handshake must be a number');
	}
	
	this.number = input;
}

var comm = {
	1: 'wink',
	10: 'double blink',
	100: 'close your eyes',
	1000: 'jump'
};

SecretHandshake.prototype.commands = function() {
	var binaryInput = this.number.toString(2); // Transforms the decimal number to binary
	var limit = binaryInput.length - 1;
	
	var reverseFlag = false;
	if (4 <= limit) {
		binaryInput = binaryInput.substring(1);
		limit -= 1;
		reverseFlag = true;
	}
	
	var commandsSequence = [];
	for (var i = limit; i >= 0; --i) {
		if ('0' !== binaryInput[i]) {
			commandsSequence.push(comm[binaryInput[i] * Math.pow(10, limit - i)]);
		}
	}
	
	if (reverseFlag) {
		return commandsSequence.reverse();
	}
	
	return commandsSequence;
};


module.exports = SecretHandshake;
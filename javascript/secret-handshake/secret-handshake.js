function SecretHandshake(input) {
	if (isNaN(input)) {
		throw new Error('Handshake must be a number');
	}
	
	this.number = input;
}

function toBinary(decimal) {
	return decimal.toString(2);
}

SecretHandshake.prototype.commands = function() {
	var commandsSequence = [];
	var binInput = toBinary(this.number);
	var binInputLength = binInput.length;
	
	var binArray = [];
	for (var i = binInputLength - 1; i >= 0; --i) {
		binArray.push(
				binInput[i] * (Math.pow(10, (binInputLength - 1) - i))
		);
	}
	
	console.log(binArray);
	
	var binArrayLength = binArray.length;
	for (var j = 0; j < binArrayLength; ++j) {
		switch (binArray[j]) {
			case 1:
				commandsSequence.push('wink');
				break;
			case 10:
				commandsSequence.push('double blink');
				break;
			case 100:
				commandsSequence.push('close your eyes');
				break;
			case 1000:
				commandsSequence.push('jump');
				break;
			case 10000:
				commandsSequence = commandsSequence.reverse();
				break;
		}
	}
	
	return commandsSequence;
};


module.exports = SecretHandshake;
function closingBracket(br) {
	if (('}' === br) || (']' === br) || (')' === br)) {
		return true;
	}
	
	return false;
}

function bracketMatch(opening, closing) {
	if (('(' === opening) && (')' === closing)) {
		return true;
	}
	
	if (('[' === opening) && (']' === closing)) {
		return true;
	}
	
	if (('{' === opening) && ('}' === closing)) {
		return true;
	}
	
	return false;
}

Array.prototype.empty = function() {
	if(this.length <= 0) {
		return true;
	}
	
	return false;
};

function bracket(input) {
	var stack = [];
	
	var inputLength = input.length;
	for (var i = 0; i < inputLength; ++i) {
		if (closingBracket(input[i])) {
			if (!bracketMatch(stack.pop(), input[i])) {
				return false;
			}
		} else {
			stack.push(input[i]);
		}
	}

	return stack.empty();
}

module.exports = bracket;
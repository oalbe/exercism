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
	
	for (var i = 0; i < input.length; ++i) {
		if (closingBracket(input[i])) {
			var poppedMatch = stack.pop();

			if (!bracketMatch(poppedMatch, input[i])) {
				return false;
			}
		} else {
			stack.push(input[i]);
		}
	}

	return stack.empty();
}

module.exports = bracket;
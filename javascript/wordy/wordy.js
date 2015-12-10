exports.WordProblem = WordProblem;
exports.ArgumentError = ArgumentError;

function ArgumentError() {}

var operations = {
	'plus': true,
	'minus': true,
	'multiplied': true,
	'divided': true
};

function WordProblem(problem) {
	this.question = problem;
}

// TODO: This method is very inelegant (and theoretically slow), do something for it.
WordProblem.prototype.isValidQuestion = function(explodedQuestion) {
	var flag = false;
	for (var key in operations) {
		if (-1 !== explodedQuestion.indexOf(key)) {
			flag = true;
		}
	}
	
	return flag;
};

WordProblem.prototype.operation = function(op, lopr, ropr) {
	lopr = parseInt(lopr);
	ropr = parseInt(ropr);
	
	switch (op) {
		case 'plus':
			return lopr + ropr;
		case 'minus':
			return lopr - ropr;
		case 'multiplied':
			return lopr * ropr;
		case 'divided':
			return lopr / ropr;
	}
};

WordProblem.prototype.answer = function() {
	// TODO: Next two line give me shudders...
	var cleaned = this.question.replace(/\?/, '').replace(/\ by/g, '');
	var cQuestion = cleaned.split(' ');
	
	if (!this.isValidQuestion(cQuestion)) {
		throw new ArgumentError();
	}

	var result = 0;
	var limit = cQuestion.length;
	for (var i = 0; i < limit; ++i) {
		if (operations[cQuestion[i]]) {
			if (result) {
				result = this.operation(cQuestion[i], result, cQuestion[i + 1]);
			} else {
				result = this.operation(cQuestion[i], cQuestion[i - 1], cQuestion[i + 1]);
			}
		}
	}
	
	return result;
};
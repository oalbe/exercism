exports.WordProblem = WordProblem;
exports.ArgumentError = ArgumentError;

function ArgumentError() {}

function WordProblem(problem) {
	this.question = problem;
}

WordProblem.prototype.parseCommand = function() {

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

var operations = {
	'plus': true,
	'minus': true,
	'multiplied': true,
	'divided': true
};

// TODO: This method is very inelegant, do something for it.
WordProblem.prototype.isValidQuestion = function(explodedQuestion) {
	var flag = false;
	for (var key in operations) {
		if (-1 !== explodedQuestion.indexOf(key)) {
			flag = true;
		}
	}
	
	return flag;
};

WordProblem.prototype.answer = function() {
	var cleaned = this.question.replace(/\?/, '').replace(/\ by/g, '');
	var cQuestion = cleaned.split(' ');
	
	if (!this.isValidQuestion(cQuestion)) {
		throw new ArgumentError();
	}
	
	console.log(cQuestion);
	var result = 0;
	for (var i = 0; i < cQuestion.length; ++i) {
		if (operations[cQuestion[i]]) {
			if (result) {
				result = this.operation(cQuestion[i], result	, cQuestion[i + 1]);
			} else {
				result = this.operation(cQuestion[i], cQuestion[i - 1], cQuestion[i + 1]);
			}
		}
	}
	
	return result;
};

/*
If you want to solve problems, you don't just solve the ones that are there. You find more, and make more, and go after the impossible ones. Fostering a love and obsession with problems is how you solve problems.
 */
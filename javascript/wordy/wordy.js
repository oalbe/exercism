exports.WordProblem = WordProblem;
exports.ArgumentError = ArgumentError;

function ArgumentError() {}

var operations = {
	plus: function(lval, rval) {
		return lval + rval;
	},
	
	minus: function(lval, rval) {
		return lval - rval;
	},
	
	multiplied: function(lval, rval) {
		return lval * rval;
	},
	
	divided: function(lval, rval) {
		return lval / rval;
	}
};

function WordProblem(problem) {
	this.question = problem;
}

// TODO: Optimize the method so it does not need to use `indexOf()`, which probably hides a loop.
WordProblem.prototype.isValidQuestion = function(explodedQuestion) {
	for (var property in operations) {
		if (-1 !== explodedQuestion.indexOf(property)) {
			return true;
		}
	}
	
	return false;
};

WordProblem.prototype.answer = function() {
	// TODO: There must be a better way than using replace.
	var cInput = this.question.replace(/\?/, '').replace(/\ by/g, '').split(' ');
	
	if (!this.isValidQuestion(cInput)) {
		throw new ArgumentError();
	}

	var result = 0;
	var limit = cInput.length;
	for (var i = 0; i < limit; ++i) {
		if (operations[cInput[i]]) {
			if (result) {
				result = operations[cInput[i]](parseInt(result), parseInt(cInput[i + 1]));
			} else {
				result = operations[cInput[i]](parseInt(cInput[i - 1]), parseInt(cInput[i + 1]));
			}
		}
	}
	
	return result;
};
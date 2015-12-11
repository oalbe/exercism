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

// TODO: This method is theoretically slow, do something for it.
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
	// TODO: Following line gives me shudders...
	var cQuestion = this.question.replace(/\?/, '').replace(/\ by/g, '').split(' ');
	
	if (!this.isValidQuestion(cQuestion)) {
		throw new ArgumentError();
	}

	var result = 0;
	var limit = cQuestion.length;
	for (var i = 0; i < limit; ++i) {
		if (operations[cQuestion[i]]) {
			if (result) {
				result = operations[cQuestion[i]](parseInt(result), parseInt(cQuestion[i + 1]));
			} else {
				result = operations[cQuestion[i]](parseInt(cQuestion[i - 1]), parseInt(cQuestion[i + 1]));
			}
		}
	}
	
	return result;
};
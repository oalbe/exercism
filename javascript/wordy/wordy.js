// REVIEW: Check the comments on exercism.io and see if implementing the capturing groups
// regex thing makes things cleaner and faster.
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

WordProblem.prototype.isValidQuestion = function() {
	wellFormedrx = /What\ is(\ -?[0-9]*\ (plus|minus|divided\ by|multiplied\ by))*\ -?[0-9]*\?/;
	return wellFormedrx.test(this.question);
};

WordProblem.prototype.answer = function() {
	if (!this.isValidQuestion(this.question)) {
		throw new ArgumentError();
	}
	
	// TODO: There must be a better way than using replace.
	var cInput = this.question.replace(/\?/, '').replace(/\ by/g, '').split(' ');

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
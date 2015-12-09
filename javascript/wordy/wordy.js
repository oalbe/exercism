exports.WordProblem = WordProblem;
exports.ArgumentError = ArgumentError;

function ArgumentError() {}

function WordProblem(problem) {
	this.question = problem;
}

WordProblem.prototype.parseCommand = function() {

};

WordProblem.prototype.operation = function(op, lopr, ropr) {
	switch (op) {
		case 'plus':
			return lopr + ropr;
		case 'minus':
		case 'multiplied':
		case 'divided':
	}
};

WordProblem.prototype.answer = function() {
	var cleaned = this.question.replace(/\?/, '');
	var arr = cleaned.split(' ');
	
	console.log(arr);
	var result = 0;
	for (var i = 2; i < arr.length; ++i) {
		result = this.operation(parseInt(arr[i]), arr[i + 1], parseInt(arr[i + 2]));
	}
	
	return result;
};
exports.WordProblem = WordProblem;
exports.ArgumentError = ArgumentError;

function ArgumentError() {}

function WordProblem(problem) {
	this.question = problem;
}

WordProblem.prototype.answer = function() {
	var arr = this.question.split(' ');
	
	console.log(arr);
	var result = [];
	for (var i = 2; i < arr.length; ++i) {
		
	}
	
	return 0;
};
function LinkedList() {}

LinkedList.prototype = Array.prototype;

LinkedList.prototype.count = function() {
	return this.length;
};

LinkedList.prototype.delete = function(element) {
	this.splice(this.indexOf(element), 1);
};

module.exports = LinkedList;
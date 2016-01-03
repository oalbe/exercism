function TwoBucket(bucketOne, bucketTwo, goal, startingBucket) {
	this.goalBucket = goal;
	this.bucketOneSize = bucketOne;
	this.bucketTwoSize = bucketTwo;
	this.starter = startingBucket;
}

TwoBucket.prototype.moves = function() {
	var mov = 0;
	
	return mov;
};

module.exports = TwoBucket;
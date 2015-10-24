var BigInt = require('./big-integer');

var Grains = function() {};

Grains.prototype.square = function(squareNumber) {
    return BigInt(2).pow(squareNumber - 1).toString(); 
};

Grains.prototype.total = function() {
    return BigInt(2).pow(64).add(-1).toString();
};

module.exports = Grains;
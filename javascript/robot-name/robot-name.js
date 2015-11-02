var usedNames = {};

var Robot = function() {
    this.reset();
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateName() {
    var firstLetter = String.fromCharCode(65 + randomInt(0, 25));
    var secondLetter = String.fromCharCode(65 + randomInt(0, 25));
    var digits = randomInt(0, 999);

    if (100 > digits) {
        digits = digits.toString();
        digits = (2 === digits.length) ? ('0' + digits) : ('00' + digits);
    }

    return firstLetter + secondLetter + digits;
}

Robot.prototype.reset = function() {
    var tempName = generateName();

    while ('undefined' !== typeof usedNames[name]) {
        usedNames[tempName] = true;
        tempName = generateName();
    }
   
    usedNames[tempName] = true;
    this.name = tempName;
};

module.exports = Robot;
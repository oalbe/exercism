var usedNames = [];

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

function isNameUsed(name) {
    if (usedNames.indexOf(name) !== -1) {
        return true;
    }

    return false;
}

var Robot = function() {
    this.reset();
};

Robot.prototype.reset = function() {
    var tempName = generateName();

    while (isNameUsed(tempName)) {
        usedNames.push(tempName);
        tempName = generateName();
    }
   
    usedNames.push(tempName);
    this.name = tempName;
};

module.exports = Robot;
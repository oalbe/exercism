function isLegalTriangle(fCat, sCat, hyp) {
    var sides = [fCat, sCat, hyp];
    var maxSide = Math.max.apply(null, sides);

    var sum = 0;
    for (var i = 0; i < 3; ++i) {
        if (i !== sides.indexOf(maxSide)) {
            sum += sides[i];
        }
    }

    if (sum >= maxSide) {
        return true;
    }

    return false;
}

function removeDuplicates(array) {
    var checkedItems = {};
    var output = [];
    
    var j = 0;
    var arrayLength = array.length;
    for(var i = 0; i < arrayLength; ++i) {
        var item = array[i];

        if(1 !== checkedItems[item]) {
            checkedItems[item] = 1;
            output[j++] = item;
        }
    }

    return output;
}

var Triangle = function(sideOne, sideTwo, sideThree) {
    this._sideOne = sideOne;
    this._sideTwo = sideTwo;
    this._sideThree = sideThree;
};

Triangle.prototype.kind = function() {
    if (!((0 < this._sideOne) && (0 < this._sideTwo) && (0 < this._sideThree))) {
        throw Error('A triangle cannot have a negative side');
    }

    if (!isLegalTriangle(this._sideOne, this._sideTwo, this._sideThree)) {
        throw Error('Illegal triangle.');
    }

    // nd = no duplicates
    var ndSides = removeDuplicates([this._sideOne, this._sideTwo, this._sideThree]);
    var ndSidesLength = ndSides.length;

    if (1 === ndSidesLength) {
        return 'equilateral';
    }

    if (2 === ndSidesLength) {
        return 'isosceles';
    }

    if (3 === ndSidesLength) {
        return 'scalene';
    }
};

module.exports = Triangle;
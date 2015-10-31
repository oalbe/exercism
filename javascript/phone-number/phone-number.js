var PhoneNumber = function(rawNumber) {
    this._number = rawNumber;
};

PhoneNumber.prototype.number = function() {
    var cleanedNumber = '';
    
    // match all opening and closing brackets, dashes, dots and whitespace
    var regex = /[\(\)\-\.\s]/g;

    if (regex.test(this._number)) {
        cleanedNumber = this._number.replace(regex, '');
    } else {
        cleanedNumber = this._number;
    }

    var cleanNumLength = cleanedNumber.length;
    if (10 === cleanNumLength) {
        this._number = cleanedNumber;
    } else if ((11 === cleanNumLength) && ('1' === cleanedNumber.charAt(0))) {
        this._number = cleanedNumber.substring(1, cleanNumLength);
    } else { // number < 10, number > 11, number === 11 but not starting with '1'
        this._number = '0000000000';
    }

    return this._number;
};

PhoneNumber.prototype.toString = function() {
    var localNumber = this.number();
    return (
        formattedNumber = '(' + localNumber.substr(0, 3) + ') ' + 
            localNumber.substr(3, 3) + '-' + 
            localNumber.substring(6, localNumber.length)
    );
};

PhoneNumber.prototype.areaCode = function () {
   return this.number().substr(0, 3);
};

module.exports = PhoneNumber;
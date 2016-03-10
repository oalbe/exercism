var PhoneNumber = function(rawNumber) {
    this._number = rawNumber;
};

PhoneNumber.prototype.number = function() {
    // match all opening and closing brackets, dashes, dots and whitespace
    var regex = /[\(\)\-\.\s]/g;

    var cleanNumber = this._number;
    if (regex.test(this._number)) {
        cleanNumber = this._number.replace(regex, '');
    }

    var cleanNumLength = cleanNumber.length;
    if (10 === cleanNumLength) {
        this._number = cleanNumber;
    } else if ((11 === cleanNumLength) && ('1' === cleanNumber.charAt(0))) {
        this._number = cleanNumber.substring(1, cleanNumLength);
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
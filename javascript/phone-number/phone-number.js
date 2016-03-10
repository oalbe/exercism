var PhoneNumber = function(rawNumber) {
    this._number = rawNumber;
};

PhoneNumber.prototype.number = function() {
    // match all opening and closing brackets, dashes, dots and whitespace
    var cleanNumber = this._number;
    
    var regex = /[\(\)\-\.\s]/g;
    if (regex.test(cleanNumber)) {
        cleanNumber = cleanNumber.replace(regex, '');
    }

    var cleanNumLength = cleanNumber.length;
    if (10 === cleanNumLength) {
        return cleanNumber;
    } else if ((11 === cleanNumLength) && ('1' === cleanNumber[0])) {
        return cleanNumber.substring(1, cleanNumLength);
    }
    
    // number < 10, number > 11, number === 11 but not starting with '1'
    return '0000000000';
};

PhoneNumber.prototype.toString = function() {
    var localNumber = this.number();
    return '(' + localNumber.substr(0, 3) + ') ' + localNumber.substr(3, 3) + '-' + 
           localNumber.substring(6);
};

PhoneNumber.prototype.areaCode = function () {
   return this.number().substr(0, 3);
};

module.exports = PhoneNumber;
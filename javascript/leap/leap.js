var isLeapYear = function(year) {
    return ((0 === (year % 4)) && (0 !== (year % 100))) || (0 === (year % 400));
};

module.exports = isLeapYear;

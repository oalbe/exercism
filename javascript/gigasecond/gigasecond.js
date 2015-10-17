var Gigasecond = function(inputDate) {
    this._date = inputDate;
};

Gigasecond.prototype.date = function() {
    var gigadate = new Date(this._date);
    gigadate.setTime(this._date.getTime() + 1000000000000);

    // this is a very ugly workaround to get rid of 
    // that 46 minutes and 40 seconds that appear out of nothing
    gigadate.setHours(0, 0, 0, 0);
    
    return gigadate;
};

module.exports = Gigasecond;
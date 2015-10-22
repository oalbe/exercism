var School = function() {
    this._db = {};
};

School.prototype.add = function(name, grade) {
    if (grade in this._db) {
        this._db[grade].push(name);
        return;
    }

    this._db[grade] = [];
    this._db[grade].push(name);
};

School.prototype.roster = function() {
    for (var key in this._db) {
        this._db[key] = this._db[key].sort();
    }

    return this._db;
};

School.prototype.grade = function(grade) {
    if (typeof this._db[grade] !== 'undefined') {
        return this._db[grade].sort();
    }

    return [];
};

module.exports = School;
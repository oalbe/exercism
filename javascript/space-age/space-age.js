var SpaceAge = function(seconds) {
    this.seconds = seconds;
    
    this.orbitalPeriods = {
        'earth' : 31557600,
        'mercury' : 7600543.81992, // 'earth' / 0.2408467
        'venus' : 19414149.052176, // 'earth' * 0.61519726
        'mars': 59354032.69008, // 'earth' * 1.8808158
        'jupiter': 374355659.124, // 'earth' * 11.862615
        'saturn': 929292362.8848, // 'earth' * 29.447498
        'uranus': 2651370019.3296, // 'earth' * 84.016846
        'neptune': 5200418560.032, // 'earth' * 164.79132
    };
};

SpaceAge.prototype._convert = function(planet) {
    return parseFloat((this.seconds / this.orbitalPeriods[planet]).toFixed(2));
};

SpaceAge.prototype.onEarth = function() {
    return this._convert('earth');
};

SpaceAge.prototype.onMercury = function() {
    return this._convert('mercury');
};

SpaceAge.prototype.onVenus = function() {
    return this._convert('venus');
};

SpaceAge.prototype.onMars = function() {
    return this._convert('mars');
};

SpaceAge.prototype.onJupiter = function() {
    return this._convert('jupiter');
};

SpaceAge.prototype.onSaturn = function() {
    return this._convert('saturn');
};

SpaceAge.prototype.onUranus = function() {
    return this._convert('uranus');
};

SpaceAge.prototype.onNeptune = function() {
    return this._convert('neptune');
};

module.exports = SpaceAge;
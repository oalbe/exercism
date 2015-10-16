var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    if (input) {
        return ('Hello, ' + input + '!');
    }

    return 'Hello, World!';
};

module.exports = HelloWorld;

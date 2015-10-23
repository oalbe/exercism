var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (!input || !input.trim() || 0 === input.length) {
        return 'Fine. Be that way!';
    }

    // the regex checks if there's at least a letter in the string, either uppercase or not
    if (/[a-zA-Z]/.test(input) && (input === input.toUpperCase())) {
            return 'Whoa, chill out!';
    }

    if (input[input.length - 1] == '?') {
        return 'Sure.';
    }

    // in all the other cases:
    return 'Whatever.';
};

module.exports = Bob;

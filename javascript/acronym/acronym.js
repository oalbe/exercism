function Acronym() {}

Acronym.prototype.parse = function(name) {
    var split_name = name.replace(/[,]/).split(/[- ]/);
    
    var acronym_output = "";
    for (var i = 0; i < split_name.length; ++i) {
        if (split_name[i] == split_name[i].toUpperCase()) {
            acronym_output += split_name[i][0];
            continue;
        }

        var word = split_name[i];
        acronym_output += word[0];
        for (var j = 1; j < word.length; ++j) {
            if (word[j] == word[j].toUpperCase()) {
                acronym_output += word[j];
            }
        }
    }

    return acronym_output.toUpperCase();
};

module.exports = new Acronym();
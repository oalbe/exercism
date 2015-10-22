function transform(objSequence) {
    var transformedSequence = {};

    for (var key in objSequence) {
        var objKey = objSequence[key];

        var objKeyLength = objKey.length;
        for (var i = 0; i < objKeyLength; ++i) {
            transformedSequence[objKey[i].toLowerCase()] = parseInt(key, 0);
        }
    }

    return transformedSequence;
}

module.exports = transform;
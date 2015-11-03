var compute = function(strand1, strand2) {
    if (strand1.length !== strand2.length) {
        throw new Error('DNA strands must be of equal length.');
    }
    
    if (strand1 === strand2) {
        return 0;
    }

    var hammingDistance = 0;
    var strandsLength = strand1.length;
    
    for (var i = 0; i < strandsLength; ++i) {
        if (strand1[i] !== strand2[i]) {
            ++hammingDistance;
        }
    }

    return hammingDistance;
};

module.exports = compute;
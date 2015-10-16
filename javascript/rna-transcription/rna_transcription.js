var DnaTranscriber = function() {};

DnaTranscriber.prototype.transcribe = function(nucleotide, mode) {
    // workaround to make default parameters work
    mode = typeof mode !== 'undefined' ? mode : 'DNA';

    var RNANucleotides = ['C', 'G', 'A', 'U'];
    var DNANucleotides = ['G', 'C', 'T', 'A'];

    if (mode === 'DNA') {
        return DNANucleotides[RNANucleotides.indexOf(nucleotide)];
    }

    return RNANucleotides[DNANucleotides.indexOf(nucleotide)];
};

DnaTranscriber.prototype.toRna = function(DNAStrand) {
    var RNAStrand = '';

    var DNALength = DNAStrand.length;
    for (var i = 0; i < DNALength; ++i) {
        RNAStrand += this.transcribe(DNAStrand[i], 'RNA');
    }

    return RNAStrand;
};

DnaTranscriber.prototype.toDna = function(RNAStrand) {
    var DNAStrand = '';

    var RNALength = RNAStrand.length;
    for (var i = 0; i < RNALength; ++i) {
        DNAStrand += this.transcribe(RNAStrand[i]);
    }

    return DNAStrand;
};

module.exports = DnaTranscriber;
var DnaTranscriber = function() {};

DnaTranscriber.prototype.transcribeNucleotide = function(nucleotide, mode) {
    var RNANucleotides = ['C', 'G', 'A', 'U'];
    var DNANucleotides = ['G', 'C', 'T', 'A'];

    if ('DNA' === mode) {
        return DNANucleotides[RNANucleotides.indexOf(nucleotide)];
    }

    return RNANucleotides[DNANucleotides.indexOf(nucleotide)];
};

DnaTranscriber.prototype.transcribeStrand = function(strand, mode) {
    var transcribedStrand = '';

    var strandLength = strand.length;
    for (var i = 0; i < strandLength; ++i) {
        transcribedStrand += this.transcribeNucleotide(strand[i], mode);
    }

    return transcribedStrand;
};

DnaTranscriber.prototype.toRna = function(DNAStrand) {
    return this.transcribeStrand(DNAStrand, 'RNA');
};

DnaTranscriber.prototype.toDna = function(RNAStrand) {
    return this.transcribeStrand(RNAStrand, 'DNA');
};

module.exports = DnaTranscriber;
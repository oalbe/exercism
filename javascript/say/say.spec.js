var say = require('./say');

describe('say', function () {

  it('zero', function () {
    expect(say.inEnglish(0)).toBe('zero');
  });

  xit('one', function () {
    expect(say.inEnglish(1)).toBe('one');
  });

  xit('fourteen', function () {
    expect(say.inEnglish(14)).toBe('fourteen');
  });

  xit('twenty', function () {
    expect(say.inEnglish(20)).toBe('twenty');
  });

  xit('twenty-two', function () {
    expect(say.inEnglish(22)).toBe('twenty-two');
  });

  xit('one hundred', function () {
    expect(say.inEnglish(100)).toBe('one hundred');
  });

  xit('one hundred twenty-three', function () {
    expect(say.inEnglish(123)).toBe('one hundred twenty-three');
  });
  
  xit('eighty hundred seventy-three', function () {
    expect(say.inEnglish(873)).toBe('eight hundred seventy-three');
  });

  xit('one thousand', function () {
    expect(say.inEnglish(1000)).toBe('one thousand');
  });

  xit('one thousand two hundred thirty-four', function () {
    expect(say.inEnglish(1234)).toBe('one thousand two hundred thirty-four');
  });
  
  xit('eleven thousand two hundred thirty-four', function () {
    expect(say.inEnglish(11234)).toBe('eleven thousand two hundred thirty-four');
  });
  
  xit('thirty-three thousand two hundred thirty-four', function () {
    expect(say.inEnglish(33234)).toBe('thirty-three thousand two hundred thirty-four');
  });
  
  xit('one hundred thirty-three thousand two hundred thirty-four', function () {
    expect(say.inEnglish(133234)).toBe('one hundred thirty-three thousand two hundred thirty-four');
  });
  
  xit('five hundred forty-three thousand eight hundred ninety-two', function () {
    expect(say.inEnglish(543892)).toBe('five hundred forty-three thousand eight hundred ninety-two');
  });

  xit('one million', function () {
    expect(say.inEnglish(1000000)).toBe('one million');
  });

  xit('one million two', function () {
    expect(say.inEnglish(1000002)).toBe('one million two');
  });

  xit('one million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(1002345))
      .toBe('one million two thousand three hundred forty-five');
  });
  
  xit('eleven million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(11002345))
      .toBe('eleven million two thousand three hundred forty-five');
  });
  
  xit('eighty-seven million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(87002345))
      .toBe('eighty-seven million two thousand three hundred forty-five');
  });
  
  it('eight hundred seventy million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(870002345))
      .toBe('eight hundred seventy million two thousand three hundred forty-five');
  });
  
  it('eight hundred seventy-seven million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(877002345))
      .toBe('eight hundred seventy-seven million two thousand three hundred forty-five');
  });
  
  xit('one billion', function () {
    expect(say.inEnglish(1000000000)).toBe('one billion');
  });

  xit('a really big number', function () {
    var expected = 'nine hundred eighty-seven billion ';
    expected += 'six hundred fifty-four million ';
    expected += 'three hundred twenty-one thousand ';
    expected += 'one hundred twenty-three';
    expect(say.inEnglish(987654321123)).toBe(expected);
  });

  xit('raises an error below zero', function () {
    expect(function () {
      say.inEnglish(-1);
    }).toThrow(new Error('Number must be between 0 and 999,999,999,999.'));
  });

  xit('raises an error above 999,999,999,999', function () {
    expect(function () {
      say.inEnglish(1000000000000);
    }).toThrow(new Error('Number must be between 0 and 999,999,999,999.'));
  });

});
var say = require('./say');

describe('say', function () {

  it('zero', function () {
    expect(say.inEnglish(0)).toBe('zero');
  });

  it('one', function () {
    expect(say.inEnglish(1)).toBe('one');
  });

  it('fourteen', function () {
    expect(say.inEnglish(14)).toBe('fourteen');
  });

  it('twenty', function () {
    expect(say.inEnglish(20)).toBe('twenty');
  });

  it('twenty-two', function () {
    expect(say.inEnglish(22)).toBe('twenty-two');
  });

  it('one hundred', function () {
    expect(say.inEnglish(100)).toBe('one hundred');
  });

  it('one hundred twenty-three', function () {
    expect(say.inEnglish(123)).toBe('one hundred twenty-three');
  });
  
  it('eighty hundred seventy-three', function () {
    expect(say.inEnglish(873)).toBe('eight hundred seventy-three');
  });

  it('one thousand', function () {
    expect(say.inEnglish(1000)).toBe('one thousand');
  });

  it('one thousand two hundred thirty-four', function () {
    expect(say.inEnglish(1234)).toBe('one thousand two hundred thirty-four');
  });
  
  it('eleven thousand two hundred thirty-four', function () {
    expect(say.inEnglish(11234)).toBe('eleven thousand two hundred thirty-four');
  });
  
  it('thirty-three thousand two hundred thirty-four', function () {
    expect(say.inEnglish(33234)).toBe('thirty-three thousand two hundred thirty-four');
  });
  
  it('one hundred thirty-three thousand two hundred thirty-four', function () {
    expect(say.inEnglish(133234)).toBe('one hundred thirty-three thousand two hundred thirty-four');
  });
  
  it('five hundred forty-three thousand eight hundred ninety-two', function () {
    expect(say.inEnglish(543892)).toBe('five hundred forty-three thousand eight hundred ninety-two');
  });

  it('one million', function () {
    expect(say.inEnglish(1000000)).toBe('one million');
  });

  it('one million two', function () {
    expect(say.inEnglish(1000002)).toBe('one million two');
  });

  it('one million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(1002345))
      .toBe('one million two thousand three hundred forty-five');
  });
  
  it('eleven million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(11002345))
      .toBe('eleven million two thousand three hundred forty-five');
  });
  
  it('eighty-seven million two thousand three hundred forty-five', function () {
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
  
  it('one billion', function () {
    expect(say.inEnglish(1000000000)).toBe('one billion');
  });

  it('a really big number', function () {
    var expected = 'nine hundred eighty-seven billion ';
    expected += 'six hundred fifty-four million ';
    expected += 'three hundred twenty-one thousand ';
    expected += 'one hundred twenty-three';
    expect(say.inEnglish(987654321123)).toBe(expected);
  });

  it('raises an error below zero', function () {
    expect(function () {
      say.inEnglish(-1);
    }).toThrow(new Error('Number must be between 0 and 999,999,999,999.'));
  });

  it('raises an error above 999,999,999,999', function () {
    expect(function () {
      say.inEnglish(1000000000000);
    }).toThrow(new Error('Number must be between 0 and 999,999,999,999.'));
  });

});
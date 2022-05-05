function convert(decimalNumber) {
    let numeral = '';

    // Some domain constants, just to describe the patterns more concisely
    const thresholds = [
      1, 5, 10, 50, 100, 500, 1000
    ];
    const repeating_chars = [ 1, 10, 100, 1000];

    const numberMap = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    };

    
    function recursiveConvert ( decNum, curPower10, numeral ) {

      const pow10 = Math.floor(decNum / curPower10);
      if (pow10 > 3) {
        throw new Error(`not valid, called with ${decNum} ${curPower10} ${numeral}`);
      }
      numeral += numberMap[curPower10].repeat(pow10);
      decNum -= curPower10 * pow10;

      if ( decNum >= curPower10 * 0.9 ) {
        numeral += numberMap[curPower10 / 10 ] + numberMap[curPower10];
        decNum -= curPower10 * 0.9;
      }
      // TODO call itself instead of returning

      return [decNum, numeral]
    }

    [decimalNumber, numeral] = recursiveConvert(decimalNumber, 1000, '')

  
    

    if( decimalNumber >= 500  ){
      numeral += 'D'
      decimalNumber -= 500
    }

    if( decimalNumber >= 400 ){
      numeral += 'CD'
      decimalNumber -= 400
    }

    [decimalNumber, numeral] = recursiveConvert(decimalNumber, 100, numeral)

    

    if( decimalNumber >= 50  ){
      numeral += 'L'
      decimalNumber -= 50
    }

    if( decimalNumber >= 40 ){
      numeral += 'XL'
      decimalNumber -= 40
    }
    
    [decimalNumber, numeral] = recursiveConvert(decimalNumber, 10, numeral)

    if( decimalNumber >= 5 && decimalNumber <=8 ){
        numeral += 'V'
        decimalNumber -= 5
    }

    if (decimalNumber == 4) {
        numeral += 'IV';
        decimalNumber -= 4;
    }

    [decimalNumber, numeral] = recursiveConvert(decimalNumber, 1, numeral)

    return numeral;
}

describe('Roman Numeral', () => {
    describe('#convert', () => {
      const cases = [
        [ 1, 'I' ],
        [ 2, 'II' ],
        [ 3, 'III' ],
        [ 4, 'IV' ],
        [ 5, 'V' ],
        [ 6, 'VI' ],
        [ 7, 'VII' ],
        [ 8, 'VIII' ],
        [ 9, 'IX' ],
        [ 10, 'X' ],
        [ 11, 'XI' ],
        [ 14, 'XIV' ],
        [ 15, 'XV' ],
        [ 16, 'XVI' ],
        [ 19, 'XIX' ],
        [ 20, 'XX' ],
        [ 21, 'XXI' ],
        [ 24, 'XXIV' ],
        [ 30, 'XXX' ],
        [ 39, 'XXXIX' ],
        [ 40, 'XL' ],
        [ 46, 'XLVI' ],
        [ 49, 'XLIX' ],
        [ 50, 'L' ],
        [ 60, 'LX' ],
        [ 80, 'LXXX' ],
        [ 90, 'XC' ],
        [ 99, 'XCIX' ],
        [ 100, 'C' ],
        [ 140, 'CXL' ],
        [ 300, 'CCC' ],
        [ 400, 'CD' ],
        [ 487, 'CDLXXXVII' ],
        [ 500, 'D' ],
        [ 900, 'CM' ],
        [ 1000, 'M' ],
        [ 2022, 'MMXXII'],
        [ 3999, 'MMMCMXCIX' ],
      ];
      cases.forEach(([ decimalNumber, expectedRoman] ) => {
        it(`converts ${decimalNumber} into ${expectedRoman}`, () => {
          expect(convert(decimalNumber)).toBe(expectedRoman);
        });
      } );
    } );
  });
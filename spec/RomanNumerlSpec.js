function convert(decimalNumber) {
    let numeral = '';

    if( decimalNumber >= 1000  ){
      numeral += 'M'.repeat(Math.floor(decimalNumber / 1000));
      decimalNumber = decimalNumber % 1000;
    }

    if( decimalNumber >= 900 ){
      numeral += 'CM'
      decimalNumber -= 900
    }

    if( decimalNumber >= 500  ){
      numeral += 'D'
      decimalNumber -= 500
    }

    if( decimalNumber >= 400 ){
      numeral += 'CD'
      decimalNumber -= 400
    }

    if( decimalNumber >= 100  ){
      numeral += 'C'.repeat(Math.floor(decimalNumber / 100));
      decimalNumber = decimalNumber % 100;
    }

    if( decimalNumber >= 90 ){
      numeral += 'XC'
      decimalNumber -= 90
    }

    if( decimalNumber >= 50  ){
      numeral += 'L'
      decimalNumber -= 50
    }

    if( decimalNumber >= 40 ){
      numeral += 'XL'
      decimalNumber -= 40
    }
    
    if ( decimalNumber / 10 > 0 ) {
      numeral += 'X'.repeat(Math.floor(decimalNumber / 10));
      decimalNumber = decimalNumber % 10;
    }

    if( decimalNumber === 9 ){
      numeral += 'IX';
    }

    if( decimalNumber >= 5 && decimalNumber <=8 ){
        numeral += 'V'
        decimalNumber -= 5
    }

    if (decimalNumber == 4) {
        numeral += 'IV';
    }

    if( decimalNumber > 0 && decimalNumber <= 3 ){
        numeral += 'I'.repeat(decimalNumber);
    }

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
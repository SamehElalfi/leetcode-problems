import { describe, it } from 'node:test';
import assert from 'node:assert';
import { convert, convertMathematical, convertAlternative } from './solution';

describe('LeetCode 6 - Zigzag Conversion', () => {
  describe('convert (Row-by-Row Simulation)', () => {
    // LeetCode provided examples
    it('should return "PAHNAPLSIIGYIR" for s="PAYPALISHIRING" and numRows=3', () => {
      assert.strictEqual(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
    });

    it('should return "PINALSIGYAHRPI" for s="PAYPALISHIRING" and numRows=4', () => {
      assert.strictEqual(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
    });

    it('should return "A" for s="A" and numRows=1', () => {
      assert.strictEqual(convert('A', 1), 'A');
    });

    // Edge cases
    it('should return the same string when numRows is 1', () => {
      assert.strictEqual(convert('ABCDEFGH', 1), 'ABCDEFGH');
    });

    it('should return the same string when numRows >= string length', () => {
      assert.strictEqual(convert('ABC', 5), 'ABC');
      assert.strictEqual(convert('AB', 3), 'AB');
    });

    it('should handle numRows equal to string length', () => {
      assert.strictEqual(convert('ABC', 3), 'ABC');
    });

    it('should handle 2 rows', () => {
      // A C E G
      // B D F H
      // Result: ACEGBDFH
      assert.strictEqual(convert('ABCDEFGH', 2), 'ACEGBDFH');
    });

    it('should handle string with length 2 and 2 rows', () => {
      assert.strictEqual(convert('AB', 2), 'AB');
    });

    // Numeric strings
    it('should handle numeric strings', () => {
      assert.strictEqual(convert('123456789', 3), '159246837');
    });

    // Special characters
    it('should handle special characters and spaces', () => {
      // "A B C D" with 2 rows:
      // Row 0: A B C D (chars at positions 0, 2, 4, 6)
      // Row 1:   ' ' ' ' ' ' (chars at positions 1, 3, 5)
      // Result: "ABCD   "
      assert.strictEqual(convert('A B C D', 2), 'ABCD   ');
    });

    // Longer strings with various row counts
    it('should handle 5 rows correctly', () => {
      // P       H
      // A     S I
      // Y   I   R
      // P L     I G
      // A       N
      // Result: PHASIYIRPLIGAN (for PAYPALISHIRING with 5 rows)
      assert.strictEqual(convert('PAYPALISHIRING', 5), 'PHASIYIRPLIGAN');
    });

    it('should handle single character string', () => {
      assert.strictEqual(convert('Z', 2), 'Z');
    });

    // Large numRows
    it('should handle numRows = 2 with various lengths', () => {
      assert.strictEqual(convert('ABCD', 2), 'ACBD');
    });
  });

  describe('convertMathematical (Mathematical Index Calculation)', () => {
    // LeetCode provided examples
    it('should return "PAHNAPLSIIGYIR" for s="PAYPALISHIRING" and numRows=3', () => {
      assert.strictEqual(
        convertMathematical('PAYPALISHIRING', 3),
        'PAHNAPLSIIGYIR'
      );
    });

    it('should return "PINALSIGYAHRPI" for s="PAYPALISHIRING" and numRows=4', () => {
      assert.strictEqual(
        convertMathematical('PAYPALISHIRING', 4),
        'PINALSIGYAHRPI'
      );
    });

    it('should return "A" for s="A" and numRows=1', () => {
      assert.strictEqual(convertMathematical('A', 1), 'A');
    });

    // Edge cases
    it('should return the same string when numRows is 1', () => {
      assert.strictEqual(convertMathematical('ABCDEFGH', 1), 'ABCDEFGH');
    });

    it('should return the same string when numRows >= string length', () => {
      assert.strictEqual(convertMathematical('ABC', 5), 'ABC');
    });

    it('should handle 2 rows', () => {
      assert.strictEqual(convertMathematical('ABCDEFGH', 2), 'ACEGBDFH');
    });

    it('should handle numeric strings', () => {
      assert.strictEqual(convertMathematical('123456789', 3), '159246837');
    });

    it('should handle 5 rows correctly', () => {
      assert.strictEqual(
        convertMathematical('PAYPALISHIRING', 5),
        'PHASIYIRPLIGAN'
      );
    });

    it('should handle single character string', () => {
      assert.strictEqual(convertMathematical('Z', 2), 'Z');
    });

    it('should handle numRows = 2 with various lengths', () => {
      assert.strictEqual(convertMathematical('ABCD', 2), 'ACBD');
    });
  });

  describe('convertAlternative (StringBuilder Array)', () => {
    // LeetCode provided examples
    it('should return "PAHNAPLSIIGYIR" for s="PAYPALISHIRING" and numRows=3', () => {
      assert.strictEqual(
        convertAlternative('PAYPALISHIRING', 3),
        'PAHNAPLSIIGYIR'
      );
    });

    it('should return "PINALSIGYAHRPI" for s="PAYPALISHIRING" and numRows=4', () => {
      assert.strictEqual(
        convertAlternative('PAYPALISHIRING', 4),
        'PINALSIGYAHRPI'
      );
    });

    it('should return "A" for s="A" and numRows=1', () => {
      assert.strictEqual(convertAlternative('A', 1), 'A');
    });

    // Edge cases
    it('should return the same string when numRows is 1', () => {
      assert.strictEqual(convertAlternative('ABCDEFGH', 1), 'ABCDEFGH');
    });

    it('should return the same string when numRows >= string length', () => {
      assert.strictEqual(convertAlternative('ABC', 5), 'ABC');
    });

    it('should handle 2 rows', () => {
      assert.strictEqual(convertAlternative('ABCDEFGH', 2), 'ACEGBDFH');
    });

    it('should handle numeric strings', () => {
      assert.strictEqual(convertAlternative('123456789', 3), '159246837');
    });

    it('should handle 5 rows correctly', () => {
      assert.strictEqual(
        convertAlternative('PAYPALISHIRING', 5),
        'PHASIYIRPLIGAN'
      );
    });

    it('should handle single character string', () => {
      assert.strictEqual(convertAlternative('Z', 2), 'Z');
    });

    it('should handle numRows = 2 with various lengths', () => {
      assert.strictEqual(convertAlternative('ABCD', 2), 'ACBD');
    });
  });

  describe('All approaches should produce identical results', () => {
    const testCases = [
      { s: 'PAYPALISHIRING', numRows: 3 },
      { s: 'PAYPALISHIRING', numRows: 4 },
      { s: 'PAYPALISHIRING', numRows: 5 },
      { s: 'A', numRows: 1 },
      { s: 'AB', numRows: 1 },
      { s: 'ABCDEFGHIJKLMNOP', numRows: 2 },
      { s: 'ABCDEFGHIJKLMNOP', numRows: 6 },
      { s: '123456789', numRows: 3 },
    ];

    testCases.forEach(({ s, numRows }) => {
      it(`should produce same result for s="${s}" and numRows=${numRows}`, () => {
        const result1 = convert(s, numRows);
        const result2 = convertMathematical(s, numRows);
        const result3 = convertAlternative(s, numRows);

        assert.strictEqual(result1, result2);
        assert.strictEqual(result2, result3);
      });
    });
  });
});

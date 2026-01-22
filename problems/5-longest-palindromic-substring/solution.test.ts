import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  longestPalindrome,
  longestPalindromeDP,
  longestPalindromeManacher,
  longestPalindromeBruteForce,
} from './solution';

/**
 * Helper function to check if a string is a palindrome
 */
function isPalindrome(s: string): boolean {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Helper function to verify the result is valid
 * (since there can be multiple correct answers like "bab" or "aba")
 */
function isValidLongestPalindrome(
  s: string,
  result: string,
  expectedLength: number
): boolean {
  return (
    result.length === expectedLength &&
    isPalindrome(result) &&
    s.includes(result)
  );
}

describe('LeetCode 5 - Longest Palindromic Substring', () => {
  describe('longestPalindrome (Expand Around Center)', () => {
    it('should return valid palindrome for s="babad" with length 3', () => {
      const result = longestPalindrome('babad');
      assert.ok(
        isValidLongestPalindrome('babad', result, 3),
        `Expected palindrome of length 3, got "${result}"`
      );
    });

    it('should return "bb" for s="cbbd"', () => {
      assert.strictEqual(longestPalindrome('cbbd'), 'bb');
    });

    it('should return the string itself for single character', () => {
      assert.strictEqual(longestPalindrome('a'), 'a');
    });

    it('should return empty string for empty input', () => {
      assert.strictEqual(longestPalindrome(''), '');
    });

    it('should return "aa" for s="aa"', () => {
      assert.strictEqual(longestPalindrome('aa'), 'aa');
    });

    it('should return "a" for s="ac"', () => {
      assert.strictEqual(longestPalindrome('ac'), 'a');
    });

    it('should handle entire string being a palindrome', () => {
      assert.strictEqual(longestPalindrome('racecar'), 'racecar');
    });

    it('should handle palindrome at the end', () => {
      const result = longestPalindrome('abacdfgdcaba');
      assert.ok(
        isValidLongestPalindrome('abacdfgdcaba', result, 3),
        `Expected palindrome of length 3, got "${result}"`
      );
    });

    it('should handle all same characters', () => {
      assert.strictEqual(longestPalindrome('aaaa'), 'aaaa');
    });

    it('should handle long even palindrome', () => {
      assert.strictEqual(longestPalindrome('abccba'), 'abccba');
    });

    it('should handle long odd palindrome', () => {
      assert.strictEqual(longestPalindrome('abcba'), 'abcba');
    });

    it('should handle palindrome in the middle', () => {
      const result = longestPalindrome('xabax');
      assert.strictEqual(result, 'xabax');
    });

    it('should handle two character different string', () => {
      assert.strictEqual(longestPalindrome('ab'), 'a');
    });

    it('should handle complex case with multiple palindromes', () => {
      const result = longestPalindrome('forgeeksskeegfor');
      assert.strictEqual(result, 'geeksskeeg');
    });

    it('should handle string with spaces', () => {
      const result = longestPalindrome('a b a');
      assert.strictEqual(result, 'a b a');
    });

    it('should handle numeric characters', () => {
      const result = longestPalindrome('12321');
      assert.strictEqual(result, '12321');
    });
  });

  describe('longestPalindromeDP (Dynamic Programming)', () => {
    it('should return valid palindrome for s="babad" with length 3', () => {
      const result = longestPalindromeDP('babad');
      assert.ok(
        isValidLongestPalindrome('babad', result, 3),
        `Expected palindrome of length 3, got "${result}"`
      );
    });

    it('should return "bb" for s="cbbd"', () => {
      assert.strictEqual(longestPalindromeDP('cbbd'), 'bb');
    });

    it('should return the string itself for single character', () => {
      assert.strictEqual(longestPalindromeDP('x'), 'x');
    });

    it('should return empty string for empty input', () => {
      assert.strictEqual(longestPalindromeDP(''), '');
    });

    it('should return "aa" for s="aa"', () => {
      assert.strictEqual(longestPalindromeDP('aa'), 'aa');
    });

    it('should handle entire string being a palindrome', () => {
      assert.strictEqual(longestPalindromeDP('level'), 'level');
    });

    it('should handle all same characters', () => {
      assert.strictEqual(longestPalindromeDP('bbbbb'), 'bbbbb');
    });

    it('should handle long even palindrome', () => {
      assert.strictEqual(longestPalindromeDP('abba'), 'abba');
    });

    it('should handle long odd palindrome', () => {
      assert.strictEqual(longestPalindromeDP('aba'), 'aba');
    });

    it('should handle complex case', () => {
      const result = longestPalindromeDP('forgeeksskeegfor');
      assert.strictEqual(result, 'geeksskeeg');
    });
  });

  describe('longestPalindromeManacher (Manacher Algorithm)', () => {
    it('should return valid palindrome for s="babad" with length 3', () => {
      const result = longestPalindromeManacher('babad');
      assert.ok(
        isValidLongestPalindrome('babad', result, 3),
        `Expected palindrome of length 3, got "${result}"`
      );
    });

    it('should return "bb" for s="cbbd"', () => {
      assert.strictEqual(longestPalindromeManacher('cbbd'), 'bb');
    });

    it('should return the string itself for single character', () => {
      assert.strictEqual(longestPalindromeManacher('z'), 'z');
    });

    it('should return empty string for empty input', () => {
      assert.strictEqual(longestPalindromeManacher(''), '');
    });

    it('should return "aa" for s="aa"', () => {
      assert.strictEqual(longestPalindromeManacher('aa'), 'aa');
    });

    it('should handle entire string being a palindrome', () => {
      assert.strictEqual(longestPalindromeManacher('madam'), 'madam');
    });

    it('should handle all same characters', () => {
      assert.strictEqual(longestPalindromeManacher('ccccc'), 'ccccc');
    });

    it('should handle long even palindrome', () => {
      assert.strictEqual(longestPalindromeManacher('abccba'), 'abccba');
    });

    it('should handle long odd palindrome', () => {
      assert.strictEqual(longestPalindromeManacher('abcba'), 'abcba');
    });

    it('should handle complex case', () => {
      const result = longestPalindromeManacher('forgeeksskeegfor');
      assert.strictEqual(result, 'geeksskeeg');
    });

    it('should handle longer complex string', () => {
      const result = longestPalindromeManacher('abaabacabacabaaba');
      // The longest palindrome is "abaabacabacabaaba" (length 17) or a substring
      assert.ok(isPalindrome(result), `Result "${result}" should be palindrome`);
      assert.ok(result.length >= 9, `Expected length >= 9, got ${result.length}`);
    });
  });

  describe('longestPalindromeBruteForce (Brute Force)', () => {
    it('should return valid palindrome for s="babad" with length 3', () => {
      const result = longestPalindromeBruteForce('babad');
      assert.ok(
        isValidLongestPalindrome('babad', result, 3),
        `Expected palindrome of length 3, got "${result}"`
      );
    });

    it('should return "bb" for s="cbbd"', () => {
      assert.strictEqual(longestPalindromeBruteForce('cbbd'), 'bb');
    });

    it('should return the string itself for single character', () => {
      assert.strictEqual(longestPalindromeBruteForce('m'), 'm');
    });

    it('should return empty string for empty input', () => {
      assert.strictEqual(longestPalindromeBruteForce(''), '');
    });

    it('should return "aa" for s="aa"', () => {
      assert.strictEqual(longestPalindromeBruteForce('aa'), 'aa');
    });

    it('should handle entire string being a palindrome', () => {
      assert.strictEqual(longestPalindromeBruteForce('noon'), 'noon');
    });

    it('should handle all same characters', () => {
      assert.strictEqual(longestPalindromeBruteForce('ddd'), 'ddd');
    });

    it('should handle long even palindrome', () => {
      assert.strictEqual(longestPalindromeBruteForce('abba'), 'abba');
    });

    it('should handle long odd palindrome', () => {
      assert.strictEqual(longestPalindromeBruteForce('aba'), 'aba');
    });
  });

  describe('Edge Cases (All Approaches)', () => {
    const approaches = [
      { name: 'Expand Around Center', fn: longestPalindrome },
      { name: 'Dynamic Programming', fn: longestPalindromeDP },
      { name: 'Manacher', fn: longestPalindromeManacher },
      { name: 'Brute Force', fn: longestPalindromeBruteForce },
    ];

    for (const { name, fn } of approaches) {
      describe(`${name}`, () => {
        it('should handle two same characters', () => {
          assert.strictEqual(fn('bb'), 'bb');
        });

        it('should handle three same characters', () => {
          assert.strictEqual(fn('aaa'), 'aaa');
        });

        it('should handle alternating characters', () => {
          const result = fn('ababab');
          // "ababa" or "babab" are both valid (length 5)
          assert.ok(
            isValidLongestPalindrome('ababab', result, 5),
            `Expected palindrome of length 5, got "${result}"`
          );
        });

        it('should handle palindrome at start', () => {
          const result = fn('abacd');
          assert.strictEqual(result, 'aba');
        });

        it('should handle palindrome at end', () => {
          const result = fn('cdaba');
          assert.strictEqual(result, 'aba');
        });
      });
    }
  });
});

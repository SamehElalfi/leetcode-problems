import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringSet,
  lengthOfLongestSubstringBruteForce,
} from './solution';

describe('LeetCode 3 - Longest Substring Without Repeating Characters', () => {
  describe('lengthOfLongestSubstring (Sliding Window with Hash Map)', () => {
    it('should return 3 for s="abcabcbb"', () => {
      assert.strictEqual(lengthOfLongestSubstring('abcabcbb'), 3);
    });

    it('should return 1 for s="bbbbb"', () => {
      assert.strictEqual(lengthOfLongestSubstring('bbbbb'), 1);
    });

    it('should return 3 for s="pwwkew"', () => {
      assert.strictEqual(lengthOfLongestSubstring('pwwkew'), 3);
    });

    it('should return 0 for empty string', () => {
      assert.strictEqual(lengthOfLongestSubstring(''), 0);
    });

    it('should return 1 for single character', () => {
      assert.strictEqual(lengthOfLongestSubstring('a'), 1);
    });

    it('should return length for all unique characters', () => {
      assert.strictEqual(lengthOfLongestSubstring('abcdef'), 6);
    });

    it('should handle string with spaces', () => {
      assert.strictEqual(lengthOfLongestSubstring('a b c'), 3);
    });

    it('should handle special characters', () => {
      assert.strictEqual(lengthOfLongestSubstring('!@#$%'), 5);
    });

    it('should handle numbers', () => {
      assert.strictEqual(lengthOfLongestSubstring('123121'), 3);
    });

    it('should handle mixed characters', () => {
      assert.strictEqual(lengthOfLongestSubstring('ab1!ab2@'), 6);
    });

    it('should handle duplicate at the end', () => {
      assert.strictEqual(lengthOfLongestSubstring('abcdea'), 5);
    });

    it('should handle alternating characters', () => {
      assert.strictEqual(lengthOfLongestSubstring('ababab'), 2);
    });

    it('should handle long unique substring in middle', () => {
      assert.strictEqual(lengthOfLongestSubstring('dvdf'), 3);
    });

    it('should handle two character string with duplicates', () => {
      assert.strictEqual(lengthOfLongestSubstring('au'), 2);
    });

    it('should handle complex case', () => {
      assert.strictEqual(lengthOfLongestSubstring('tmmzuxt'), 5);
    });
  });

  describe('lengthOfLongestSubstringSet (Sliding Window with Set)', () => {
    it('should return 3 for s="abcabcbb"', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('abcabcbb'), 3);
    });

    it('should return 1 for s="bbbbb"', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('bbbbb'), 1);
    });

    it('should return 3 for s="pwwkew"', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('pwwkew'), 3);
    });

    it('should return 0 for empty string', () => {
      assert.strictEqual(lengthOfLongestSubstringSet(''), 0);
    });

    it('should return 1 for single character', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('x'), 1);
    });

    it('should return length for all unique characters', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('abcdefg'), 7);
    });

    it('should handle duplicate at the end', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('abcdea'), 5);
    });

    it('should handle alternating characters', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('ababab'), 2);
    });

    it('should handle complex case', () => {
      assert.strictEqual(lengthOfLongestSubstringSet('dvdf'), 3);
    });
  });

  describe('lengthOfLongestSubstringBruteForce (Brute Force)', () => {
    it('should return 3 for s="abcabcbb"', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('abcabcbb'), 3);
    });

    it('should return 1 for s="bbbbb"', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('bbbbb'), 1);
    });

    it('should return 3 for s="pwwkew"', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('pwwkew'), 3);
    });

    it('should return 0 for empty string', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce(''), 0);
    });

    it('should return 1 for single character', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('z'), 1);
    });

    it('should return length for all unique characters', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('abc'), 3);
    });

    it('should handle duplicate at the end', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('abcdea'), 5);
    });

    it('should handle alternating characters', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('aba'), 2);
    });

    it('should handle complex case', () => {
      assert.strictEqual(lengthOfLongestSubstringBruteForce('dvdf'), 3);
    });
  });
});

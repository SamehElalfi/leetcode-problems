import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  isPalindrome,
  isPalindromeString,
  isPalindromeFullReverse,
} from './solution';

describe('LeetCode 9 - Palindrome Number', () => {
  describe('isPalindrome (Reverse Half)', () => {
    it('should return true for x=121', () => {
      assert.strictEqual(isPalindrome(121), true);
    });

    it('should return false for x=-121', () => {
      assert.strictEqual(isPalindrome(-121), false);
    });

    it('should return true for single digit numbers', () => {
      assert.strictEqual(isPalindrome(0), true);
      assert.strictEqual(isPalindrome(5), true);
      assert.strictEqual(isPalindrome(9), true);
    });

    it('should return true for two-digit palindromes', () => {
      assert.strictEqual(isPalindrome(11), true);
      assert.strictEqual(isPalindrome(22), true);
      assert.strictEqual(isPalindrome(99), true);
    });

    it('should return false for two-digit non-palindromes', () => {
      assert.strictEqual(isPalindrome(12), false);
      assert.strictEqual(isPalindrome(23), false);
    });

    it('should return true for even-length palindromes', () => {
      assert.strictEqual(isPalindrome(1221), true);
      assert.strictEqual(isPalindrome(123321), true);
    });

    it('should return true for odd-length palindromes', () => {
      assert.strictEqual(isPalindrome(12321), true);
      assert.strictEqual(isPalindrome(1234321), true);
    });

    it('should return false for numbers ending in 0', () => {
      assert.strictEqual(isPalindrome(10), false);
      assert.strictEqual(isPalindrome(100), false);
      assert.strictEqual(isPalindrome(1000), false);
    });

    it('should return false for all negative numbers', () => {
      assert.strictEqual(isPalindrome(-1), false);
      assert.strictEqual(isPalindrome(-121), false);
      assert.strictEqual(isPalindrome(-12321), false);
    });

    it('should return false for large non-palindromes', () => {
      assert.strictEqual(isPalindrome(1234567), false);
      assert.strictEqual(isPalindrome(123456789), false);
    });

    it('should return true for large palindromes', () => {
      assert.strictEqual(isPalindrome(123454321), true);
      assert.strictEqual(isPalindrome(987656789), true);
    });
  });

  describe('isPalindromeString (String Conversion)', () => {
    it('should return true for x=121', () => {
      assert.strictEqual(isPalindromeString(121), true);
    });

    it('should return false for x=-121', () => {
      assert.strictEqual(isPalindromeString(-121), false);
    });

    it('should return false for x=10', () => {
      assert.strictEqual(isPalindromeString(10), false);
    });

    it('should return true for single digit numbers', () => {
      assert.strictEqual(isPalindromeString(0), true);
      assert.strictEqual(isPalindromeString(7), true);
    });

    it('should return true for palindromes', () => {
      assert.strictEqual(isPalindromeString(1221), true);
      assert.strictEqual(isPalindromeString(12321), true);
    });

    it('should return false for non-palindromes', () => {
      assert.strictEqual(isPalindromeString(123), false);
      assert.strictEqual(isPalindromeString(1234), false);
    });

    it('should return false for numbers ending in 0', () => {
      assert.strictEqual(isPalindromeString(100), false);
    });

    it('should return false for negative numbers', () => {
      assert.strictEqual(isPalindromeString(-11), false);
    });
  });

  describe('isPalindromeFullReverse (Full Reverse)', () => {
    it('should return true for x=121', () => {
      assert.strictEqual(isPalindromeFullReverse(121), true);
    });

    it('should return false for x=-121', () => {
      assert.strictEqual(isPalindromeFullReverse(-121), false);
    });

    it('should return false for x=10', () => {
      assert.strictEqual(isPalindromeFullReverse(10), false);
    });

    it('should return true for single digit numbers', () => {
      assert.strictEqual(isPalindromeFullReverse(0), true);
      assert.strictEqual(isPalindromeFullReverse(8), true);
    });

    it('should return true for palindromes', () => {
      assert.strictEqual(isPalindromeFullReverse(1221), true);
      assert.strictEqual(isPalindromeFullReverse(12321), true);
    });

    it('should return false for non-palindromes', () => {
      assert.strictEqual(isPalindromeFullReverse(123), false);
      assert.strictEqual(isPalindromeFullReverse(1234), false);
    });

    it('should return false for numbers ending in 0', () => {
      assert.strictEqual(isPalindromeFullReverse(1000), false);
    });

    it('should return false for negative numbers', () => {
      assert.strictEqual(isPalindromeFullReverse(-99), false);
    });
  });
});

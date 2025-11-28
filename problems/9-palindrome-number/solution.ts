/**
 * LeetCode Problem #9 - Palindrome Number
 *
 * Problem: Given an integer x, return true if x is a palindrome, and false otherwise.
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * @see https://leetcode.com/problems/palindrome-number/
 */

/**
 * Approach 1: Reverse Half (Optimal)
 *
 * This solution reverses only the second half of the number and compares it with
 * the first half. This avoids potential integer overflow and is more efficient.
 *
 * Key observations:
 * - Negative numbers are not palindromes
 * - Numbers ending in 0 (except 0 itself) are not palindromes
 * - We only need to reverse half the number to check for palindrome
 *
 * Time Complexity: O(log n) - Process half the digits
 * Space Complexity: O(1) - Only use constant extra space
 *
 * @param x - The integer to check
 * @returns true if x is a palindrome, false otherwise
 *
 * @example
 * // Returns true
 * isPalindrome(121);
 *
 * @example
 * // Returns false
 * isPalindrome(-121);
 *
 * @example
 * // Returns false
 * isPalindrome(10);
 */
export function isPalindrome(x: number): boolean {
  // Negative numbers are not palindromes
  // Numbers ending in 0 (except 0 itself) are not palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // Reverse the second half of the number
  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For even length: x === reversedHalf (e.g., 1221 -> 12 === 12)
  // For odd length: x === Math.floor(reversedHalf / 10) (e.g., 12321 -> 12 === 123/10)
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

/**
 * Approach 2: String Conversion
 *
 * This solution converts the number to a string and uses two pointers
 * to check if it reads the same forwards and backwards.
 *
 * Time Complexity: O(n) - Where n is the number of digits
 * Space Complexity: O(n) - String representation
 *
 * @param x - The integer to check
 * @returns true if x is a palindrome, false otherwise
 *
 * @example
 * // Returns true
 * isPalindromeString(12321);
 */
export function isPalindromeString(x: number): boolean {
  // Negative numbers are not palindromes
  if (x < 0) {
    return false;
  }

  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/**
 * Approach 3: Full Reverse
 *
 * This solution reverses the entire number and compares it with the original.
 * Note: This approach may have integer overflow issues for large numbers.
 *
 * Time Complexity: O(log n) - Process all digits
 * Space Complexity: O(1) - Only use constant extra space
 *
 * @param x - The integer to check
 * @returns true if x is a palindrome, false otherwise
 *
 * @example
 * // Returns true
 * isPalindromeFullReverse(1221);
 */
export function isPalindromeFullReverse(x: number): boolean {
  // Negative numbers are not palindromes
  if (x < 0) {
    return false;
  }

  const original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

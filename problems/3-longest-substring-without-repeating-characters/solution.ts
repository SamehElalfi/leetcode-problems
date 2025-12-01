/**
 * LeetCode Problem #3 - Longest Substring Without Repeating Characters
 *
 * Problem: Given a string s, find the length of the longest substring
 * without repeating characters.
 *
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * Approach 1: Sliding Window with Hash Map (Optimal)
 *
 * This solution uses a sliding window technique with a hash map to track
 * the most recent index of each character. When we encounter a duplicate,
 * we move the left pointer to skip past the previous occurrence.
 *
 * Time Complexity: O(n) - Single pass through the string
 * Space Complexity: O(min(m, n)) - Hash map stores unique characters
 *
 * @param s - The input string
 * @returns The length of the longest substring without repeating characters
 *
 * @example
 * // Returns 3
 * lengthOfLongestSubstring("abcabcbb");
 *
 * @example
 * // Returns 1
 * lengthOfLongestSubstring("bbbbb");
 *
 * @example
 * // Returns 3
 * lengthOfLongestSubstring("pwwkew");
 */
export function lengthOfLongestSubstring(s: string): number {
  // Map to store character -> last seen index
  const charMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If character is in map and its index is within current window
    if (charMap.has(char) && charMap.get(char)! >= left) {
      // Move left pointer to position after the duplicate
      left = charMap.get(char)! + 1;
    }

    // Update the character's position in map
    charMap.set(char, right);

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/**
 * Approach 2: Sliding Window with Set
 *
 * This solution uses a set to track characters in the current window.
 * When a duplicate is found, we remove characters from the left until
 * the duplicate is removed.
 *
 * Time Complexity: O(2n) = O(n) - Each character visited at most twice
 * Space Complexity: O(min(m, n)) - Set stores unique characters
 *
 * @param s - The input string
 * @returns The length of the longest substring without repeating characters
 *
 * @example
 * // Returns 3
 * lengthOfLongestSubstringSet("abcabcbb");
 */
export function lengthOfLongestSubstringSet(s: string): number {
  const charSet = new Set<string>();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // Remove characters from left until duplicate is removed
    while (charSet.has(char)) {
      charSet.delete(s[left]);
      left++;
    }

    // Add current character to set
    charSet.add(char);

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/**
 * Approach 3: Brute Force
 *
 * This solution checks all possible substrings and finds the longest
 * one without repeating characters.
 *
 * Time Complexity: O(n³) - Check all substrings and verify uniqueness
 * Space Complexity: O(min(m, n)) - For storing characters
 *
 * @param s - The input string
 * @returns The length of the longest substring without repeating characters
 *
 * @example
 * // Returns 3
 * lengthOfLongestSubstringBruteForce("dvdf");
 */
export function lengthOfLongestSubstringBruteForce(s: string): number {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const seen = new Set<string>();

    for (let j = i; j < s.length; j++) {
      const char = s[j];

      if (seen.has(char)) {
        break;
      }

      seen.add(char);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}

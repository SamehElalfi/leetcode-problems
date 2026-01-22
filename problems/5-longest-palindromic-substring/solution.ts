/**
 * LeetCode Problem #5 - Longest Palindromic Substring
 *
 * Problem: Given a string s, return the longest palindromic substring in s.
 *
 * @see https://leetcode.com/problems/longest-palindromic-substring/
 */

/**
 * Approach 1: Expand Around Center (Optimal)
 *
 * This solution expands around each possible center (both single character
 * and between two characters) to find palindromes. It returns the longest
 * palindrome found.
 *
 * Time Complexity: O(n²) - For each center, we expand outward
 * Space Complexity: O(1) - Only using constant extra space
 *
 * @param s - The input string
 * @returns The longest palindromic substring
 *
 * @example
 * // Returns "bab" or "aba"
 * longestPalindrome("babad");
 *
 * @example
 * // Returns "bb"
 * longestPalindrome("cbbd");
 */
export function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  /**
   * Expands around the center and returns the length of the palindrome
   * @param left - Left index
   * @param right - Right index
   * @returns Length of palindrome found
   */
  function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes (single character center)
    const len1 = expandAroundCenter(i, i);
    // Even length palindromes (between two characters)
    const len2 = expandAroundCenter(i, i + 1);

    const len = Math.max(len1, len2);

    if (len > maxLength) {
      maxLength = len;
      // Calculate start index based on center and length
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}

/**
 * Approach 2: Dynamic Programming
 *
 * This solution uses a 2D DP table where dp[i][j] indicates whether
 * s[i..j] is a palindrome. We build up from smaller substrings to larger ones.
 *
 * Time Complexity: O(n²) - Fill the DP table
 * Space Complexity: O(n²) - 2D DP table
 *
 * @param s - The input string
 * @returns The longest palindromic substring
 *
 * @example
 * // Returns "bab" or "aba"
 * longestPalindromeDP("babad");
 */
export function longestPalindromeDP(s: string): string {
  const n = s.length;

  if (n < 2) {
    return s;
  }

  // dp[i][j] = true if s[i..j] is a palindrome
  const dp: boolean[][] = Array.from({ length: n }, () =>
    Array(n).fill(false)
  );

  let start = 0;
  let maxLength = 1;

  // All single characters are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for palindromes of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for palindromes of length 3 and more
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;

      // s[i..j] is palindrome if s[i] === s[j] and s[i+1..j-1] is palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          start = i;
          maxLength = len;
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
}

/**
 * Approach 3: Manacher's Algorithm (Most Optimal)
 *
 * This algorithm finds all palindromes in O(n) time by cleverly reusing
 * previously computed information about palindrome centers.
 *
 * Time Complexity: O(n) - Linear time
 * Space Complexity: O(n) - For the transformed string and P array
 *
 * @param s - The input string
 * @returns The longest palindromic substring
 *
 * @example
 * // Returns "bab" or "aba"
 * longestPalindromeManacher("babad");
 */
export function longestPalindromeManacher(s: string): string {
  if (s.length < 2) {
    return s;
  }

  // Transform string: "abc" -> "^#a#b#c#$"
  // This handles both odd and even length palindromes uniformly
  const t = '^#' + s.split('').join('#') + '#$';
  const n = t.length;

  // P[i] = radius of palindrome centered at i in transformed string
  const P: number[] = Array(n).fill(0);

  let center = 0; // Center of the rightmost palindrome
  let right = 0; // Right edge of the rightmost palindrome

  for (let i = 1; i < n - 1; i++) {
    // Mirror of i with respect to center
    const mirror = 2 * center - i;

    // If i is within the rightmost palindrome, we can use mirror info
    if (i < right) {
      P[i] = Math.min(right - i, P[mirror]);
    }

    // Expand around center i
    while (t[i + P[i] + 1] === t[i - P[i] - 1]) {
      P[i]++;
    }

    // Update center and right if palindrome at i extends beyond right
    if (i + P[i] > right) {
      center = i;
      right = i + P[i];
    }
  }

  // Find the maximum palindrome length and its center
  let maxLen = 0;
  let centerIndex = 0;

  for (let i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  }

  // Convert back to original string indices
  const startIndex = Math.floor((centerIndex - maxLen - 1) / 2);

  return s.substring(startIndex, startIndex + maxLen);
}

/**
 * Approach 4: Brute Force
 *
 * This solution checks all possible substrings and finds the longest
 * one that is a palindrome.
 *
 * Time Complexity: O(n³) - Check all substrings and verify palindrome
 * Space Complexity: O(1) - Only using constant extra space
 *
 * @param s - The input string
 * @returns The longest palindromic substring
 *
 * @example
 * // Returns "bab" or "aba"
 * longestPalindromeBruteForce("babad");
 */
export function longestPalindromeBruteForce(s: string): string {
  if (s.length < 2) {
    return s;
  }

  /**
   * Checks if a substring is a palindrome
   * @param str - The string
   * @param left - Left index
   * @param right - Right index
   * @returns True if the substring is a palindrome
   */
  function isPalindrome(str: string, left: number, right: number): boolean {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + maxLength; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        start = i;
        maxLength = j - i + 1;
      }
    }
  }

  return s.substring(start, start + maxLength);
}

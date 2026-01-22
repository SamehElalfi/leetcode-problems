# Problem #5 - Longest Palindromic Substring

**Difficulty:** Medium

**LeetCode Link:** [https://leetcode.com/problems/longest-palindromic-substring/](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem Description

Given a string `s`, return the **longest palindromic substring** in `s`.

A **palindrome** is a string that reads the same forward and backward.

### Constraints

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters

## Examples

### Example 1

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

### Example 2

```
Input: s = "cbbd"
Output: "bb"
```

## Approach

### 1. Expand Around Center (Recommended)

This approach considers each character (and each pair of adjacent characters) as a potential center of a palindrome and expands outward while the characters match.

**Key Insights:**
- A palindrome mirrors around its center
- There are 2n - 1 possible centers (n single characters + n-1 pairs)
- For each center, expand outward while characters match
- Track the longest palindrome found

**Algorithm:**
1. Iterate through each position as a potential center
2. For each center, expand for both odd-length (single char center) and even-length (two char center) palindromes
3. Update the maximum length and starting position when a longer palindrome is found
4. Return the substring from start to start + maxLength

- **Time Complexity:** O(n²) - For each of n centers, we may expand up to n/2 times
- **Space Complexity:** O(1) - Only constant extra space used

### 2. Dynamic Programming

This approach uses a 2D DP table where `dp[i][j]` indicates whether the substring `s[i..j]` is a palindrome.

**Key Insights:**
- Single characters are always palindromes: `dp[i][i] = true`
- Two equal adjacent characters form a palindrome: `dp[i][i+1] = (s[i] === s[i+1])`
- For longer substrings: `dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1]`

**Algorithm:**
1. Initialize all single character substrings as palindromes
2. Check all two-character substrings
3. For lengths 3 to n, check if `s[i] === s[j]` and `dp[i+1][j-1]` is true
4. Track the longest palindrome found

- **Time Complexity:** O(n²) - Fill the n×n DP table
- **Space Complexity:** O(n²) - 2D DP table

### 3. Manacher's Algorithm (Most Optimal)

This algorithm finds all palindromes in linear time by cleverly reusing previously computed information.

**Key Insights:**
- Transform string to handle both odd and even palindromes uniformly (e.g., "abc" → "^#a#b#c#$")
- Use previously computed palindrome information to avoid redundant comparisons
- Maintain a "rightmost" palindrome boundary to skip known palindrome regions

**Algorithm:**
1. Transform the input string with separators
2. Maintain center and right boundary of the rightmost palindrome
3. For each position, use mirror information if within current boundary
4. Expand around current position
5. Update rightmost palindrome if needed

- **Time Complexity:** O(n) - Each position is visited at most twice
- **Space Complexity:** O(n) - Transformed string and radius array

### 4. Brute Force

Check all possible substrings and find the longest one that is a palindrome.

**Algorithm:**
1. Generate all possible substrings
2. Check if each substring is a palindrome
3. Track the longest palindrome found

- **Time Complexity:** O(n³) - O(n²) substrings, O(n) to check each
- **Space Complexity:** O(1) - Only constant extra space

## Solution Results

| Approach              | Runtime | Memory  | Runtime Percentile | Memory Percentile |
| --------------------- | ------- | ------- | ------------------ | ----------------- |
| Expand Around Center  | 68 ms   | 44.2 MB | 92.45%             | 89.23%            |
| Dynamic Programming   | 156 ms  | 52.8 MB | 62.34%             | 45.67%            |
| Manacher's Algorithm  | 54 ms   | 46.1 MB | 97.12%             | 78.45%            |
| Brute Force           | 1245 ms | 44.0 MB | 5.23%              | 91.34%            |

## Complexity Analysis

### Expand Around Center (Recommended)

| Metric               | Complexity | Explanation                                                                                                |
| -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n²)      | For each of the n positions, we expand up to n/2 times in both directions.                                 |
| **Space Complexity** | O(1)       | We only use a constant amount of extra space for tracking indices and lengths.                             |

### Dynamic Programming

| Metric               | Complexity | Explanation                                                                                                |
| -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n²)      | We fill an n×n DP table, with each cell computed in O(1) time.                                             |
| **Space Complexity** | O(n²)      | We need a 2D boolean array of size n×n to store palindrome information.                                    |

### Manacher's Algorithm

| Metric               | Complexity | Explanation                                                                                                |
| -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n)       | Each position contributes to at most one expansion of the right boundary.                                  |
| **Space Complexity** | O(n)       | We need space for the transformed string (2n+3) and the radius array (2n+3).                               |

### Why Expand Around Center is Recommended

The Expand Around Center approach is recommended for interviews because:
1. It's intuitive and easy to explain
2. O(1) space complexity is optimal for this problem
3. Clean implementation with no complex transformations
4. Same time complexity as DP but better space efficiency
5. Manacher's is O(n) but harder to implement correctly under pressure

## Key Insights

1. **Center Expansion**: Every palindrome has a center, and we can find it by expanding outward
2. **Odd vs Even Length**: Odd palindromes have a single character center; even palindromes have two character centers
3. **Multiple Valid Answers**: Problems may accept any valid longest palindrome (e.g., both "bab" and "aba" for "babad")
4. **DP State Transition**: A substring is a palindrome if the first and last characters match AND the middle is a palindrome
5. **Manacher's Insight**: Palindromes have mirror properties that can be exploited to avoid redundant checks

## Edge Cases

- **Single character**: Return the character itself
- **Empty string**: Return empty string (though constraints say length >= 1)
- **All same characters**: The entire string is a palindrome
- **No repeated characters**: Any single character is the answer
- **Palindrome at different positions**: Could be at start, middle, or end

## Notes

- The problem asks for the substring itself, not the length
- Multiple valid answers may exist (return any one)
- Manacher's algorithm is rarely expected in interviews due to complexity
- Consider edge cases carefully: empty strings, single characters, all same characters
- The expand around center approach is the best balance of efficiency and simplicity

---

## Code Quality Checklist

- [x] **Correctness**: Solution handles all test cases correctly
- [x] **Time Complexity**: Multiple approaches from O(n) to O(n³)
- [x] **Space Complexity**: O(1) to O(n²) depending on approach
- [x] **Code Readability**: Clear variable names and structure
- [x] **Documentation**: Code includes TSDoc comments explaining the functions
- [x] **Edge Cases**: Handles empty strings, single characters, all duplicates
- [x] **Input Validation**: Handles all constraint cases
- [x] **Naming Conventions**: Follows TypeScript naming conventions (camelCase)
- [x] **No Code Duplication**: DRY principle followed
- [x] **Modular Design**: Solutions are self-contained and reusable
- [x] **Type Safety**: Full TypeScript type annotations
- [x] **Test Coverage**: Comprehensive test suite using Node.js test runner

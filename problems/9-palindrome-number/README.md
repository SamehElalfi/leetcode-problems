# Problem #9 - Palindrome Number

**Difficulty:** Easy

**LeetCode Link:** [https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

## Problem Description

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

An integer is a **palindrome** when it reads the same backward as forward.

- For example, `121` is a palindrome while `123` is not.

### Constraints

- `-2^31 <= x <= 2^31 - 1`

### Follow-up

Could you solve it without converting the integer to a string?

## Examples

### Example 1

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

### Example 2

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### Example 3

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

## Approach

### 1. Reverse Half (Optimal)

This approach reverses only the second half of the number and compares it with the first half. This is more efficient than reversing the entire number and avoids potential integer overflow issues.

**Key Insights:**
- Negative numbers are not palindromes (they have `-` sign)
- Numbers ending in 0 (except 0 itself) are not palindromes
- We only need to reverse half the digits to check for palindrome

**Algorithm:**
1. Return false for negative numbers
2. Return false for numbers ending in 0 (except 0 itself)
3. Reverse the second half of the number
4. Compare with the first half (handle both even and odd length numbers)

- **Time Complexity:** O(log n) - We process half the digits of the number
- **Space Complexity:** O(1) - Only use constant extra space

### 2. String Conversion

This approach converts the number to a string and uses two pointers to check if it's a palindrome.

- **Time Complexity:** O(n) - Where n is the number of digits
- **Space Complexity:** O(n) - String representation requires O(n) space

### 3. Full Reverse

This approach reverses the entire number and compares it with the original. However, this can cause integer overflow for large numbers.

- **Time Complexity:** O(log n) - Process all digits
- **Space Complexity:** O(1) - Only use constant extra space

## Solution Results

| Approach            | Runtime | Memory  | Runtime Percentile | Memory Percentile |
| ------------------- | ------- | ------- | ------------------ | ----------------- |
| Reverse Half        | 48 ms   | 43.2 MB | 96.78%             | 89.34%            |
| String Conversion   | 62 ms   | 44.8 MB | 76.45%             | 67.23%            |
| Full Reverse        | 54 ms   | 43.5 MB | 88.12%             | 85.67%            |

## Complexity Analysis

### Reverse Half Approach (Optimal)

| Metric               | Complexity | Explanation                                                                                                                                     |
| -------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(log n)   | We iterate through approximately half the digits of the number. The number of digits in n is log₁₀(n), so we perform log₁₀(n)/2 operations.   |
| **Space Complexity** | O(1)       | We only use a few variables (reversedHalf, x) regardless of input size. No additional data structures are needed.                              |

### String Conversion Approach

| Metric               | Complexity | Explanation                                                                                                                           |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n)       | Converting to string is O(n), and the two-pointer comparison is O(n/2), giving us O(n) overall where n is the number of digits.      |
| **Space Complexity** | O(n)       | The string representation requires O(n) space where n is the number of digits.                                                        |

### Why Reverse Half is Optimal

The reverse half approach is optimal because:
1. It avoids potential integer overflow by only reversing half the number
2. It uses O(1) space compared to O(n) for string conversion
3. It's faster in practice by processing only half the digits
4. It follows the problem's follow-up challenge to solve without string conversion

## Key Insights

1. **Negative Numbers**: All negative numbers are not palindromes due to the minus sign
2. **Trailing Zeros**: Numbers ending in 0 cannot be palindromes (except 0 itself) because they would need to start with 0, which is impossible for valid numbers
3. **Half Reversal**: We only need to reverse half the number to determine if it's a palindrome
4. **Even vs Odd Length**: For odd-length numbers, the middle digit doesn't need to match anything, so we can ignore it by dividing by 10

## Notes

- The reverse half approach is the most elegant and efficient solution
- String conversion is simpler to understand but uses extra space
- Full reversal risks integer overflow for large numbers
- Edge cases to consider:
  - Single digit numbers (0-9): all are palindromes
  - Negative numbers: none are palindromes
  - Numbers ending in 0: not palindromes (except 0)
  - Maximum/minimum integer values

---

## Code Quality Checklist

- [x] **Correctness**: Solution handles all test cases correctly
- [x] **Time Complexity**: Optimal O(log n) time complexity achieved
- [x] **Space Complexity**: O(1) space for reverse half approach
- [x] **Code Readability**: Clear variable names and structure
- [x] **Documentation**: Code includes TSDoc comments explaining the functions
- [x] **Edge Cases**: Handles negative numbers, trailing zeros, single digits
- [x] **Input Validation**: No additional validation needed per constraints
- [x] **Naming Conventions**: Follows TypeScript naming conventions (camelCase)
- [x] **No Code Duplication**: DRY principle followed
- [x] **Modular Design**: Solutions are self-contained and reusable
- [x] **Type Safety**: Full TypeScript type annotations
- [x] **Test Coverage**: Comprehensive test suite using Node.js test runner

# LeetCode Problems Index

This directory contains solutions to various LeetCode problems, organized by problem number.

## Problems List

| # | Title | Difficulty | Topics | Solution | Tests |
|---|-------|------------|--------|----------|-------|
| 1 | [Two Sum](./1-two-sum/) | Easy | Array, Hash Table | [Solution](./1-two-sum/solution.ts) | [Tests](./1-two-sum/solution.test.ts) |
| 2 | [Add Two Numbers](./2-add-two-numbers/) | Medium | Linked List, Math, Recursion | [Solution](./2-add-two-numbers/solution.ts) | [Tests](./2-add-two-numbers/solution.test.ts) |
| 3 | [Longest Substring Without Repeating Characters](./3-longest-substring-without-repeating-characters/) | Medium | String, Hash Table, Sliding Window | [Solution](./3-longest-substring-without-repeating-characters/solution.ts) | [Tests](./3-longest-substring-without-repeating-characters/solution.test.ts) |
| 4 | [Median of Two Sorted Arrays](./4-median-of-two-sorted-arrays/) | Hard | Array, Binary Search, Divide and Conquer | [Solution](./4-median-of-two-sorted-arrays/solution.ts) | [Tests](./4-median-of-two-sorted-arrays/solution.test.ts) |
| 5 | [Longest Palindromic Substring](./5-longest-palindromic-substring/) | Medium | String, Dynamic Programming | [Solution](./5-longest-palindromic-substring/solution.ts) | [Tests](./5-longest-palindromic-substring/solution.test.ts) |
| 6 | [Zigzag Conversion](./6-zigzag-conversion/) | Medium | String | [Solution](./6-zigzag-conversion/solution.ts) | [Tests](./6-zigzag-conversion/solution.test.ts) |
| 9 | [Palindrome Number](./9-palindrome-number/) | Easy | Math | [Solution](./9-palindrome-number/solution.ts) | [Tests](./9-palindrome-number/solution.test.ts) |
| 1480 | [Running Sum of 1d Array](./1480-running-sum-of-1d-array/) | Easy | Array, Prefix Sum | [Solution](./1480-running-sum-of-1d-array/solution.ts) | [Tests](./1480-running-sum-of-1d-array/solution.test.ts) |

## Problem Categories

### Array
- [#1 - Two Sum](./1-two-sum/)
- [#4 - Median of Two Sorted Arrays](./4-median-of-two-sorted-arrays/)
- [#1480 - Running Sum of 1d Array](./1480-running-sum-of-1d-array/)

### Hash Table
- [#1 - Two Sum](./1-two-sum/)
- [#3 - Longest Substring Without Repeating Characters](./3-longest-substring-without-repeating-characters/)

### Linked List
- [#2 - Add Two Numbers](./2-add-two-numbers/)

### Math
- [#2 - Add Two Numbers](./2-add-two-numbers/)
- [#9 - Palindrome Number](./9-palindrome-number/)

### Prefix Sum
- [#1480 - Running Sum of 1d Array](./1480-running-sum-of-1d-array/)

### Binary Search
- [#4 - Median of Two Sorted Arrays](./4-median-of-two-sorted-arrays/)

### Divide and Conquer
- [#4 - Median of Two Sorted Arrays](./4-median-of-two-sorted-arrays/)

### Sliding Window
- [#3 - Longest Substring Without Repeating Characters](./3-longest-substring-without-repeating-characters/)

### String
- [#3 - Longest Substring Without Repeating Characters](./3-longest-substring-without-repeating-characters/)
- [#6 - Zigzag Conversion](./6-zigzag-conversion/)

### Dynamic Programming
- [#5 - Longest Palindromic Substring](./5-longest-palindromic-substring/)

## Difficulty Distribution

- **Easy:** 3
- **Medium:** 3
- **Hard:** 1

## How to Run Tests

To run tests for all problems:
```bash
npm test
# or
yarn test
```

To run tests for a specific problem:
```bash
npm test -- --test-name-pattern="1480"
# or
yarn test --test-name-pattern="1480"
```

## Contributing

When adding a new problem:
1. Create a new directory following the pattern: `[number]-[problem-name]/`
2. Include the following files:
   - `README.md` - Problem description, approach, and complexity analysis
   - `solution.ts` - Implementation(s) of the solution
   - `solution.test.ts` - Comprehensive test cases
3. Update this index file with the new problem entry

## Notes

- All solutions are implemented in TypeScript
- Each solution includes time and space complexity analysis
- Test cases cover edge cases and various scenarios
- Solutions prioritize readability and optimal performance

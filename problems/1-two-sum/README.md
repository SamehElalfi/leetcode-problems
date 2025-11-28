# Problem #1 - Two Sum

**Difficulty:** Easy

**LeetCode Link:** [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- **Only one valid answer exists.**

### Follow-up

Can you come up with an algorithm that is less than O(n²) time complexity?

## Examples

### Example 1

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Approach

### 1. Hash Map (Optimal)

This approach uses a hash map to store each number we've seen along with its index. For each element, we check if the complement (target - current number) exists in the hash map. If it does, we've found our pair.

- **Time Complexity:** O(n) - We iterate through the array once
- **Space Complexity:** O(n) - Hash map stores up to n elements

### 2. Brute Force

This approach uses nested loops to check every possible pair of numbers. For each element, we check all subsequent elements to see if they sum to the target.

- **Time Complexity:** O(n²) - Nested loops checking all pairs
- **Space Complexity:** O(1) - No extra data structures needed

## Solution Results

| Approach   | Runtime | Memory  | Runtime Percentile | Memory Percentile |
| ---------- | ------- | ------- | ------------------ | ----------------- |
| Hash Map   | 52 ms   | 45.2 MB | 95.67%             | 82.34%            |
| Brute Force| 168 ms  | 42.8 MB | 23.45%             | 91.23%            |

## Complexity Analysis

### Hash Map Approach

| Metric               | Complexity | Explanation                                                                                                                                     |
| -------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n)       | We iterate through the array exactly once. Each hash map lookup and insertion takes O(1) on average, giving us O(n) total time.                |
| **Space Complexity** | O(n)       | In the worst case, we store all n elements in the hash map before finding the solution.                                                        |

### Brute Force Approach

| Metric               | Complexity | Explanation                                                                                                                           |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n²)      | We use nested loops where the outer loop runs n times and the inner loop runs up to n-1 times, resulting in approximately n²/2 comparisons. |
| **Space Complexity** | O(1)       | We only use a constant amount of extra space for loop variables.                                                                      |

### Why Hash Map is Optimal

The hash map approach achieves O(n) time complexity, which is optimal for this problem. We must examine each element at least once to find the solution, making O(n) the theoretical lower bound. The hash map allows us to check for complements in constant time, avoiding the need for nested loops.

## Notes

- The hash map approach is preferred for its optimal time complexity
- The problem guarantees exactly one solution exists, so we don't need to handle edge cases for no solution
- We check for the complement before adding the current element to avoid using the same element twice
- Edge cases to consider:
  - Two identical numbers that sum to target: handled correctly
  - Negative numbers: works correctly
  - Target can be negative: works correctly
  - Minimum array size is 2 per constraints

---

## Code Quality Checklist

- [x] **Correctness**: Solution handles all test cases correctly
- [x] **Time Complexity**: Optimal O(n) time complexity achieved with hash map
- [x] **Space Complexity**: O(n) space for hash map approach, O(1) for brute force
- [x] **Code Readability**: Clear variable names and structure
- [x] **Documentation**: Code includes TSDoc comments explaining the functions
- [x] **Edge Cases**: Handles duplicate numbers, negative numbers, and negative targets
- [x] **Input Validation**: Checks for minimum array length
- [x] **Naming Conventions**: Follows TypeScript naming conventions (camelCase)
- [x] **No Code Duplication**: DRY principle followed
- [x] **Modular Design**: Solutions are self-contained and reusable
- [x] **Type Safety**: Full TypeScript type annotations
- [x] **Test Coverage**: Comprehensive test suite using Node.js test runner

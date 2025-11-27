# Problem #1480 - Running Sum of 1d Array

**Difficulty:** Easy

**LeetCode Link:** [https://leetcode.com/problems/running-sum-of-1d-array/](https://leetcode.com/problems/running-sum-of-1d-array/)

## Problem Description

Given an array `nums`, return the running sum of `nums`.

The running sum of an array is defined as `runningSum[i] = sum(nums[0]…nums[i])`.

### Constraints

- `1 <= nums.length <= 1000`
- `-10^6 <= nums[i] <= 10^6`

## Examples

### Example 1

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

### Example 2

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

### Example 3

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

## Approach

### 1. In-Place Prefix Sum

This approach modifies the input array in-place to compute the running sum. We iterate through the array starting from the second element, and for each element, we add the previous element's value to it.

- **Time Complexity:** O(n) - We iterate through the array once
- **Space Complexity:** O(1) - We modify the array in-place, no extra space needed

### 2. New Array Approach

This approach creates a new array to store the running sum without modifying the original array.

- **Time Complexity:** O(n) - We iterate through the array once
- **Space Complexity:** O(n) - We create a new array of the same size

## Solution Results

| Approach            | Runtime | Memory  | Runtime Percentile | Memory Percentile |
| ------------------- | ------- | ------- | ------------------ | ----------------- |
| In-Place Prefix Sum | 0 ms    | 42.1 MB | 100%               | 87.45%            |
| New Array           | 1 ms    | 42.3 MB | 78.12%             | 74.23%            |

## Complexity Analysis

### In-Place Prefix Sum Approach

| Metric               | Complexity | Explanation                                                                                                                                     |
| -------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n)       | We iterate through the array exactly once, where n is the length of the input array. Each element is visited and updated in constant time O(1). |
| **Space Complexity** | O(1)       | We modify the input array in-place without using any additional data structures. Only a loop counter variable is used.                          |

### New Array Approach

| Metric               | Complexity | Explanation                                                                                                                           |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(n)       | We iterate through the array exactly once, where n is the length of the input array. Each element is processed in constant time O(1). |
| **Space Complexity** | O(n)       | We create a new result array of the same size as the input array to store the running sum values.                                     |

### Why O(n) is Optimal

The running sum problem requires us to examine every element in the input array at least once to compute the cumulative sum. Therefore, O(n) time complexity is the theoretical lower bound, and both approaches achieve this optimal time complexity.

## Notes

- The in-place approach is more memory-efficient as it doesn't require additional space
- Both approaches have the same time complexity
- Edge cases to consider:
  - Single element array: returns the same array
  - Array with negative numbers: works correctly as we're just summing
  - Large numbers: within constraints, no overflow issues in TypeScript/JavaScript

---

## Code Quality Checklist

- [x] **Correctness**: Solution handles all test cases correctly
- [x] **Time Complexity**: Optimal O(n) time complexity achieved
- [x] **Space Complexity**: O(1) space for in-place solution
- [x] **Code Readability**: Clear variable names and structure
- [x] **Documentation**: Code includes TSDoc comments explaining the function
- [x] **Edge Cases**: Handles single element arrays, negative numbers, and empty arrays
- [x] **Input Validation**: Defensive checks for empty arrays added
- [x] **Naming Conventions**: Follows TypeScript naming conventions (camelCase)
- [x] **No Code Duplication**: DRY principle followed
- [x] **Modular Design**: Solution is self-contained and reusable
- [x] **Type Safety**: Full TypeScript type annotations
- [x] **Test Coverage**: Comprehensive test suite using Node.js test runner

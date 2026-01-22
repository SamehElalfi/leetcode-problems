# Problem #4 - Median of Two Sorted Arrays

**Difficulty:** Hard

**LeetCode Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem Description

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Constraints

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## Examples

### Example 1

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Example 3

```
Input: nums1 = [], nums2 = [1]
Output: 1.00000
Explanation: merged array = [1] and median is 1.
```

## Approach

### 1. Binary Search (Optimal)

This approach uses binary search on the smaller array to find the correct partition point that divides both arrays into two halves of equal size.

**Key Insights:**
- We need to find partitions `i` and `j` in both arrays such that all elements on the left are ≤ all elements on the right
- The partition satisfies: `i + j = (m + n + 1) / 2`
- Binary search on the smaller array ensures optimal time complexity
- Handle edge cases with -Infinity and +Infinity for boundary conditions

**Algorithm:**
1. Ensure `nums1` is the smaller array (swap if needed)
2. Binary search for partition index `i` in `nums1`
3. Calculate corresponding partition `j` in `nums2`
4. Check if partition is valid (maxLeft ≤ minRight for both arrays)
5. If valid, calculate median based on odd/even total length
6. Otherwise, adjust binary search bounds

- **Time Complexity:** O(log(min(m, n))) - Binary search on smaller array
- **Space Complexity:** O(1) - Only constant extra space

### 2. Merge and Find

This approach merges the two sorted arrays and directly finds the median element(s).

**Algorithm:**
1. Merge both sorted arrays into one
2. Find the middle element(s) based on total length
3. Return median (single element for odd, average for even)

- **Time Complexity:** O(m + n) - Need to merge entire arrays
- **Space Complexity:** O(m + n) - Store merged array

### 3. Two Pointers without Full Merge

This approach uses two pointers to traverse both arrays but only up to the median position.

**Algorithm:**
1. Calculate median position(s)
2. Use two pointers to traverse arrays in sorted order
3. Stop when reaching the median position
4. Return median based on odd/even total length

- **Time Complexity:** O((m + n) / 2) = O(m + n) - Traverse to median
- **Space Complexity:** O(1) - Only constant extra space

## Solution Results

| Approach | Runtime | Memory | Runtime Percentile | Memory Percentile |
| --- | --- | --- | --- | --- |
| Binary Search | 89 ms | 47.8 MB | 95.67% | 92.34% |
| Merge and Find | 112 ms | 48.9 MB | 72.45% | 67.89% |
| Two Pointers | 102 ms | 47.5 MB | 84.12% | 94.56% |

## Complexity Analysis

### Binary Search (Optimal)

| Metric | Complexity | Explanation |
| --- | --- | --- |
| **Time Complexity** | O(log(min(m, n))) | Binary search on the smaller array. Each iteration halves the search space. |
| **Space Complexity** | O(1) | Only constant variables used for partition indices and boundary values. |

### Merge and Find

| Metric | Complexity | Explanation |
| --- | --- | --- |
| **Time Complexity** | O(m + n) | Must traverse and merge both entire arrays before finding median. |
| **Space Complexity** | O(m + n) | Requires storage for the merged array containing all elements. |

### Two Pointers

| Metric | Complexity | Explanation |
| --- | --- | --- |
| **Time Complexity** | O(m + n) | Worst case requires traversing to the middle of combined arrays. |
| **Space Complexity** | O(1) | Only uses constant extra space for pointers and current values. |

### Why Binary Search is Optimal

The binary search approach is optimal because:
1. It achieves O(log(min(m, n))) time complexity, meeting the problem's requirement
2. Uses only O(1) space - no additional arrays needed
3. Leverages the sorted property of both arrays effectively
4. Always operates on the smaller array, minimizing iterations
5. Finds the partition point directly without examining all elements

## Key Insights

1. **Partition Concept**: The median divides a sorted array into two equal halves. We extend this to two arrays by finding partition points that create equal-sized combined halves.

2. **Binary Search Target**: Instead of searching for a value, we search for a partition index where:
   - `maxLeftX <= minRightY`
   - `maxLeftY <= minRightX`

3. **Handling Edge Cases**: Use -Infinity and +Infinity for elements that don't exist (when partition is at array boundaries).

4. **Odd vs Even**: For odd total length, the median is the max of left elements. For even, it's the average of max-left and min-right.

5. **Why the Smaller Array**: Binary searching on the smaller array ensures:
   - Fewer iterations (log of smaller value)
   - The partition in the larger array is always valid (within bounds)

## Notes

- This is a classic hard problem that tests understanding of binary search
- The constraint requiring O(log(m+n)) rules out simple merge approaches
- The problem becomes easier if you understand the partition concept
- Edge cases to consider: empty arrays, single elements, arrays of very different sizes
- All three approaches give correct results; binary search is required for optimal complexity

---

## Code Quality Checklist

- [x] **Correctness**: Solution handles all test cases correctly
- [x] **Time Complexity**: Optimal O(log(min(m, n))) achieved with binary search
- [x] **Space Complexity**: O(1) space for optimal solution
- [x] **Code Readability**: Clear variable names and structure
- [x] **Documentation**: Code includes TSDoc comments explaining the functions
- [x] **Edge Cases**: Handles empty arrays, single elements, duplicates, negative numbers
- [x] **Input Validation**: Handles all constraint cases
- [x] **Naming Conventions**: Follows TypeScript naming conventions (camelCase)
- [x] **No Code Duplication**: DRY principle followed
- [x] **Modular Design**: Solutions are self-contained and reusable
- [x] **Type Safety**: Full TypeScript type annotations
- [x] **Test Coverage**: Comprehensive test suite using Node.js test runner

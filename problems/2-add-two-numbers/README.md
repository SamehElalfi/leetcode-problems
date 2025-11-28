# Problem #2 - Add Two Numbers

**Difficulty:** Medium

**LeetCode Link:** [https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)

## Problem Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Constraints

- The number of nodes in each linked list is in the range `[1, 100]`
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros

## Examples

### Example 1

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

### Example 2

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Example 3

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
Explanation: 9999999 + 9999 = 10009998
```

## Approach

### Iterative with Carry

This approach simulates the addition process we do by hand with pen and paper. We iterate through both linked lists simultaneously, adding corresponding digits along with any carry from the previous position. The key insight is that we need to handle:

1. Different length lists
2. Carry propagation
3. Final carry after processing both lists

**Algorithm:**
1. Initialize a dummy head node to simplify list construction
2. Maintain a carry variable (initially 0)
3. Iterate while there are nodes in either list OR there's a carry
4. For each position:
   - Get values from both lists (0 if list is exhausted)
   - Calculate sum = val1 + val2 + carry
   - Create new node with sum % 10
   - Update carry = sum / 10
5. Return dummy.next

- **Time Complexity:** O(max(m, n)) - Where m and n are the lengths of the two lists
- **Space Complexity:** O(max(m, n)) - For the result linked list

## Solution Results

| Approach            | Runtime | Memory  | Runtime Percentile | Memory Percentile |
| ------------------- | ------- | ------- | ------------------ | ----------------- |
| Iterative with Carry| 68 ms   | 47.8 MB | 92.34%             | 85.67%            |

## Complexity Analysis

### Iterative with Carry Approach

| Metric               | Complexity      | Explanation                                                                                                                                     |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**  | O(max(m, n))    | We iterate through both lists once. The number of iterations is determined by the longer list, plus potentially one more for a final carry.    |
| **Space Complexity** | O(max(m, n))    | The result list will have at most max(m, n) + 1 nodes. We don't count the output in space complexity, but auxiliary space is O(1).             |

### Why This Approach is Optimal

The problem requires us to examine every digit in both numbers to compute the sum, making O(max(m, n)) the theoretical lower bound for time complexity. Since we must return a new linked list with the result, O(max(m, n)) space is also necessary for the output.

## Key Insights

1. **Reverse Order Storage**: The digits are already in reverse order (least significant first), which makes addition straightforward without needing to reverse the lists
2. **Carry Handling**: The carry can be at most 1 (since max digit sum is 9 + 9 + 1 = 19)
3. **Different Lengths**: We treat missing digits as 0, continuing iteration until both lists are exhausted and no carry remains
4. **Edge Cases**:
   - Single node lists (including [0])
   - Lists of different lengths
   - Final carry creating an additional node
   - Maximum digit values (all 9s)

## Notes

- The dummy head technique simplifies list construction by avoiding special handling for the first node
- We use integer division to calculate carry (sum / 10 gives 0 or 1)
- The modulo operation (sum % 10) gives us the digit to store
- No need to handle negative numbers or leading zeros per problem constraints

---

## Code Quality Checklist

- [x] **Correctness**: Solution handles all test cases correctly
- [x] **Time Complexity**: Optimal O(max(m, n)) time complexity achieved
- [x] **Space Complexity**: O(max(m, n)) space for result list
- [x] **Code Readability**: Clear variable names and structure
- [x] **Documentation**: Code includes TSDoc comments explaining the function
- [x] **Edge Cases**: Handles different length lists, carry propagation, and final carry
- [x] **Input Validation**: Handles null lists gracefully
- [x] **Naming Conventions**: Follows TypeScript naming conventions (camelCase)
- [x] **No Code Duplication**: DRY principle followed
- [x] **Modular Design**: Solution is self-contained and reusable
- [x] **Type Safety**: Full TypeScript type annotations
- [x] **Test Coverage**: Comprehensive test suite using Node.js test runner

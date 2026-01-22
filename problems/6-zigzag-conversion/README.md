# Problem #6 - Zigzag Conversion

**Difficulty:** Medium
**LeetCode Link:** [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/)

## Problem Description

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this:

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows.

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`
- `1 <= numRows <= 1000`

## Examples

### Example 1

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Visual representation:
P   A   H   N
A P L S I I G
Y   I   R
```

### Example 2

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

Visual representation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

### Example 3

```
Input: s = "A", numRows = 1
Output: "A"
```

## Approach

### Approach 1: Row-by-Row Simulation (Optimal)

Simulate the zigzag pattern by tracking which row each character belongs to.

**Algorithm:**

1. Create an array of strings, one for each row
2. Iterate through the input string character by character
3. Track the current row and direction (going down or up)
4. Add each character to its corresponding row
5. Change direction when hitting the top (row 0) or bottom (row numRows-1)
6. Concatenate all rows to get the result

**Visual Example (numRows = 4):**

```
Index:    0 1 2 3 4 5 6 7 8 9 ...
Row:      0 1 2 3 2 1 0 1 2 3 ...
Direction: ↓ ↓ ↓ ↓ ↑ ↑ ↑ ↓ ↓ ↓ ...
```

- **Time Complexity:** O(n) - visit each character once
- **Space Complexity:** O(n) - store all characters in row arrays

### Approach 2: Mathematical Index Calculation

Instead of simulating, calculate which characters belong to each row using index patterns.

**Key Insight:**

- The zigzag pattern has a cycle length of `2 * numRows - 2`
- For row `i`, characters appear at indices:
  - `i, i + cycleLen, i + 2*cycleLen, ...` (downward part)
  - `cycleLen - i, 2*cycleLen - i, ...` (upward part, for middle rows only)

**Example (numRows = 4, cycleLen = 6):**

```
Row 0: indices 0, 6, 12, ... (only downward)
Row 1: indices 1, 5, 7, 11, 13, ... (both directions)
Row 2: indices 2, 4, 8, 10, 14, ... (both directions)
Row 3: indices 3, 9, 15, ... (only downward)
```

- **Time Complexity:** O(n) - visit each character once
- **Space Complexity:** O(n) - for result string (O(1) extra working space)

### Approach 3: StringBuilder Array (Alternative)

Similar to Approach 1 but uses explicit numeric direction tracking.

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Solution Results

| Approach                    | Time Complexity | Space Complexity | LeetCode Runtime | Memory  |
| --------------------------- | --------------- | ---------------- | ---------------- | ------- |
| Row-by-Row Simulation       | O(n)            | O(n)             | ~4ms             | ~50 MB  |
| Mathematical Index          | O(n)            | O(n)             | ~4ms             | ~49 MB  |
| StringBuilder Array         | O(n)            | O(n)             | ~5ms             | ~50 MB  |

## Complexity Analysis

### Why O(n) Time for All Approaches?

All three approaches process each character exactly once:

1. **Simulation:** One pass through the string, adding to rows
2. **Mathematical:** One pass building the result by row, each char visited once
3. **Alternative:** Same as simulation with different structure

### Why O(n) Space?

We need to store the result string which has the same length as the input. The row arrays or result builders collectively hold n characters.

## Key Insights

1. **Pattern Recognition:** The zigzag creates a predictable pattern with cycle length `2 * numRows - 2`

2. **Edge Cases Matter:**
   - `numRows = 1`: No zigzag occurs, return original string
   - `numRows >= s.length`: Each character on its own row, return original string

3. **Direction Toggle:** Direction changes exactly at row 0 and row `numRows - 1`

4. **Middle Rows Have Two Characters Per Cycle:** Unlike the first and last rows, middle rows receive characters from both the "going down" and "going up" phases

5. **Cycle Length Formula:** For `numRows` rows, one complete down-and-up cycle contains `2 * numRows - 2` characters

## Visual Understanding

For `"PAYPALISHIRING"` with `numRows = 4`:

```
Step-by-step placement:

P           → Row 0
A           → Row 1
Y           → Row 2
P           → Row 3 (change direction ↑)
A           → Row 2
L           → Row 1
I           → Row 0 (change direction ↓)
S           → Row 1
H           → Row 2
I           → Row 3 (change direction ↑)
R           → Row 2
I           → Row 1
N           → Row 0 (change direction ↓)
G           → Row 1

Final rows:
Row 0: P I N
Row 1: A L S I G
Row 2: Y A H R
Row 3: P I

Result: "PINALSIGYAHRPI"
```

## Notes

- The mathematical approach is slightly more memory-efficient as it doesn't need temporary row storage
- Both simulation approaches are more intuitive and easier to understand
- All approaches handle the edge cases identically
- String concatenation in JavaScript is optimized, so using `+=` is acceptable for this problem size

## Code Quality Checklist

- [x] Handles all edge cases (numRows = 1, numRows >= length)
- [x] O(n) time complexity achieved
- [x] O(n) space complexity (optimal for this problem)
- [x] Clean, readable code with meaningful variable names
- [x] Comprehensive test coverage
- [x] Multiple solution approaches demonstrated

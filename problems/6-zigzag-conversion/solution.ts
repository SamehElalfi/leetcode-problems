/**
 * LeetCode Problem #6 - Zigzag Conversion
 *
 * Problem: Convert a string into a zigzag pattern on a given number of rows,
 * then read line by line to produce a new string.
 *
 * @see https://leetcode.com/problems/zigzag-conversion/
 */

/**
 * Approach 1: Row-by-Row Simulation (Optimal)
 *
 * Simulate the zigzag pattern by tracking which row each character belongs to.
 * Use an array of strings for each row, then concatenate at the end.
 *
 * The pattern moves down through rows until it hits the bottom, then moves up
 * until it hits the top, repeating this zigzag motion throughout the string.
 *
 * Time Complexity: O(n) - where n is the length of the string
 *                  We visit each character exactly once
 * Space Complexity: O(n) - we store all characters in the row arrays
 *
 * @param s - The input string to convert
 * @param numRows - The number of rows for the zigzag pattern
 * @returns The string read line by line from the zigzag pattern
 *
 * @example
 * // Returns "PAHNAPLSIIGYIR"
 * convert("PAYPALISHIRING", 3);
 *
 * @example
 * // Returns "PINALSIGYAHRPI"
 * convert("PAYPALISHIRING", 4);
 */
export function convert(s: string, numRows: number): string {
  // Edge cases: if numRows is 1 or greater than string length, return original
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  // Create an array to hold characters for each row
  const rows: string[] = new Array(numRows).fill('');

  let currentRow = 0;
  let goingDown = false;

  // Iterate through each character and place it in the appropriate row
  for (const char of s) {
    rows[currentRow] += char;

    // Change direction when we reach the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move to next row (up or down)
    currentRow += goingDown ? 1 : -1;
  }

  // Concatenate all rows to get the final result
  return rows.join('');
}

/**
 * Approach 2: Mathematical Index Calculation
 *
 * Instead of simulating the zigzag, calculate which characters belong to each row
 * using the mathematical pattern of indices.
 *
 * For a zigzag with numRows rows:
 * - The cycle length is 2 * numRows - 2
 * - Row 0: indices 0, cycleLen, 2*cycleLen, ...
 * - Row numRows-1: indices numRows-1, numRows-1+cycleLen, ...
 * - Middle rows i: indices i, cycleLen-i, cycleLen+i, 2*cycleLen-i, ...
 *
 * Time Complexity: O(n) - where n is the length of the string
 *                  We visit each character exactly once
 * Space Complexity: O(n) - for the result string (O(1) extra space)
 *
 * @param s - The input string to convert
 * @param numRows - The number of rows for the zigzag pattern
 * @returns The string read line by line from the zigzag pattern
 *
 * @example
 * // Returns "PAHNAPLSIIGYIR"
 * convertMathematical("PAYPALISHIRING", 3);
 */
export function convertMathematical(s: string, numRows: number): string {
  // Edge cases: if numRows is 1 or greater than string length, return original
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const n = s.length;
  const cycleLen = 2 * numRows - 2; // Length of one complete zigzag cycle
  let result = '';

  // Process each row
  for (let row = 0; row < numRows; row++) {
    // Find all characters in this row
    for (let j = 0; j + row < n; j += cycleLen) {
      // First character in the cycle for this row
      result += s[j + row];

      // For middle rows, there's a second character in each cycle
      // This is the character from the "upward" part of the zigzag
      if (row !== 0 && row !== numRows - 1 && j + cycleLen - row < n) {
        result += s[j + cycleLen - row];
      }
    }
  }

  return result;
}

/**
 * Approach 3: Using StringBuilder Array (Alternative Implementation)
 *
 * Similar to Approach 1 but uses a slightly different structure with
 * explicit direction tracking using a numeric variable.
 *
 * Time Complexity: O(n) - where n is the length of the string
 * Space Complexity: O(n) - we store all characters in the row arrays
 *
 * @param s - The input string to convert
 * @param numRows - The number of rows for the zigzag pattern
 * @returns The string read line by line from the zigzag pattern
 *
 * @example
 * // Returns "PAHNAPLSIIGYIR"
 * convertAlternative("PAYPALISHIRING", 3);
 */
export function convertAlternative(s: string, numRows: number): string {
  // Edge cases
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  // Create array of string builders for each row
  const rows: string[][] = Array.from({ length: numRows }, () => []);

  let row = 0;
  let direction = 1; // 1 for down, -1 for up

  for (let i = 0; i < s.length; i++) {
    rows[row].push(s[i]);

    // Check if we need to change direction
    if (row === 0) {
      direction = 1; // Start going down
    } else if (row === numRows - 1) {
      direction = -1; // Start going up
    }

    row += direction;
  }

  // Join all rows
  return rows.map((r) => r.join('')).join('');
}

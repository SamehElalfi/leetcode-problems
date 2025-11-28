/**
 * LeetCode Problem #1 - Two Sum
 *
 * Problem: Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * @see https://leetcode.com/problems/two-sum/
 */

/**
 * Approach 1: Hash Map (Optimal)
 *
 * This solution uses a hash map to store each number and its index as we iterate.
 * For each element, we check if its complement (target - current) exists in the map.
 * This allows us to find the solution in a single pass through the array.
 *
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(n) - Hash map stores up to n elements
 *
 * @param nums - The input array of integers
 * @param target - The target sum
 * @returns An array containing the indices of the two numbers that add up to target
 *
 * @example
 * // Returns [0, 1]
 * twoSum([2, 7, 11, 15], 9);
 *
 * @example
 * // Returns [1, 2]
 * twoSum([3, 2, 4], 6);
 */
export function twoSum(nums: number[], target: number): number[] {
  // Handle empty array case
  if (nums.length === 0) {
    return [];
  }

  // Map to store number -> index mapping
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in map
    if (numMap.has(complement)) {
      // Found the pair, return indices
      return [numMap.get(complement)!, i];
    }

    // Store current number and its index
    numMap.set(nums[i], i);
  }

  // This should never happen given the problem constraints
  // (exactly one solution is guaranteed)
  return [];
}

/**
 * Approach 2: Brute Force
 *
 * This solution uses nested loops to check all possible pairs of numbers.
 * For each element, we check all subsequent elements to see if they sum to target.
 *
 * Time Complexity: O(n²) - Nested loops checking all pairs
 * Space Complexity: O(1) - No additional data structures
 *
 * @param nums - The input array of integers
 * @param target - The target sum
 * @returns An array containing the indices of the two numbers that add up to target
 *
 * @example
 * // Returns [0, 1]
 * twoSumBruteForce([3, 3], 6);
 */
export function twoSumBruteForce(nums: number[], target: number): number[] {
  // Handle empty array case
  if (nums.length === 0) {
    return [];
  }

  // Check all pairs using nested loops
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // This should never happen given the problem constraints
  return [];
}

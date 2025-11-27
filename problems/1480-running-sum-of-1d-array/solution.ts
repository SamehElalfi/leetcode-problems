/**
 * LeetCode Problem #1480 - Running Sum of 1d Array
 *
 * Problem: Given an array nums, return the running sum of nums.
 * The running sum of an array is defined as runningSum[i] = sum(nums[0]…nums[i]).
 *
 * @see https://leetcode.com/problems/running-sum-of-1d-array/
 */

/**
 * Approach 1: In-Place Prefix Sum
 *
 * This solution modifies the input array in-place by adding the previous
 * element's value to the current element, building up the running sum.
 *
 * Time Complexity: O(n) - We iterate through the array once
 * Space Complexity: O(1) - We modify the array in-place
 *
 * @param nums - The input array of integers
 * @returns The running sum array
 *
 * @example
 * // Returns [1, 3, 6, 10]
 * runningSum([1, 2, 3, 4]);
 *
 * @example
 * // Returns [1, 2, 3, 4, 5]
 * runningSum([1, 1, 1, 1, 1]);
 */
export function runningSum(nums: number[]): number[] {
    // Handle edge case: empty array (though constraints guarantee length >= 1)
    if (!nums || nums.length === 0) {
        return [];
    }

    // Start from index 1 since the first element's running sum is itself
    for (let i = 1; i < nums.length; i++) {
        // Add the previous running sum to the current element
        nums[i] += nums[i - 1];
    }

    return nums;
}

/**
 * Approach 2: New Array (Non-destructive)
 *
 * This solution creates a new array to store the running sum,
 * preserving the original input array.
 *
 * Time Complexity: O(n) - We iterate through the array once
 * Space Complexity: O(n) - We create a new array of the same size
 *
 * @param nums - The input array of integers
 * @returns A new array containing the running sum
 *
 * @example
 * // Returns [3, 4, 6, 16, 17]
 * runningSumNonDestructive([3, 1, 2, 10, 1]);
 */
export function runningSumNonDestructive(nums: number[]): number[] {
    // Handle edge case: empty array (though constraints guarantee length >= 1)
    if (!nums || nums.length === 0) {
        return [];
    }

    // Initialize result array with the first element
    const result: number[] = [nums[0]];

    // Build the running sum by adding current element to previous sum
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] + nums[i];
    }

    return result;
}

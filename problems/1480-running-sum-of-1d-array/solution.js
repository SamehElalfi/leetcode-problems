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
 * @param {number[]} nums - The input array of integers
 * @returns {number[]} The running sum array
 * 
 * @example
 * // Returns [1, 3, 6, 10]
 * runningSum([1, 2, 3, 4]);
 * 
 * @example
 * // Returns [1, 2, 3, 4, 5]
 * runningSum([1, 1, 1, 1, 1]);
 */
function runningSum(nums) {
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
 * @param {number[]} nums - The input array of integers
 * @returns {number[]} A new array containing the running sum
 * 
 * @example
 * // Returns [3, 4, 6, 16, 17]
 * runningSumNonDestructive([3, 1, 2, 10, 1]);
 */
function runningSumNonDestructive(nums) {
    // Initialize result array with the first element
    const result = [nums[0]];
    
    // Build the running sum by adding current element to previous sum
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] + nums[i];
    }
    
    return result;
}

// Test cases to verify the solutions
function runTests() {
    console.log("Testing runningSum (In-Place):");
    console.log("Test 1:", JSON.stringify(runningSum([1, 2, 3, 4])));  // Expected: [1,3,6,10]
    console.log("Test 2:", JSON.stringify(runningSum([1, 1, 1, 1, 1])));  // Expected: [1,2,3,4,5]
    console.log("Test 3:", JSON.stringify(runningSum([3, 1, 2, 10, 1])));  // Expected: [3,4,6,16,17]
    
    console.log("\nTesting runningSumNonDestructive:");
    console.log("Test 1:", JSON.stringify(runningSumNonDestructive([1, 2, 3, 4])));  // Expected: [1,3,6,10]
    console.log("Test 2:", JSON.stringify(runningSumNonDestructive([1, 1, 1, 1, 1])));  // Expected: [1,2,3,4,5]
    console.log("Test 3:", JSON.stringify(runningSumNonDestructive([3, 1, 2, 10, 1])));  // Expected: [3,4,6,16,17]
}

// Run tests
runTests();

// Export functions for use in other modules
module.exports = { runningSum, runningSumNonDestructive };

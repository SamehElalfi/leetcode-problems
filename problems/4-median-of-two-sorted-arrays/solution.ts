/**
 * LeetCode Problem #4 - Median of Two Sorted Arrays
 *
 * Problem: Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * @see https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

/**
 * Approach 1: Binary Search (Optimal)
 *
 * This solution uses binary search on the smaller array to find the correct partition
 * point that divides both arrays into two halves of equal size, where all elements
 * in the left half are less than or equal to all elements in the right half.
 *
 * Key insight: We need to find partitions i and j such that:
 * - i + j = (m + n + 1) / 2 (ensures equal or near-equal halves)
 * - nums1[i-1] <= nums2[j] and nums2[j-1] <= nums1[i]
 *
 * Time Complexity: O(log(min(m, n))) - Binary search on the smaller array
 * Space Complexity: O(1) - Only constant extra space used
 *
 * @param nums1 - First sorted array
 * @param nums2 - Second sorted array
 * @returns The median of the two sorted arrays
 *
 * @example
 * // Returns 2.0
 * findMedianSortedArrays([1, 3], [2]);
 *
 * @example
 * // Returns 2.5
 * findMedianSortedArrays([1, 2], [3, 4]);
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // Ensure nums1 is the smaller array for efficiency
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    // Partition index for nums1
    const partitionX = Math.floor((left + right) / 2);
    // Partition index for nums2 to ensure equal halves
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    // Get elements around the partition
    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];
    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    // Check if we found the correct partition
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Correct partition found
      if ((m + n) % 2 === 0) {
        // Even total length: median is average of max of left and min of right
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        // Odd total length: median is max of left side
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // Move partition left in nums1
      right = partitionX - 1;
    } else {
      // Move partition right in nums1
      left = partitionX + 1;
    }
  }

  // Should never reach here if arrays are sorted
  throw new Error('Input arrays are not sorted');
}

/**
 * Approach 2: Merge and Find (Simple)
 *
 * This solution merges the two sorted arrays and directly finds the median.
 * While not meeting the O(log(m+n)) requirement, it's intuitive and useful
 * for understanding the problem.
 *
 * Time Complexity: O(m + n) - Need to traverse both arrays
 * Space Complexity: O(m + n) - Store merged array
 *
 * @param nums1 - First sorted array
 * @param nums2 - Second sorted array
 * @returns The median of the two sorted arrays
 *
 * @example
 * // Returns 2.0
 * findMedianSortedArraysMerge([1, 3], [2]);
 */
export function findMedianSortedArraysMerge(
  nums1: number[],
  nums2: number[]
): number {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  // Merge both arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // Add remaining elements from nums1
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  // Add remaining elements from nums2
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  // Find median
  const totalLength = merged.length;
  const mid = Math.floor(totalLength / 2);

  if (totalLength % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}

/**
 * Approach 3: Two Pointers without Full Merge
 *
 * This solution uses two pointers to traverse both arrays simultaneously,
 * but only up to the median position, avoiding the need to merge the entire arrays.
 *
 * Time Complexity: O((m + n) / 2) = O(m + n) - Traverse to median position
 * Space Complexity: O(1) - Only constant extra space used
 *
 * @param nums1 - First sorted array
 * @param nums2 - Second sorted array
 * @returns The median of the two sorted arrays
 *
 * @example
 * // Returns 2.5
 * findMedianSortedArraysTwoPointers([1, 2], [3, 4]);
 */
export function findMedianSortedArraysTwoPointers(
  nums1: number[],
  nums2: number[]
): number {
  const totalLength = nums1.length + nums2.length;
  const medianPos = Math.floor(totalLength / 2);
  const isEven = totalLength % 2 === 0;

  let i = 0;
  let j = 0;
  let prev = 0;
  let curr = 0;

  // Traverse up to median position
  for (let count = 0; count <= medianPos; count++) {
    prev = curr;

    if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
      curr = nums1[i];
      i++;
    } else {
      curr = nums2[j];
      j++;
    }
  }

  if (isEven) {
    return (prev + curr) / 2;
  } else {
    return curr;
  }
}

import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  findMedianSortedArrays,
  findMedianSortedArraysMerge,
  findMedianSortedArraysTwoPointers,
} from './solution';

describe('LeetCode 4 - Median of Two Sorted Arrays', () => {
  describe('findMedianSortedArrays (Binary Search - Optimal)', () => {
    it('should return 2.0 for nums1=[1,3], nums2=[2]', () => {
      assert.strictEqual(findMedianSortedArrays([1, 3], [2]), 2.0);
    });

    it('should return 2.5 for nums1=[1,2], nums2=[3,4]', () => {
      assert.strictEqual(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
    });

    it('should handle empty first array', () => {
      assert.strictEqual(findMedianSortedArrays([], [1]), 1.0);
    });

    it('should handle empty second array', () => {
      assert.strictEqual(findMedianSortedArrays([2], []), 2.0);
    });

    it('should handle single element arrays', () => {
      assert.strictEqual(findMedianSortedArrays([1], [2]), 1.5);
    });

    it('should handle arrays of different lengths', () => {
      assert.strictEqual(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7, 8]), 4.5);
    });

    it('should handle duplicate values', () => {
      assert.strictEqual(findMedianSortedArrays([1, 2, 2], [2, 2, 3]), 2.0);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(findMedianSortedArrays([-3, -1], [-2]), -2.0);
    });

    it('should handle mixed positive and negative numbers', () => {
      assert.strictEqual(findMedianSortedArrays([-2, -1], [3, 4]), 1.0);
    });

    it('should handle large numbers', () => {
      assert.strictEqual(
        findMedianSortedArrays([100000], [100001]),
        100000.5
      );
    });

    it('should handle non-overlapping arrays (first smaller)', () => {
      assert.strictEqual(findMedianSortedArrays([1, 2], [5, 6]), 3.5);
    });

    it('should handle non-overlapping arrays (second smaller)', () => {
      assert.strictEqual(findMedianSortedArrays([5, 6], [1, 2]), 3.5);
    });

    it('should handle interleaved arrays', () => {
      assert.strictEqual(findMedianSortedArrays([1, 3, 5], [2, 4, 6]), 3.5);
    });

    it('should handle all same elements', () => {
      assert.strictEqual(findMedianSortedArrays([2, 2, 2], [2, 2, 2]), 2.0);
    });

    it('should handle odd total length', () => {
      assert.strictEqual(findMedianSortedArrays([1, 3], [2, 4, 5]), 3.0);
    });
  });

  describe('findMedianSortedArraysMerge (Merge and Find)', () => {
    it('should return 2.0 for nums1=[1,3], nums2=[2]', () => {
      assert.strictEqual(findMedianSortedArraysMerge([1, 3], [2]), 2.0);
    });

    it('should return 2.5 for nums1=[1,2], nums2=[3,4]', () => {
      assert.strictEqual(findMedianSortedArraysMerge([1, 2], [3, 4]), 2.5);
    });

    it('should handle empty first array', () => {
      assert.strictEqual(findMedianSortedArraysMerge([], [1]), 1.0);
    });

    it('should handle empty second array', () => {
      assert.strictEqual(findMedianSortedArraysMerge([2], []), 2.0);
    });

    it('should handle single element arrays', () => {
      assert.strictEqual(findMedianSortedArraysMerge([1], [2]), 1.5);
    });

    it('should handle arrays of different lengths', () => {
      assert.strictEqual(
        findMedianSortedArraysMerge([1, 2, 3], [4, 5, 6, 7, 8]),
        4.5
      );
    });

    it('should handle duplicate values', () => {
      assert.strictEqual(findMedianSortedArraysMerge([1, 2, 2], [2, 2, 3]), 2.0);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(findMedianSortedArraysMerge([-3, -1], [-2]), -2.0);
    });

    it('should handle mixed positive and negative numbers', () => {
      assert.strictEqual(findMedianSortedArraysMerge([-2, -1], [3, 4]), 1.0);
    });

    it('should handle interleaved arrays', () => {
      assert.strictEqual(findMedianSortedArraysMerge([1, 3, 5], [2, 4, 6]), 3.5);
    });

    it('should handle all same elements', () => {
      assert.strictEqual(findMedianSortedArraysMerge([2, 2, 2], [2, 2, 2]), 2.0);
    });

    it('should handle odd total length', () => {
      assert.strictEqual(findMedianSortedArraysMerge([1, 3], [2, 4, 5]), 3.0);
    });
  });

  describe('findMedianSortedArraysTwoPointers (Two Pointers)', () => {
    it('should return 2.0 for nums1=[1,3], nums2=[2]', () => {
      assert.strictEqual(findMedianSortedArraysTwoPointers([1, 3], [2]), 2.0);
    });

    it('should return 2.5 for nums1=[1,2], nums2=[3,4]', () => {
      assert.strictEqual(findMedianSortedArraysTwoPointers([1, 2], [3, 4]), 2.5);
    });

    it('should handle empty first array', () => {
      assert.strictEqual(findMedianSortedArraysTwoPointers([], [1]), 1.0);
    });

    it('should handle empty second array', () => {
      assert.strictEqual(findMedianSortedArraysTwoPointers([2], []), 2.0);
    });

    it('should handle single element arrays', () => {
      assert.strictEqual(findMedianSortedArraysTwoPointers([1], [2]), 1.5);
    });

    it('should handle arrays of different lengths', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([1, 2, 3], [4, 5, 6, 7, 8]),
        4.5
      );
    });

    it('should handle duplicate values', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([1, 2, 2], [2, 2, 3]),
        2.0
      );
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([-3, -1], [-2]),
        -2.0
      );
    });

    it('should handle mixed positive and negative numbers', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([-2, -1], [3, 4]),
        1.0
      );
    });

    it('should handle interleaved arrays', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([1, 3, 5], [2, 4, 6]),
        3.5
      );
    });

    it('should handle all same elements', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([2, 2, 2], [2, 2, 2]),
        2.0
      );
    });

    it('should handle odd total length', () => {
      assert.strictEqual(
        findMedianSortedArraysTwoPointers([1, 3], [2, 4, 5]),
        3.0
      );
    });
  });
});

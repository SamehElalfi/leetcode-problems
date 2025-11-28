import { describe, it } from 'node:test';
import assert from 'node:assert';
import { twoSum, twoSumBruteForce } from './solution';

describe('LeetCode 1 - Two Sum', () => {
  describe('twoSum (Hash Map)', () => {
    it('should return [0,1] for nums=[2,7,11,15] and target=9', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [0, 1]);
    });

    it('should return [1,2] for nums=[3,2,4] and target=6', () => {
      const nums = [3, 2, 4];
      const target = 6;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [1, 2]);
    });

    it('should return [0,1] for nums=[3,3] and target=6', () => {
      const nums = [3, 3];
      const target = 6;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [0, 1]);
    });

    it('should handle negative numbers', () => {
      const nums = [-1, -2, -3, -4, -5];
      const target = -8;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [2, 4]);
    });

    it('should handle negative target', () => {
      const nums = [1, -1, 0, 2];
      const target = -1;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [1, 2]);
    });

    it('should handle zeros', () => {
      const nums = [0, 4, 3, 0];
      const target = 0;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [0, 3]);
    });

    it('should handle large numbers', () => {
      const nums = [1000000000, -1000000000, 999999999];
      const target = 1999999999;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [0, 2]);
    });

    it('should find solution at the end of array', () => {
      const nums = [1, 2, 3, 4, 5];
      const target = 9;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, [3, 4]);
    });

    it('should handle empty array', () => {
      const nums: number[] = [];
      const target = 0;
      const result = twoSum(nums, target);
      assert.deepStrictEqual(result, []);
    });
  });

  describe('twoSumBruteForce (Nested Loops)', () => {
    it('should return [0,1] for nums=[2,7,11,15] and target=9', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [0, 1]);
    });

    it('should return [1,2] for nums=[3,2,4] and target=6', () => {
      const nums = [3, 2, 4];
      const target = 6;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [1, 2]);
    });

    it('should return [0,1] for nums=[3,3] and target=6', () => {
      const nums = [3, 3];
      const target = 6;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [0, 1]);
    });

    it('should handle negative numbers', () => {
      const nums = [-1, -2, -3, -4, -5];
      const target = -8;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [2, 4]);
    });

    it('should handle negative target', () => {
      const nums = [1, -1, 0, 2];
      const target = -1;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [1, 2]);
    });

    it('should handle zeros', () => {
      const nums = [0, 4, 3, 0];
      const target = 0;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [0, 3]);
    });

    it('should handle large numbers', () => {
      const nums = [1000000000, -1000000000, 999999999];
      const target = 1999999999;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [0, 2]);
    });

    it('should find solution at the end of array', () => {
      const nums = [1, 2, 3, 4, 5];
      const target = 9;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, [3, 4]);
    });

    it('should handle empty array', () => {
      const nums: number[] = [];
      const target = 0;
      const result = twoSumBruteForce(nums, target);
      assert.deepStrictEqual(result, []);
    });
  });
});

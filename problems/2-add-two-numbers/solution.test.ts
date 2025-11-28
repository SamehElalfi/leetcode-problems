import { describe, it } from 'node:test';
import assert from 'node:assert';
import { addTwoNumbers, createList, listToArray } from './solution';

describe('LeetCode 2 - Add Two Numbers', () => {
  describe('addTwoNumbers', () => {
    it('should return [7,0,8] for l1=[2,4,3] and l2=[5,6,4]', () => {
      const l1 = createList([2, 4, 3]); // 342
      const l2 = createList([5, 6, 4]); // 465
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [7, 0, 8]); // 807
    });

    it('should return [0] for l1=[0] and l2=[0]', () => {
      const l1 = createList([0]);
      const l2 = createList([0]);
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [0]);
    });

    it('should return [8,9,9,9,0,0,0,1] for l1=[9,9,9,9,9,9,9] and l2=[9,9,9,9]', () => {
      const l1 = createList([9, 9, 9, 9, 9, 9, 9]); // 9999999
      const l2 = createList([9, 9, 9, 9]); // 9999
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [8, 9, 9, 9, 0, 0, 0, 1]); // 10009998
    });

    it('should handle lists of different lengths', () => {
      const l1 = createList([9, 9]); // 99
      const l2 = createList([1]); // 1
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [0, 0, 1]); // 100
    });

    it('should handle carry propagation', () => {
      const l1 = createList([5]); // 5
      const l2 = createList([5]); // 5
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [0, 1]); // 10
    });

    it('should handle single digit addition without carry', () => {
      const l1 = createList([2]); // 2
      const l2 = createList([3]); // 3
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [5]); // 5
    });

    it('should handle first list longer than second', () => {
      const l1 = createList([1, 2, 3, 4]); // 4321
      const l2 = createList([5, 6]); // 65
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [6, 8, 3, 4]); // 4386
    });

    it('should handle second list longer than first', () => {
      const l1 = createList([5, 6]); // 65
      const l2 = createList([1, 2, 3, 4]); // 4321
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [6, 8, 3, 4]); // 4386
    });

    it('should handle maximum digits (all 9s)', () => {
      const l1 = createList([9, 9, 9]); // 999
      const l2 = createList([9, 9, 9]); // 999
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [8, 9, 9, 1]); // 1998
    });

    it('should handle final carry creating extra node', () => {
      const l1 = createList([9, 9]); // 99
      const l2 = createList([9, 9]); // 99
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [8, 9, 1]); // 198
    });

    it('should handle no carry throughout', () => {
      const l1 = createList([1, 2, 3]); // 321
      const l2 = createList([1, 2, 3]); // 321
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [2, 4, 6]); // 642
    });

    it('should handle adding zero to a number', () => {
      const l1 = createList([1, 2, 3]); // 321
      const l2 = createList([0]); // 0
      const result = addTwoNumbers(l1, l2);
      assert.deepStrictEqual(listToArray(result), [1, 2, 3]); // 321
    });
  });

  describe('Helper Functions', () => {
    it('createList should create a valid linked list', () => {
      const list = createList([1, 2, 3]);
      assert.deepStrictEqual(listToArray(list), [1, 2, 3]);
    });

    it('createList should handle empty array', () => {
      const list = createList([]);
      assert.strictEqual(list, null);
    });

    it('createList should handle single element', () => {
      const list = createList([5]);
      assert.deepStrictEqual(listToArray(list), [5]);
    });

    it('listToArray should handle empty list', () => {
      const arr = listToArray(null);
      assert.deepStrictEqual(arr, []);
    });
  });
});

import { describe, it } from "node:test";
import assert from "node:assert";
import { runningSum, runningSumNonDestructive } from "./solution";

describe("LeetCode 1480 - Running Sum of 1d Array", () => {
    describe("runningSum (In-Place)", () => {
        it("should return [1,3,6,10] for input [1,2,3,4]", () => {
            const nums = [1, 2, 3, 4];
            const result = runningSum(nums);
            assert.deepStrictEqual(result, [1, 3, 6, 10]);
        });

        it("should return [1,2,3,4,5] for input [1,1,1,1,1]", () => {
            const nums = [1, 1, 1, 1, 1];
            const result = runningSum(nums);
            assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
        });

        it("should return [3,4,6,16,17] for input [3,1,2,10,1]", () => {
            const nums = [3, 1, 2, 10, 1];
            const result = runningSum(nums);
            assert.deepStrictEqual(result, [3, 4, 6, 16, 17]);
        });

        it("should handle single element array", () => {
            const nums = [5];
            const result = runningSum(nums);
            assert.deepStrictEqual(result, [5]);
        });

        it("should handle array with negative numbers", () => {
            const nums = [1, -2, 3, -4];
            const result = runningSum(nums);
            assert.deepStrictEqual(result, [1, -1, 2, -2]);
        });

        it("should return empty array for empty input", () => {
            const nums: number[] = [];
            const result = runningSum(nums);
            assert.deepStrictEqual(result, []);
        });
    });

    describe("runningSumNonDestructive (New Array)", () => {
        it("should return [1,3,6,10] for input [1,2,3,4]", () => {
            const nums = [1, 2, 3, 4];
            const result = runningSumNonDestructive(nums);
            assert.deepStrictEqual(result, [1, 3, 6, 10]);
        });

        it("should return [1,2,3,4,5] for input [1,1,1,1,1]", () => {
            const nums = [1, 1, 1, 1, 1];
            const result = runningSumNonDestructive(nums);
            assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
        });

        it("should return [3,4,6,16,17] for input [3,1,2,10,1]", () => {
            const nums = [3, 1, 2, 10, 1];
            const result = runningSumNonDestructive(nums);
            assert.deepStrictEqual(result, [3, 4, 6, 16, 17]);
        });

        it("should not modify the original array", () => {
            const nums = [1, 2, 3, 4];
            const originalNums = [...nums];
            runningSumNonDestructive(nums);
            assert.deepStrictEqual(nums, originalNums);
        });

        it("should handle single element array", () => {
            const nums = [5];
            const result = runningSumNonDestructive(nums);
            assert.deepStrictEqual(result, [5]);
        });

        it("should handle array with negative numbers", () => {
            const nums = [1, -2, 3, -4];
            const result = runningSumNonDestructive(nums);
            assert.deepStrictEqual(result, [1, -1, 2, -2]);
        });

        it("should return empty array for empty input", () => {
            const nums: number[] = [];
            const result = runningSumNonDestructive(nums);
            assert.deepStrictEqual(result, []);
        });
    });
});

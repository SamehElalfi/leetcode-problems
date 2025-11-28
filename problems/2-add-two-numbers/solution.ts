/**
 * LeetCode Problem #2 - Add Two Numbers
 *
 * Problem: You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * @see https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list node.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Approach: Iterative with Carry
 *
 * This solution iterates through both linked lists simultaneously, adding corresponding
 * digits along with any carry from the previous position. It continues until both lists
 * are exhausted and there's no remaining carry.
 *
 * Time Complexity: O(max(m, n)) - Where m and n are the lengths of the two lists
 * Space Complexity: O(max(m, n)) - For the result linked list (output space)
 *
 * @param l1 - The first linked list (digits in reverse order)
 * @param l2 - The second linked list (digits in reverse order)
 * @returns A new linked list representing the sum (digits in reverse order)
 *
 * @example
 * // Returns [7,0,8] representing 807
 * addTwoNumbers([2,4,3], [5,6,4]); // 342 + 465 = 807
 *
 * @example
 * // Returns [8,9,9,9,0,0,0,1] representing 10009998
 * addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]); // 9999999 + 9999 = 10009998
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Dummy head to simplify list construction
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Continue while there are nodes in either list or there's a carry
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get values from current nodes (0 if node is null)
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;

    // Calculate sum of current digits plus carry
    const sum = val1 + val2 + carry;

    // Update carry for next iteration (0 or 1)
    carry = Math.floor(sum / 10);

    // Create new node with the digit (sum % 10)
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to next nodes if they exist
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  // Return the list starting from the first actual node (skip dummy head)
  return dummyHead.next;
}

/**
 * Helper function to create a linked list from an array of numbers
 *
 * @param arr - Array of digits
 * @returns Head of the created linked list
 *
 * @example
 * // Returns ListNode: 1 -> 2 -> 3
 * createList([1, 2, 3]);
 */
export function createList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

/**
 * Helper function to convert a linked list to an array
 *
 * @param head - Head of the linked list
 * @returns Array representation of the linked list
 *
 * @example
 * // Returns [1, 2, 3]
 * listToArray(ListNode: 1 -> 2 -> 3);
 */
export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

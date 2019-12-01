import { LinkedListNode } from './';

/**
 * List of linked nodes
 * @param head The start (Head) of this linked list
 */
export class LinkedList {

  public head: LinkedListNode;

  constructor(head?: LinkedListNode) {
    this.head = head || null;
  }

  /**
   * Append data to the end of the linked list by traversing through the list until
   * reaching the last element (the next element will return null)
   * @param data Data for the appended node to hold
   */
  public append(data: any) {

    if (!this.head) {
      this.head = new LinkedListNode(data);
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new LinkedListNode(data);

  }

  /**
   * Add a node to the start of the linked list by creating a new node and setting the linked
   * node to the existing head
   * @param  data Data for the prepended node to hold
   */
  public prepend(data: any) {

    if (!this.head) {
      this.head = new LinkedListNode(data);
      return;
    }

    const newHead = new LinkedListNode(data);
    newHead.next = this.head;
    this.head = newHead;

  }

  /**
   * Delete all nodes with this data, nodes are not removed but ignored by linking the previous
   * node to the node after the one being deleted
   * @param data Delete nodes that contain this data
   */
  public delete(data: any) {

    if (!this.head) return;

    // If the head node holds the data, set the head to the next node in the list //
    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;

    // If the new head is not null, loop //
    if (current) {
      while (current.next) {

        if (current.next.data === data) current.next = current.next.next;
        else current = current.next;

      }
    }

  }

}

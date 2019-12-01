/**
 * Node in a doubly linked list
 * @param data Data to be held by this node
 * @param next Pointer to the next node
 * @param prev Pointer to the previous node
 */
export class DoublyLinkedListNode {

  public next: DoublyLinkedListNode;
  public prev: DoublyLinkedListNode;
  public data: any;

  constructor(data: any, next: DoublyLinkedListNode = null, prev: DoublyLinkedListNode = null) {
    this.next = next;
    this.prev = prev;
    this.data = data;
  }

}

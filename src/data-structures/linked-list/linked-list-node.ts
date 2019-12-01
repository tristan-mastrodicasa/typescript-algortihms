/**
 * Node in a linked list
 * @param data The data to be held by this node
 * @param next Pointer to the next node
 */
export class LinkedListNode {

  public next: LinkedListNode;
  public data: any;

  constructor(data: any, next: LinkedListNode = null) {
    this.next = next;
    this.data = data;
  }

}

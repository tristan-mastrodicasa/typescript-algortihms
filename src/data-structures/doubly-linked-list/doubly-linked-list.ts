import { DoublyLinkedListNode } from './';

/**
 * A doubly linked list with nodes that hold data and a pointer to the previous
 * and next linked node
 * @param head Node at the start of the list
 * @param tail Node at the end of the list
 */
export class DoublyLinkedList {

  public head: DoublyLinkedListNode;
  public tail: DoublyLinkedListNode;

  constructor(head?: DoublyLinkedListNode, tail?: DoublyLinkedListNode) {
    this.head = head || null;
    this.tail = tail || null;
  }

  /**
   * Add a node to the beginning of the list
   * @param data Data for the node to hold
   */
  public prepend(data: any) {

    // Create a new node with the next node being the current head //
    const newNode = new DoublyLinkedListNode(data, this.head);

    // If a head existed then make it's previous link point to the new head //
    if (this.head) this.head.prev = newNode;

    // Make the class point to the new head //
    this.head = newNode;

    // If no tail exists, make it the new head (tail = head when 1 node) //
    if (!this.tail) this.tail = newNode;

  }

  /**
   * Append a node to the end of the doubly linked list
   * @param data Data for the node to hold
   */
  public append(data: any) {

    // Create a new node with the previous node being the current tail //
    const newNode = new DoublyLinkedListNode(data, null, this.tail);

    // Set the tail's next link to point to the new tail //
    if (this.tail) this.tail.next = newNode;

    // Set the class pointer for the tail to be the new node //
    this.tail = newNode;

    // If no head exists set it as the tail (tail = head when 1 node) //
    if (!this.head) this.head = newNode;

  }

  /**
   * Delete all nodes with the specified data
   * @param data Delete nodes with this data
   */
  public delete(data: any) {

    // If the head is null (no nodes exist), return //
    if (!this.head) return;

    let currentNode = this.head;
    while (currentNode) {

      if (currentNode.data === data) {

        if (currentNode === this.head) {

          // Set the head to the next node (could be null) //
          this.head = currentNode.next;

          // If the head is not null then set it's previous node link to null //
          if (this.head) this.head.prev = null;

          // If the node was the tail as well as the head it means that no nodes exist //
          if (currentNode === this.tail) this.tail = null;

        } else if (currentNode === this.tail) {

          // Set the classes tail pointer to the second to last node //
          this.tail = currentNode.prev;

          // Set the 'next' node pointer of the new tail to null (last in the list) //
          this.tail.next = null;

          // Note: we don't need to check if a previous node exists as if one node existed then
          // the previous conditional would be true (if currentNode == head)

        } else {

          // Set the previous node to point to the next node and vice versa //
          const prevNode  = currentNode.prev;
          const nextNode  = currentNode.next;

          prevNode.next = nextNode;
          nextNode.prev = prevNode;

        }

      }

      currentNode = currentNode.next;

    }

  }

}

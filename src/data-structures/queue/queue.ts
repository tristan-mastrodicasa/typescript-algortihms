import { QueueNode } from './queue-node';

export class Queue {

  public head: QueueNode;
  public tail: QueueNode;

  constructor(head?: QueueNode) {
    this.head = head || null;
    this.tail = head || null;
  }

  /**
   * Is the queue empty
   * @return boolean
   */
  public isEmpty(): boolean {
    return !this.head;
  }

  /**
   * Return the data from the front of the queue without deleting it
   * @return Data in the node
   */
  public peek(): any {

    if (this.head) return this.head.data;
    return null;

  }

  /**
   * Add a node to the back of the queue
   * @param data Data for the node to hold
   */
  public enqueue(data: any) {

    const newNode = new QueueNode(data);

    // If a tail exists then set the next pointer on it to the new tail node //
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    // If no head exists then this means the "tail" is the head //
    if (!this.head) {
      this.head = newNode;
    }

  }

  /**
   * Take the data from the first node in the queue and delete it
   */
  public dequeue(): any {

    if (this.head) {
      const data = this.head.data;

      this.head = this.head.next;

      if (!this.head) this.tail = null;

      return data;
    }

    return null;

  }

}

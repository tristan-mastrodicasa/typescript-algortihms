/**
 * Node in a queue
 * @param data The data to be held by this node
 * @param next Pointer to the next node
 */
export class QueueNode {

  public next: QueueNode;
  public data: any;

  constructor(data: any, next: QueueNode = null) {
    this.next = next;
    this.data = data;
  }

}

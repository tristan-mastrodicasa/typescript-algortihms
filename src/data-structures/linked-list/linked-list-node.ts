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

  /**
   * Convert node to a string with the help of a custom callback
   * @param  callback Callback to format the data to a string
   * @return          Stringified version of the node
   */
  public toString(callback: (v: any) => string): string {
    return callback ? callback(this.data) : `${this.data}`;
  }

}

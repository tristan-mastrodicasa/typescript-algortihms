/**
 * Node for a stack data structure
 * @param data Data to be held by the node
 * @param next Pointer to the next node
 */
export class StackNode {

  public next: StackNode;
  public data: any;

  constructor(data: any, next: StackNode = null) {
    this.next = next;
    this.data = data;
  }

}

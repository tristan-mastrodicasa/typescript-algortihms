import { StackNode } from './stack-node';

/**
 * A data structure that behaves list a stack of plates, to get a new plate you
 * take the one off the top, to put a new plate in you place one on the top.
 * This is known as a 'last in first out' (LIFO) data structure
 */
export class Stack {

  public top: StackNode;

  /**
   * Is the stack empty
   */
  public isEmpty(): boolean {
    return !this.top;
  }

  /**
   * Return the data stored in the top of the stack
   * @return Data stored in the node
   */
  public peek(): any {
    return this.top ? this.top.data : null;
  }

  /**
   * Add a new node (with some data) to the top of the stack
   * @param  data Data to store in the node
   */
  public push(data: any) {
    const node = new StackNode(data);

    node.next = this.top;
    this.top = node;
  }

  /**
   * Take a node off the top of the stack and return the data
   * @return Data stored in the node
   */
  public pop():any {

    if (!this.top) return null;

    const data = this.top.data;

    this.top = this.top.next;

    return data;
  }

}

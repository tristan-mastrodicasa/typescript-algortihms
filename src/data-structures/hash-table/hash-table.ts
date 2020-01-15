import { LinkedList, LinkedListNode } from 'data-structures/linked-list';

export class HashTable<ValueType> {

  public buckets: LinkedList[];
  public keys: { [key: string]: number };

  constructor(hashtableSize = 32) {
    // Create an associative array with a fixed number of elements //
    this.buckets = Array(hashtableSize).fill(null).map(() => new LinkedList()); // tslint:disable-line

    // Keys help keep track of added keys //
    this.keys = {};
  }

  /**
   * Convert a key string into a hash number that references an
   * element in the associative array
   * @param  key The key (string) to hash
   * @return     A number within the hashTableSize to enter the data associated with this key
   */
  public hash(key: string): number {

    // Obtain the hash number value by obtaining the unicode integer for each letter
    // in the key and adding them together, then find the remainder when diving by the
    // associative array (table) size
    const hashNumber: number = Array.from(key).reduce<number>(
      (hashAccumulator: number, letter: string) => {
        return hashAccumulator + letter.charCodeAt(0);
      },
      0,
    );

    return hashNumber % this.buckets.length;

  }

  /**
   * Find the node in a linked list with a specifc value type (check the key value)
   * @param  linkedListHead The start of the linked list
   * @param  key            The key to search for in the data of the linked list nodes
   * @return                A node with the request key value pair
   */
  public findValueInLinkedList(linkedListHead: LinkedListNode, key: string): LinkedListNode {
    let currentNode = linkedListHead;

    while (currentNode) {
      if (currentNode.data.key === key) {
        break;
      }

      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Enter a value into the hash table with it's associated key
   * @param  key   Key to store the value under
   * @param  value Value to store under the key
   */
  public set(key: string, value: ValueType) {

    const keyNumber = this.hash(key);
    this.keys[key] = keyNumber;

    const bucketLinkedList = this.buckets[keyNumber];

    const node = this.findValueInLinkedList(bucketLinkedList.head, key);

    if (node) {
      node.data.value = value;
    } else {
      bucketLinkedList.append({ key, value });
    }

  }

  /**
   * Delete a key => value pair from the hash table
   * @param  key The key that maps to the value that needs to be removed
   */
  public delete(key: string) {
    const keyHash = this.hash(key);
    delete this.keys[key];

    const bucketLinkedList = this.buckets[keyHash];

    const node = this.findValueInLinkedList(bucketLinkedList.head, key);

    if (node) {
      return bucketLinkedList.delete(node.data);
    }

    return null;

  }

  /**
   * Get the value associated with a key
   * @param  key Key that maps to the value we are trying to retrieve
   * @return     The data associated with the key
   */
  public get(key: string): ValueType {

    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = this.findValueInLinkedList(bucketLinkedList.head, key);

    return node ? node.data.value : undefined;

  }

  /**
   * Check if a key exists in the hash table
   * @param  key Key to find
   * @return     True if the key exists
   */
  public has(key: string): boolean {
    return this.keys.hasOwnProperty(key);
  }

  /**
   * Get all keys in this hash table
   * @return Array of keys in this hash table
   */
  public getKeys(): string[] {
    return Object.keys(this.keys);
  }

}

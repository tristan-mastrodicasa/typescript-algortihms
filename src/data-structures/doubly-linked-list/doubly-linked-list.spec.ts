import { DoublyLinkedList } from './';

describe('linked list', () => {

  it('should initialize', () => {
    const doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList).toBeTruthy();
  });

  it('should append data', () => {

    const data = ['yes', 'no', 'maybe', 'ok'];
    const doublyLinkedList = new DoublyLinkedList();

    data.forEach((value) => {
      doublyLinkedList.append(value);
    });

    let currentNode = doublyLinkedList.head;
    for (let i = 0; i < data.length; i += 1) {
      expect(currentNode.data).toBe(data[i]);
      currentNode = currentNode.next;
    }

  });

  it('should prepend data', () => {

    const data = ['yes', 'no', 'maybe'];

    const doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(data[1]);
    doublyLinkedList.append(data[2]);
    doublyLinkedList.prepend(data[0]);

    let currentNode = doublyLinkedList.head;
    for (let i = 0; i < data.length; i += 1) {
      expect(currentNode.data).toBe(data[i]);
      currentNode = currentNode.next;
    }

  });

  it('should delete data', () => {

    const data = ['yes', 'no', 'yes', 'maybe'];

    const doublyLinkedList = new DoublyLinkedList();

    data.forEach((value) => {
      doublyLinkedList.append(value);
    });

    // Delete 'yes' //
    doublyLinkedList.delete('yes');

    expect(doublyLinkedList.head.data).toBe('no');
    expect(doublyLinkedList.head.next.data).toBe('maybe');

  });

});

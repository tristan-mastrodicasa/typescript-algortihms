import { LinkedList } from './';

describe('linked list', () => {

  it('should initialize', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeTruthy();
  });

  it('should append data', () => {

    const data = ['yes', 'no', 'maybe', 'ok'];
    const linkedList = new LinkedList();

    data.forEach((value) => {
      linkedList.append(value);
    });

    let currentNode = linkedList.head;
    for (let i = 0; i < data.length; i += 1) {
      expect(currentNode.data).toBe(data[i]);
      currentNode = currentNode.next;
    }

  });

  it('should prepend data', () => {

    const data = ['yes', 'no', 'maybe'];

    const linkedList = new LinkedList();

    linkedList.append(data[1]);
    linkedList.append(data[2]);
    linkedList.prepend(data[0]);

    let currentNode = linkedList.head;
    for (let i = 0; i < data.length; i += 1) {
      expect(currentNode.data).toBe(data[i]);
      currentNode = currentNode.next;
    }

  });

  it('should delete data', () => {

    const data = ['yes', 'no', 'yes', 'maybe'];

    const linkedList = new LinkedList();

    data.forEach((value) => {
      linkedList.append(value);
    });

    // Delete 'yes' //
    linkedList.delete('yes');

    expect(linkedList.head.data).toBe('no');
    expect(linkedList.head.next.data).toBe('maybe');

  });

});

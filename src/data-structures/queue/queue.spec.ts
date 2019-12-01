import { Queue } from './';

describe('queue', () => {

  it('should initialize', () => {
    const queue = new Queue();
    expect(queue).toBeTruthy();
  });

  it('should enqueue and dequeue data', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    // Should dequeue in the correct order as well //
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });

  it('should empty the queue when all items have dequeued', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBeTrue();
  });

  it('should empty the queue when all items have dequeued', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBeTrue();
  });

  it('should be able to peek at the first node in the queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);

    expect(queue.isEmpty()).toBeFalse();
  });

});

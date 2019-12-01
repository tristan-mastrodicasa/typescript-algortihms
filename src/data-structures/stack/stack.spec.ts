import { Stack } from './';

describe('stack', () => {

  it('should initialize', () => {
    const stack = new Stack();
    expect(stack).toBeTruthy();
  });

  it('should push and pop to stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  it('should detect if stack is empty', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);

    expect(stack.isEmpty()).toBeTrue();
  });

  it('should peek a stack and not affect the nodes', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);

    expect(stack.isEmpty()).toBeFalse();
  });
});

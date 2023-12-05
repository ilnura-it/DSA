const Queue = require('./index'); 

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should add a record to the queue', () => {
    queue.add(1);
    queue.add(2);

    expect(queue.data).toEqual([2, 1]);
  });

  test('should remove a record from the queue', () => {
    queue.add('a');
    queue.add('b');
    const removedRecord = queue.remove();

    expect(removedRecord).toBe('a');
    expect(queue.data).toEqual(['b']);
  });

  test('should maintain the order of records in the queue', () => {
    queue.add('apple');
    queue.add('banana');
    queue.add('cherry');

    expect(queue.data).toEqual(['cherry', 'banana', 'apple']);
  });
});
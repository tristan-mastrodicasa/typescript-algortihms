import { HashTable } from './hash-table';

describe('hash table', () => {

  it('should create a hash table with a defined number of "buckets"', () => {
    const smallHashTable = new HashTable(32);
    expect(smallHashTable.buckets.length).toBe(32);

    const mediumHashTable = new HashTable(64);
    expect(mediumHashTable.buckets.length).toBe(64);
  });

  it('should create a proper hash from a key', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('abc')).toBe(6);
  });

  it('should set, read and delete data with collisions', () => {
    const hashTable = new HashTable<string>(3);

    // Index should not go above 2 (out of array range) //
    expect(hashTable.hash('c')).toBe(0);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.has('x')).toBe(false);
    expect(hashTable.has('c')).toBe(true);

    const stringifer = (value: any) => `${value.key}:${value.value}`;

    expect(hashTable.buckets[0].toString(stringifer)).toBe('c:earth');
    expect(hashTable.buckets[1].toString(stringifer)).toBe('a:sky,d:ocean');
    expect(hashTable.buckets[2].toString(stringifer)).toBe('b:sea');

    expect(hashTable.get('a')).toBe('sky');
    expect(hashTable.get('d')).toBe('ocean');
    expect(hashTable.get('x')).not.toBeDefined();

    hashTable.delete('a');

    expect(hashTable.delete('non-existent')).toBeNull();

    expect(hashTable.get('a')).not.toBeDefined();
    expect(hashTable.get('d')).toBe('ocean');

    hashTable.set('d', 'ocean-new');
    expect(hashTable.get('d')).toBe('ocean-new');
  });

  it('should be possible to track keys', () => {
    const hashTable = new HashTable<string>(3);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'search');
    hashTable.set('d', 'ocean');

    expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd']);
    expect(hashTable.has('a')).toBe(true);
    expect(hashTable.has('x')).toBe(false);

    hashTable.delete('a');

    expect(hashTable.has('a')).toBe(false);
    expect(hashTable.has('b')).toBe(true);
    expect(hashTable.has('x')).toBe(false);

  });

});

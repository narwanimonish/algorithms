import LinkedList from './../LinkedList';

describe('Test add,size,toArray ', () => {
  const ll = new LinkedList<string>();

  it('LL is empty', () => {
    expect(ll.isEmpty()).toBe(true);
  });

  it('Adding of elements to LL', () => {
    ll.add(1, 'Monish');
    ll.add(2, 'Narwani');
    ll.add(2, 'Kanayalal');
    expect(ll.size()).toBe(3);
    expect(ll.toArray()).toEqual(['Monish', 'Kanayalal', 'Narwani']);
  });

  it('Throws exception when index > size', () => {
    expect(() => ll.add(10, 'Hello')).toThrow('Index exception');
  });
});

describe('Test addFirst, addLast', () => {
  const ll = new LinkedList<string>();

  ll.add(0, 'Second');
  test('should element to first', () => {
    ll.addFirst('First');
    expect(ll.toArray()).toEqual(['First', 'Second']);
  });
  test('should element to last', () => {
    ll.addLast('Third');
    expect(ll.toArray()).toEqual(['First', 'Second', 'Third']);
  });
});

describe('Testing remove() ', () => {
  const ll = new LinkedList<string>();

  ll.addLast('Narwani');
  ll.addFirst('Kanayalal');
  ll.addFirst('Monish');

  test('should return proper element val', () => {
    expect(ll.remove(1)).toBe('Monish');
    expect(ll.remove(2)).toBe('Narwani');
    expect(ll.size()).toBe(1);
  });
});

describe('Test removeFirst() removeLast', () => {
  const ll = new LinkedList<string>();

  ll.addLast('Narwani');
  ll.addFirst('Kanayalal');
  ll.addFirst('Monish');

  test('should remove first element from LL', () => {
    expect(ll.removeFirst()).toBe('Monish');
  });

  test('should remove last element from LL', () => {
    expect(ll.removeLast()).toBe('Narwani');
  });

  test('should have the remaining elements in LL', () => {
    expect(ll.size()).toBe(1);
  });
});

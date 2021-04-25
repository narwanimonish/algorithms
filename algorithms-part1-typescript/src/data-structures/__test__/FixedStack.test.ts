import FixedStack from './../FixedStack';

test('basic', () => {
  const stack = new FixedStack<string>(5);
  expect(stack.size()).toBe(5);
  expect(stack.isEmpty()).toBe(true);
  expect(stack.isFull()).toBe(false);

  stack.push('Hello');
  stack.push('World');

  expect(stack.count()).toBe(2);

  expect(stack.pop()).toBe('World');
  expect(stack.pop()).toBe('Hello');

  expect(stack.count()).toBe(0);
});

test('testing stack with Object datatype', () => {
  interface Student {
    name: string;
    gender: string;
  }

  const stack = new FixedStack<Student>(10);

  stack.push({ name: 'Monish Narwani', gender: 'M' });
  stack.push({ name: 'Rishabh Narwani', gender: 'M' });
  stack.push({ name: 'Rachna Narwani', gender: 'M' });
  stack.push({ name: 'Kanayalal Narwani', gender: 'M' });

  expect(stack.count()).toBe(4);

  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();

  expect(stack.count()).toBe(0);
});

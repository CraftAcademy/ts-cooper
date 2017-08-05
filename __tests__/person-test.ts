import { Person } from '../src/person';

describe('Person', () => {
  test('should have a gender', () => {
    const person = new Person('Male', 46);
    expect(person.gender).toBeDefined();
    expect(person.gender).toBe('Male');
  });

  test('should have an age', () => {
    const person = new Person('Male', 46);
    expect(person.age).toBeDefined();
    expect(person.age).toBe(46);
  });
});

import { Person } from '../src/Person';

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Male', 46);
  });

  test('should have a gender', () => {
    expect(person.gender).toBeDefined();
    expect(person.gender).toBe('Male');
  });

  test('should have an age', () => {
    expect(person.age).toBeDefined();
    expect(person.age).toBe(46);
  });
});

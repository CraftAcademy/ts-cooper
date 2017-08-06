import { Person } from '../src/Person';

describe('Cooper Assessment', () => {
  describe('Calculate results', () => {
    let person: Person;

    test('should return a message', () => {
      person = new Person('Male', 20);
      person.doAssessment(2101);

      expect(person.assessmentMessage).toBeDefined();
      expect(person.assessmentMessage).toBe('Below average');
    });

    describe('Male, 20', () => {

      beforeEach(() => {
        person = new Person('Male', 20);
      });

      test('1400 m should equal "Poor"', () => {
        person.doAssessment(1400);
        expect(person.assessmentMessage).toBe('Poor');
      });

      test('1800 m should equal "Below average"', () => {
        person.doAssessment(1800);
        expect(person.assessmentMessage).toBe('Below average');
      });

      test('2300 m should equal "Average"', () => {
        person.doAssessment(2300);
        expect(person.assessmentMessage).toBe('Average');
      });

      test('2500 m should equal "Above average"', () => {
        person.doAssessment(2500);
        expect(person.assessmentMessage).toBe('Above average');
      });

      test('2800 m should equal "Excellent"', () => {
        person.doAssessment(2800);
        expect(person.assessmentMessage).toBe('Excellent');
      });
    });

    describe('Male, 51', () => {
      beforeEach(() => {
        person = new Person('Male', 51);
      });

      test('1290 m should equal "Poor"', () => {
        person.doAssessment(1290);
        expect(person.assessmentMessage).toBe('Poor');
      });

      test('1599 m should equal "Below average"', () => {
        person.doAssessment(1599);
        expect(person.assessmentMessage).toBe('Below average');
      });

      test('1999 m should equal "Average"', () => {
        person.doAssessment(1999);
        expect(person.assessmentMessage).toBe('Average');
      });

      test('2399 m should equal "Above average"', () => {
        person.doAssessment(2399);
        expect(person.assessmentMessage).toBe('Above average');
      });

      test('2400 m should equal "Excellent"', () => {
        person.doAssessment(2401);
        expect(person.assessmentMessage).toBe('Excellent');
      });
    });

    describe('Female, 21', () => {
      beforeEach(() => {
        person = new Person('Female', 21);
      });

      test('1290 m should equal "Poor"', () => {
        person.doAssessment(1499);
        expect(person.assessmentMessage).toBe('Poor');
      });

      test('1599 m should equal "Below average"', () => {
        person.doAssessment(1501);
        expect(person.assessmentMessage).toBe('Below average');
      });

      test('1999 m should equal "Average"', () => {
        person.doAssessment(1801);
        expect(person.assessmentMessage).toBe('Average');
      });

      test('2400 m should equal "Above average"', () => {
        person.doAssessment(2201);
        expect(person.assessmentMessage).toBe('Above average');
      });

      test('2401 m should equal "Excellent"', () => {
        person.doAssessment(2701);
        expect(person.assessmentMessage).toBe('Excellent');
      });
    });

    describe('Female, 51', () => {
      beforeEach(() => {
        person = new Person('Female', 51);
      });

      test('1290 m should equal "Poor"', () => {
        person.doAssessment(1099);
        expect(person.assessmentMessage).toBe('Poor');
      });

      test('1599 m should equal "Below average"', () => {
        person.doAssessment(1101);
        expect(person.assessmentMessage).toBe('Below average');
      });

      test('1999 m should equal "Average"', () => {
        person.doAssessment(1401);
        expect(person.assessmentMessage).toBe('Average');
      });

      test('2400 m should equal "Above average"', () => {
        person.doAssessment(2199);
        expect(person.assessmentMessage).toBe('Above average');
      });

      test('2201 m should equal "Excellent"', () => {
        person.doAssessment(2201);
        expect(person.assessmentMessage).toBe('Excellent');
      });
    });
  });
});

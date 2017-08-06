import { Cooper } from '../src/Copper';

class Person {
  public gender: string;
  public age: number;
  public assessmentMessage: string;

  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }

  public doAssessment(distance: number): void {
    // this.assessmentMessage = 'Above average';
    const cooper = new Cooper();
    this.assessmentMessage = cooper.assess(this, distance);
  }
}

export { Person };

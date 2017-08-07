# ts-cooper
Week 7 - Cooper challenge - Typescript Implementation

### Usage

```typescript
import { Person } from '../src/Person'

// Create an instance of the Person's class
john = new Person('Male', 20)

john.doAssessment(1400);
john.assessmentMessage);
// > Poor

john.doAssessment(1800);
john.assessmentMessage);
// > Below average

john.doAssessment(2300);
john.assessmentMessage);
// > Average
```

### Testing

Tests are written using [jest](https://facebook.github.io/jest/) and are in [__tests__](./__tests__) directory. To execute them, run the following command from your terminal

```shell
$ npm test
```
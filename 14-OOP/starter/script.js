'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance propeties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do it
  this.calcAge = function () {
    console.log(2023 - this.birthYear);
  };
};

const szabolcs = new Person('Szabolcs', 2003);
console.log(szabolcs);
// 1. New Empty object is created
// 2. funciton is called, this = {}
// 3. {} linked to prototype
// 4. function returns {}

const fanni = new Person('Fanni', 2004);
const levente = new Person('Levente', 1998);
console.log(fanni, levente);

console.log(szabolcs instanceof Person);
// console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();



// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

szabolcs.calcAge();
fanni.calcAge();
levente.calcAge();

console.log(szabolcs.__proto__);
console.log(szabolcs.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(szabolcs));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(szabolcs, fanni);
console.log(szabolcs.species, fanni.species);

console.log(szabolcs.hasOwnProperty('firstName'));
console.log(szabolcs.hasOwnProperty('species'));

console.log(szabolcs.__proto__);
console.log(szabolcs.__proto__.__proto__);
console.log(szabolcs.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 3, 1, 4, 5, 6, 3, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed -= 5;
  return console.log(this.speed);
};

const mercedes = new Car('BMW', 120);
const bmw = new Car('Mercedes', 95);

mercedes.accelerate();
bmw.break();

// class expression
// const PersonCL = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods will be added to .prototype propety
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log('Hey there 👋');
console.log(this);


const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1998;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__);

const szabolcs = Object.create(PersonProto);
szabolcs.init('Szabolcs', 2003);
szabolcs.calcAge();


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed -= 5;
  return console.log(this.speed);
};

const mercedes = new Car('BMW', 120);
const bmw = new Car('Mercedes', 95);

mercedes.accelerate();
bmw.break();

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return console.log(`'${this.make} 'is going at ${this.speed} km/h`);
  }

  decelerate() {
    this.speed -= 5;
    return console.log(`'${this.make} 'is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this._speed / 1.6;
  }

  set speedUS(speed) {
    this._speed = speed * 1.6;
  }
}

const ford = new Car2('Ford', 120);
ford.accelerate();

const lamborghini = new Car2('Lamborghini SVJ', 320);
lamborghini.accelerate();



const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);



// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return console.log(this.speed);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   return console.log(this.speed);
// };

// const mercedes = new Car('BMW', 120);
// const bmw = new Car('Mercedes', 95);

// mercedes.accelerate();
// bmw.break();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.charge = function () {
  console.log(`Current battery charge ${this.charge}`);
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} battery is now charged to ${chargeTo}%`);
};

EV.prototype.accelerate = function () {
  this.speed = this.speed * 1.22;
  this.charge = this.charge * 0.99;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(40);

const mclaren = new Car('Mclaren P1', 320);
mclaren.accelerate();

const taycan = new EV('Porsche Taycan', 200, 70);
taycan.accelerate();
taycan.chargeBattery(90);



class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // methods will be added to .prototype propety
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName}, and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old, but as a student I feel more like ${
        2023 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();



const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce('Jay', 2000, 'Computer Science');
jay.calcAge();


// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private Fields
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Szabolcs', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1._pin);

// Doesn't work
// console.log(acc1.#movements);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

CarCl.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
  return this;
};

CarCl.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
  return this;
};

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
}

EVCl.prototype.charge = function () {
  console.log(`Current battery charge ${this.charge}`);
  return this;
};

EVCl.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} battery is now charged to ${chargeTo}%`);
  return this;
};

EVCl.prototype.accelerate = function () {
  this.speed = this.speed * 1.22;
  this.charge = this.charge * 0.99;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
  return this;
};

const tesla = new EVCl('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(40);

const mclaren = new CarCl('Mclaren P1', 320);
mclaren.accelerate();

const taycan = new EVCl('Porsche Taycan', 200, 70);
taycan.accelerate();
taycan.chargeBattery(90).accelerate().brake();

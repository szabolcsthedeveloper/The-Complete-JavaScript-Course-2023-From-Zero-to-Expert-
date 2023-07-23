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

*/

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

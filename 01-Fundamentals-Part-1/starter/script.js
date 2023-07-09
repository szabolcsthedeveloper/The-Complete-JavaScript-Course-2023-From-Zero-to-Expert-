//Variable name conventions

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Szabolcs';
console.log(firstName);

let szabolcsNagy = 'SZN';
let $function = 27;

let person = 'szabolcs';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


///////////////////////////////////////////
//Data Types in JavaScript


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Szabolcs');

javaScriptIsFun = 'YES';
console.log(javaScriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

///////////////////////////////////////////
// Const, Let and Var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Nagy'
console.log(lastName)


///////////////////////////////////////////
// Basic Operators

const currentYear = 2023;
const ageSzabolcs = currentYear - 2003;
const ageFanni = currentYear - 2004;
console.log(ageSzabolcs, ageFanni)

console.log(ageSzabolcs * 2, ageSzabolcs / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Szabolcs';
const lastName = 'Nagy';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4; 
x ++;
x --;
console.log(x);

console.log(ageSzabolcs > ageFanni);
console.log(0ageSzabolcs >= 18);

const currentYear = 2023;
const ageSzabolcs = currentYear - 2003;
const ageFanni = currentYear - 2004;
console.log(ageSzabolcs, ageFanni)

console.log(currentYear - 1991 > currentYear - 2023);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageFanni + ageSzabolcs) / 2
console.log(ageFanni, ageSzabolcs, averageAge)





// #1 Coding Challange 

let weightMark = 78;
let weightJohn = 92;

let heightMark = 1.69;
let heightJohn = 1.95;

let markBMI = weightMark / (heightMark * heightMark);
let johnBMI = weightJohn / heightMark ** 2;
console.log( markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)

weightMark = 95;
weightJohn = 85;

heightMark = 1.88;
heightJohn = 1.76;

markBMI = weightMark / (heightMark * heightMark);
johnBMI = weightJohn / heightMark ** 2;
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)


const firstName = 'Szabolcs';
const job = 'programmer';
const birthYear = 2003;
const year = 2023

const szabolcs = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(szabolcs);

const szabolcsNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;
console.log(szabolcsNew);

console.log(`Just a regular string..`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`)


const age = 14

if (age >= 17) {
    console.log('Sarah can start her driving license');
} else {
    const yearsLeft = 17 - age;
    console.log(`Sarah needs to wait ${yearsLeft} years to start...`);
}

const birthYear = 2001;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's`)
}


const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Szabolcs'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');


 let n = '1' + 1;
 n = n - 1;
 console.log(n);



console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 -2);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Szabolcs"));
console.log(Boolean({}));

const money = 10;
if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!')
}

let height = 23;
if (height) {
    console.log('Yay! Height is definded');
} else {
    console.log('Height is undefined')
}


const age = '18';

if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You're just became an adult (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else if (favourite === 10) {
    console.log('10 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}


if (favourite !== 23) console.log('why not 23')


const hasDriverLicense = true; 
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('She should not be driving...');
// }

const isTired =  false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('She should not be driving...');
}





const dolphins = (96 + 108 + 89) / 3
const koalas = (88 + 91 + 110) / 3
console.log(dolphins, koalas)

if (dolphins > koalas) {
    console.log('Dolphines earned the throphy!')
} else if (koalas > dolphins) {
    console.log('Koalas earned the throphy!')
} else {
    console.log('TIE!')
}


const dolphins = (97 + 112 + 101) / 3
const koalas = (109 + 95 + 123) / 3
console.log(dolphins, koalas)

if (dolphins > 100 && koalas < dolphins) {
    console.log('Dolphines earned the throphy!')
} else if (koalas > 100 && koalas > dolphins) {
    console.log('Koalas earned the throphy!')
} else {
    console.log('TIE!')
}


const dolphins = (97 + 112 + 101) / 3
const koalas = (109 + 95 + 106) / 3
console.log(dolphins, koalas)

if (dolphins > 100 && koalas < dolphins) {
    console.log('Dolphines earned the throphy!')
} else if (koalas > 100 && koalas > dolphins) {
    console.log('Koalas earned the throphy!')
} else {
    console.log('TIE!')
}


const day = 'wednesday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log("Not a valid day!");
}       



const todayDate = prompt("Please enter today's date")

if (todayDate === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (todayDate === 'tuesday') {
    console.log('Prepare theory videos');
} else if (todayDate === 'wednesday' || 'thursday') {
    console.log('Write code examples');
} else if (todayDate === 'friday') {
    console.log('Record videos');
} else if (todayDate === 'saturday' || 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log("Not a valid day!");
}




3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = "23 is bigger";
}

const me = "Szabolcs"
console.log(`I'm, ${me} ${2037 - 1991} years old`)





const age = 23;
age >= 18 ? console.log('I like to drink wine🍷') :
console.log('I like to drink water💧')

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧';
}
console.log(drink2)


console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`)

*/

const bill = Number(prompt("Please enter your bill"))
const tip = bill >= 50 && bill <= 300 ? 
`This bill was ${bill}, the tip was ${bill * 0.15} and the total value was ${bill + (bill * 0.15)}` : 
`This bill was ${bill}, the tip was ${bill * 0.20} and the total value was ${bill + (bill * 0.20)}`;

console.log(tip)



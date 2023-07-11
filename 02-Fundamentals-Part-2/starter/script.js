'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 1523;



function logger() {
    console.log('My name is Szabolcs');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

const num = Number('23')


// func declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(2023);

// func expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(2003);

console.log(age1, age2);



//Arrow function

const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(2002));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'Szabolcs'));
console.log(yearsUntilRetirement(1998, 'Levente'));


//Calling function inside a function

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3))



const calcAge = function(birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement <= 0) {
        return `${firstName} has already retired`
    } else return `${firstName} retires in ${retirement} years`; {
    }
}

console.log(yearsUntilRetirement(2003, 'Szabolcs'));
console.log(yearsUntilRetirement(1955, 'Mike'));
console.log(yearsUntilRetirement(1935, 'John'));



const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        return ('No team wins!')
    }
}

console.log(checkWinner(avgDolphins, avgKoalas))



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)

const years = new Array(1991, 1849, 2342, 2020)
console.log(years[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);


const firstName = 'Szabolcs';
const szabolcs = ['Szabolcs', 'Nagy', 2023-2003, 'programmer', friends];

console.log(szabolcs)


const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)


// add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends)
console.log(newLength)

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop(); // first
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // last
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);


const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(total)


const szabolcsArray = [
    'Szabolcs',
    'Nagy',
    2023-2003,
    'programmer',
    ['Michael', 'Peter', 'Steven']
];


const szabolcs = {
    firstName: 'Szabolcs',
    lastName: 'Nagy',
    age: 2023 - 2003,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(szabolcs);

console.log(szabolcs.lastName);
console.log(szabolcs['lastName']);

const nameKey = 'Name';
console.log(szabolcs['first' + nameKey]);
console.log(szabolcs['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Szabolcs? Choose between firstName, lastName, age, job and friends');


if (szabolcs[interestedIn]) {
    console.log(szabolcs[interestedIn]);
} else {
    console.log('Value does not exist! Choose between firstName, lastName, age, job and friends')
}

szabolcs.location = 'Hungary';
szabolcs['twitter'] = '@szabolcsnagy';
console.log(szabolcs);

console.log(`${szabolcs.firstName} has ${szabolcs.friends.length}, and his best friend is ${szabolcs.friends[0]}`)



const szabolcs = {
    firstName: 'Szabolcs',
    lastName: 'Nagy',
    birthYear: 2003,
    age: 2023 - this.birthYear,
    job: 'programmer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverseLicense: true,

    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age;
    }
};

console.log(szabolcs.calcAge());
console.log(szabolcs.age)

console.log(`${szabolcs.firstName} is a ${szabolcs.age}-year old ${szabolcs.job}, and he has ${szabolcs.hasDriverseLicense ? "a driver's license" : "no driver's license"}`);





// console.log('Lifting weights rep 1');
// console.log('Lifting weights rep 2');
// console.log('Lifting weights rep 3');

for (let rep = 5; rep <= 30; rep++) {
    console.log(`Lifting weights rep ${rep}`);
}




// filling array
const types = [];

for (let i = 0; i < szabolcs.length; i++) {
    types[i] = szabolcs[i];
    types.push('szabbab');
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);


const szabolcs = [
    'Szabolcs',
    'Nagy',
    2023-2003,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
];

//continue and break
for (let i = 0; i < szabolcs.length; i++) {
    if(typeof szabolcs[i] !== 'string') continue;

    console.log(szabolcs[i]);
}

for (let i = 0; i < szabolcs.length; i++) {
    if(typeof szabolcs[i] == 'number') break;

    console.log(szabolcs[i]);
}



const szabolcs = [
    'Szabolcs',
    'Nagy',
    2023-2003,
    'programmer',
    ['Michael', 'Peter', 'Steven'],
    true,
];

for (let i = szabolcs.length -1; i >= 0; i--) {
    console.log(szabolcs[i]);
};

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------Starting exercise ${exercise}`)

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`)
    }
};




for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights using for loop repetition ${rep}`);
}


let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights using while loop repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loops has ended...')
}



const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
let sum = 0

for (let i = 0; i < bills.length; i++) {
    sum += bills[i]
}

console.log(sum / bills.length)

for (let i = 0; i < bills.length; i++) {
    const calcTip = function(bill) {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
    }
    const tip = calcTip(bills[i]);
    tips.push(tip);

    const calcAverage = function(arr) {
        for (let i = 0; i < bills.length; i++) {
            sum += bills[i]
        }
    }
}

console.log(tips)

*/
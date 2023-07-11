'use strict';

/*


function describeCountry(country, population, capitalCity) {
    const countryDescribed = `${country} has ${population} million people living in its capital city, ${capitalCity}`;
    return countryDescribed
}


console.log(describeCountry('Hungary', 10, 'Budapest'))
console.log(describeCountry('Malta', 0.5, 'Valetta'))
console.log(describeCountry('Japan', 14, 'Tokyo'))



const globalPopulation = 7900

function percentageOfWorld1(population) {
    const percentage1 = (population / globalPopulation) * 100
    return percentage1
}

console.log(percentageOfWorld1(10))


const percentageOfWorld2 = function(population) {
    const percantage2 = console.log((population / globalPopulation) * 100)
    return percantage2
}

percentageOfWorld2(0.5)



const percentageOfWorld3 = (population) => {
    const percentage3 = console.log((population / globalPopulation * 100))
    return percentage3
}


percentageOfWorld3(14)




const percentageOfWorld4 = function(population) {
    const percentage4 = (population / globalPopulation) * 100
    return percentage4
}

const describePopulation = function(country, population) {
    const worldPopulation = percentageOfWorld4(population)
    
    console.log(`${country} has ${population} million people, which is about ${worldPopulation}% of the world`)
}

describePopulation("Hungary", 10)
describePopulation("Malta", 0.5)
describePopulation("Japan", 14)


const populations = [10, 0.5, 14, 30]
console.log(populations.length === 4)

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages)


const neighbours = ['Mexico', 'Canada', 'Pourta Rico'];

neighbours.push('Utopia');
console.log(neighbours)

neighbours.shift();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Proably not an European country :D')
}

neighbours[0] = "Fallen Society"
console.log(neighbours);

const myCountry = {
    country: 'Malta',
    capital: 'Valetta',
    language: 'english',
    population: 0.5,
    neighbours: ['none'],
    isIsland: true,
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neigbouring countries and a capital city called ${this.capital}.`
    },
    checkIsland: function () {
        return this.isIsland ? `${this.country} is an island!` : `${this.country} is not an island!`
    }
};

myCountry.population = 2.5;
console.log(myCountry.population);
myCountry["population"] = 0.5;
console.log(myCountry.population);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neigbouring countries and a capital city called ${myCountry.capital} and ${myCountry.checkIsland()}`);

console.log(myCountry.describe());



const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        const BMI = this.mass / this.height ** 2;
        return BMI;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        const BMI = this.mass / this.height ** 2;
        return BMI;
    }
};



if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher, than ${john.firstName}'s BMI (${john.calcBMI()})`)
} else {
    console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher, than ${mark.firstName}'s BMI (${mark.calcBMI()})`)
}


for (let voter = 0; voter <= 50; voter++) {
    console.log(`Currently voter number ${voter} is voting!`)
}



const populations = [10, 0.5, 14, 30];
const percetnages2 = [];


for (let i = 0; i < populations.length; i++) {
    const percentages = (populations[i] / 7900) * 100;
    percetnages2.push(`${percentages}%`);
}

console.log(percetnages2)



const  listOfNeighbours = [['Canada'], ['Mexico'], ['Spain'], ['Norway'], ['Sweden'], ['Russia']]

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(`Neighbour:${listOfNeighbours[i]}`)
}

for (let i = 0; i < listOfNeighbours.length; i++) 
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)

        




const populations = [10, 0.5, 14, 30];
const percetnages2 = [];


for (let i = 0; i < populations.length; i++) {
    const percentages = (populations[i] / 7900) * 100;
    percetnages2.push(`${percentages}%`);
}

let i = 0;
while (i < populations.length) {
    const percentages = (populations[i] / 7900) * 100;
    percetnages2.push(`${percentages}%`);
    i++;
}


console.log(percetnages2)

*/
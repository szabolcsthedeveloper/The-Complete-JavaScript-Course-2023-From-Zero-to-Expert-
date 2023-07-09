

// Values and Variables

let country = 'Hungary';
let continent = 'Europe';
let population = 10;

console.log(country, continent, population)
 

// Data Types

let isIsland = false;
const language = 'hungarian'

switch(language) {
    case "chinese":
    case "mandarin":
        console.log("most number of native speakers");
        break;
    case "spanish":
        console.log("2nd place");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hinid":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;
    default:
        console.log("Great language too!")
}

console.log(isIsland, population, continent, language)


// Let, const and var
// changes to above


// Basic Operators

console.log(population / 2);

population ++;
console.log(population);

const Finland = 6;
console.log(population > Finland);

const avgPop = 33;
console.log(population > avgPop);

const description = 'Hungary is in Europe, and its 10 million people speak Hungarian'



const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(descriptionNew);

if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population of ${population} million is below average`);
}



const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}




if (language === "Enlgish" && population <= 50 && isIsland === false) {
    console.log('Hungary is right for her')
} else {
    console.log('Hungary is not the right fit for her :(')
}


const poptest = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`
console.log(poptest)


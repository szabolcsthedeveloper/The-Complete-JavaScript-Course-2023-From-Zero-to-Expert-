'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced opening literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious paste with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
//
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

/*

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Szabolcs';
const letters = [...str, ' ', 'N.'];
console.log(letters);
console.log(...str);


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);




// 1) desctructuring

// spread
const arr = [1, 2, ...[3, 4]];

// rest
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'pepper', 'corn');
restaurant.orderPizza('bacon');


console.log('---- OR ----');

console.log(3 || 'Szabolcs');
console.log('' || 'Szabolcs');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Szabolcs');
console.log(7 && 'Szabolcs');

console.log('Hello' && 23 && null && 'Szabolcs');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');


restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);



const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Guiseppe',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<ANNONYMOUS>';
rest2.owner &&= '<ANNONYMOUS>';

console.log(rest1);
console.log(rest2);




const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}

// console.log([...menu.entries()]);



if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// arrays
const users = [{ name: 'Szabolcs', email: 'hello@szabolcs.com' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[0]?.address ?? 'User array empty');




// prop names
const propeties = Object.keys(openingHours);
console.log(propeties);

let openStr = `We are open for ${propeties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

// prop values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} close at ${close}`);
}


*/

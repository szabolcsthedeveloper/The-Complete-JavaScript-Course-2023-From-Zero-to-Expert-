const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'szabolcs' },
  { value: -45, description: 'Groceries 🥑', user: 'szabolcs' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'szabolcs' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'szabolcs' },
  { value: -1100, description: 'New iPhone 📱', user: 'szabolcs' },
  { value: -20, description: 'Candy 🍭', user: 'fanni' },
  { value: -125, description: 'Toys 🚂', user: 'fanni' },
  { value: -1800, description: 'New Laptop 💻', user: 'szabolcs' },
]);

const spendingLimits = Object.freeze({
  szabolcs: 1500,
  fanni: 100,
});

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'szabolcs'
) {
  const cleanUser = user.toLowerCase();
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits?.[user] ?? 0;

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description: description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description: description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 100000, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Fanni'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff');

console.log(newBudget3);

const checkBudget = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkBudget();

const logBigExpenses = function (bigLimit) {
  let output = '';
  ``;
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);

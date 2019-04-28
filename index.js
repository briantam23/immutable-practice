const { Map, List, fromJS } = require('immutable');

/* // Convert JS to Immutable

// Normal Javascript
const person = {
  name: 'Will',
  pets: ['cat', 'dog']
};
// To create the equivalent in Immutable:
const immutablePerson = Map({
  name: 'Will',
  pets: List(['cat', 'dog'])
});
// Or ...
const immutablePerson = fromJS(person); */

/* // Convert back from Immutable to JS

const immutablePerson = Map({ name: 'Will' });
const person = immutablePerson.toJS();

console.log(person); // prints { name: 'Will' }; */


// Getting a nested value from an object without checking if it exists

/* // Normal Javascript
const data = { my: { nested: { name: 'Brian' } } };

const goodName = data.my.nested.name;
console.log(goodName); // prints Brian

const badName = data.my.bad.name; 
console.log(badName); // throws error: 'Cannot read name of undefined' */

/* // To create the equivalent in Immutable:
const data = fromJS({ my: { nested: { name: 'Will' } } });

const goodName = data.getIn(['my', 'nested', 'name']);
console.log(goodName); // prints Will

const badName = data.getIn(['my', 'lovely', 'name']);
console.log(badName); // prints undefined - no error thrown */

// Chaining Manipulations

/* // Normal Javascript
const pets = ['cat', 'dog'];

pets.push('goldfish');
pets.push('tortoise');

console.log(pets); // prints ['cat', 'dog', 'goldfish', 'tortoise']; */

// To create the equivalent in Immutable:
const pets = List(['cat', 'dog']);
const finalPets = pets.push('goldfish').push('tortoise');

console.log(pets.toJS()); // prints ['cat', 'dog'];
console.log(finalPets.toJS()); // prints ['cat', 'dog', 'goldfish', 'tortoise'];
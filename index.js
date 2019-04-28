const { Map, List, fromJS } = require('immutable');

// Normal Javascript
const person = {
  name: 'Will',
  pets: ['cat', 'dog']
};
// To create the equivalent in Immutable:
/* const immutablePerson = Map({
  name: 'Will',
  pets: List(['cat', 'dog'])
}); */
// Or ...
const immutablePerson = fromJS(person);

console.log(immutablePerson)
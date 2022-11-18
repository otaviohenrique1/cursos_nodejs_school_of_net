const _ = require('lodash');


var times = _.times(5, function() {
    // return Math.round(Math.random() * 100);
    return _.random(100);
})

console.log(`Times Result: ${times}`);

let arr = [ 71, 80, 84, 99, 39 ];
let filter = _.filter(arr, (n) => n <= 89);
let map = _.map(arr, n => n * 2);
console.log(`Filter Result: ${filter}`);
console.log(`Map Result: ${map}`);

let collection = [1,2,3,4,5];
let resultCollec = _.reduce(collection, (op, n) => (op + n), 0);
console.log(`Reduce Result: ${resultCollec}`);

let name = 'LEONAN LUPPI';
name = _.capitalize(name);
console.log(`Capitalize Result: ${name}`);
name = _.toLower(name);
console.log(`toLower Result: ${name}`);
name = _.camelCase(name);
console.log(`camelCase Result: ${name}`);
name = _.endsWith(name, 'I');
console.log(`endsWith Result: ${name}`);
name = 'LEONAN LUPPI';
name = _.padEnd(name, 13, ';');
console.log(`padEnd Result: ${name}`);

let obj = { a: 2, c: 7, d: 10 };
console.log(`Pick Result: ${JSON.stringify(_.pick(obj, 'c'))}`);
console.log(`Values Result: ${_.values(obj)}`);
console.log(`Omit Result: ${JSON.stringify(_.omit(obj, ['a', 'd']))}`);
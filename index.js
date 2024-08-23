const { Length } = require('./classes/length');

let length = new Length(3, 'M');
console.log(length.convert());

length = new Length(3.53, 'M');
console.log(length.convert());

length = new Length(5, 'I');
console.log(length.convert());

length = new Length(5.87, 'I');
console.log(length.convert());

length = new Length(Number.MAX_SAFE_INTEGER, 'M');
console.log(length.convert());
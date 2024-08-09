const lib = require('./lib');
// const {a, b} = require('./lib');
console.log(lib); // { b: 2 }
// console.log(a, b); // { b: 2 }

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('error', new Error('Something went wrong')); // Throws and crashes the program
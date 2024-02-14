const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

console.log(process.argv);
console.log(process.argv[0]); // Path to node executable
console.log(process.argv[1]); // Path to the file being executed
console.log(process.argv[2]); // First argument passed in the command line
// console.log(process.argv[3]); // Undefined if only one argument is passed

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {        
    console.log('Removing note!');
}
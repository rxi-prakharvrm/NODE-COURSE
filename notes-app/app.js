// const getNotes = require('./notes.js');

// const msg = getNotes();

const chalk = require('chalk');

console.log(chalk.green("Success!\n"));
console.log(chalk.red("Access Denied!\n"));

console.log(chalk.bold.green("Success!\n"));
console.log(chalk.bold.red("Access Denied!\n"));

console.log(chalk.bold.green.inverse("Success!\n"));
console.log(chalk.bold.red.inverse("Access Denied!\n"));

console.log(chalk.green.inverse("Success!\n"));
console.log(chalk.red.inverse("Access Denied!\n"));
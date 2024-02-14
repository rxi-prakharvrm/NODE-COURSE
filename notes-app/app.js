// install nodemon globally
// npm install nodemon -g
// nodemon app.js instead of node app.js in terminal

const chalk = require('chalk');

console.log(chalk.green("Success!"));
console.log(chalk.red("Access Denied!\n"));

console.log(chalk.bold.green("Success!"));
console.log(chalk.bold.red("Access Denied!\n"));

console.log(chalk.bold.green.inverse("Success!"));
console.log(chalk.bold.red.inverse("Access Denied!\n"));

console.log(chalk.green.inverse("Success!"));
console.log(chalk.red.inverse("Access Denied!\n"));
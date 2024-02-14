const chalk = require('chalk');

const msg = 'Hello world';

// applying styles
console.log(`Color: ${chalk.blue(msg)}`);
console.log(`Background Color: ${chalk.bgRed(msg)}`);
console.log(`Underline: ${chalk.underline(msg)}`);
console.log(`Bold: ${chalk.bold(msg)}`);
console.log(`Inverse: ${chalk.inverse(msg)}`);
console.log(`Color: ${chalk.hex('#DEADED').bold(msg)}`);
console.log(`Color: ${chalk.rgb(123, 45, 67).bold(msg)}`);
console.log(`Color: ${chalk.hsl(123, 45, 67).bold(msg)}`);
console.log(`Color: ${chalk.keyword('orange').bold(msg)}`);

// chaining styles
console.log(chalk.hex('#FFFFFF').bold.inverse('Hello world!'));

// others (in latest versions of the chalk not in @2.4.1)
// console.log(error('Error!'));
// console.log(warning('Warning!'));
// console.log(info('Info!'));
// console.log(success('Success!'));
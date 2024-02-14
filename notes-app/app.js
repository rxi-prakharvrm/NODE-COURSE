const validator = require('validator');
// const getNotes = require('./notes.js');

// const msg = getNotes();
// console.log(msg);

// correct email
console.log(validator.isEmail("foo@gmail.com"));

// incorrect email
console.log(validator.isEmail("foo@com"));

// correct url
console.log(validator.isURL("https://www.google.com"));

// incorrect url
console.log(validator.isURL("ht://www.google.com"));
const fs = require('fs');

// write the file
fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

// overwrite the file
fs.writeFileSync('notes.txt', 'File has been overwritten!');

// append to the file
fs.appendFileSync('notes.txt', ' This is the appended text!');
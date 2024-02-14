const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // Convert object to JSON
// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);

// // Convert JSON to object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);
// console.log(parsedData.author);

// Read the file
// const dataBuffer = fs.readFileSync('1-json.json');

// // Print the buffer
// console.log(dataBuffer); // <Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 22 7d>

// Convert buffer to string

// const dataJSON = dataBuffer.toString();
// // Print the string
// console.log(dataJSON);

// const data = JSON.parse(dataJSON);
// console.log(data.title);

// // auto-parsing the JSON
// const data = require('./1-json.json');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Prakhar";
data.age = 22;
data.planet = "Earth";

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);
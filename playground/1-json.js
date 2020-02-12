const fs = require('fs')
// const book = {
//     title: 'LOTR',
//     author: 'Tolkin'
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// const parsedData = JSON.parse(bookJson);
// console.log(parsedData.author);
// fs.writeFileSync('1-json.json', bookJson);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataBuffer);
user.name = "Casey";
user.age = 33

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
// console.log(parsedData);







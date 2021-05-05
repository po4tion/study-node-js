/* Section04 - 18
const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title); */

const fs = require('fs');
const readData = fs.readFileSync('1-json.json').toString();
const jsonData = JSON.parse(readData);

jsonData.name = '김동규';
jsonData.age = 27;

fs.writeFileSync('1-json.json', JSON.stringify(jsonData));

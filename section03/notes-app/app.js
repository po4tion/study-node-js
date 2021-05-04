//  section03 - 12
const chalk = require('chalk');
const log = console.log;

log(chalk.green('Success!'));

/*  section03 - 11
const validator = require('validator');
const gn = require('./note.js');

const msg = gn();

console.log(msg);
console.log(validator.isEmail('po4tion0429@gmail.com'));
console.log(validator.isURL('https://github.com/')); 
*/

/* section03 - 10
const add = require('./utils.js');
const sum = add(2, 3);

console.log(sum); 
*/

/* section03 - 9
const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js');

fs.appendFileSync('notes.txt', '\nappend new data!');
 */

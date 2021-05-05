const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./note.js');

// yargs 버전 세팅
yargs.version('1.1.0');

// add 명령어
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    console.log('Title: ', argv.title);
    console.log('Body: ', argv.body);
  },
});

// remove 명령어
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing the note'),
});

// list 명령어
yargs.command({
  command: 'list',
  describe: 'list your notes',
  handler: () => console.log('Listing out all note'),
});

// read 명령어
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('Reading a note'),
});

console.log(yargs.argv);

/* Section04 - 15
const chalk = require('chalk');
const getNotes = require('./note.js');

const command = process.argv[2];

if (command === 'add') {
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Removing note!');
}
*/

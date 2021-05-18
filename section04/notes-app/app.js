const yargs = require('yargs');
const note = require('./note.js');

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
  handler: (argv) => note.addNote(argv.title, argv.body),
});

// remove 명령어
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => note.removeNote(argv.title),
});

// list 명령어
yargs.command({
  command: 'list',
  describe: 'list your notes',
  handler: () => note.listNote(),
});

// read 명령어
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => note.readNote(argv.title),
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

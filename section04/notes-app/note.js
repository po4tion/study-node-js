const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log('새로운 노트 추가!');
  } else {
    console.log('노트 제목이 이미 존재합니다.');
  }
};

const removeNote = (title) => {
  const dataJSON = loadNotes();

  const removeNotes = dataJSON.filter((note) => note.title !== title);

  if (removeNotes.length === dataJSON.length) {
    console.log(chalk.red.inverse('삭제할 노트가 존재하지 않습니다.'));
  } else {
    saveNotes(removeNotes);
    console.log(chalk.blue.inverse('노트를 삭제하였습니다.'));
  }
};

const listNote = () => {
  console.log(chalk.green.inverse('노트 리스트 출력...'));

  const noteData = loadNotes();

  if (noteData.length) {
    noteData.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse('보유중인 노트가 없습니다.'));
  }
};

const readNote = (title) => {
  const readData = loadNotes();

  const findData = readData.find((data) => data.title === title);

  if (findData) {
    console.log(chalk.inverse(findData.title));
    console.log(findData.body);
  } else {
    console.log(chalk.red('해당 제목의 노트가 존재하지 않습니다.'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};

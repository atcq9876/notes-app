const NotesModel = require('./notesModel');

console.log('The notes app is running');
const notes = new NotesModel;
console.log(notes.getNotes());
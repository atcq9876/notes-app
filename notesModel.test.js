const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('begins with an empty list of notes', () => {
    const notes = new NotesModel;

    expect(notes.getNotes()).toEqual([]);
  })

  it('adds notes to list', () => {
    const notes = new NotesModel;
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');

    expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('clears all notes from the list', () => {
    const notes = new NotesModel;
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    notes.reset();

    expect(notes.getNotes()).toEqual([]);    
  })
})
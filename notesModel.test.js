const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('begins with an empty list of notes', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  })

  it('adds notes to list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('clears all notes from the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();

    expect(model.getNotes()).toEqual([]);    
  })

  it('sets the notes', () => {
    const model = new NotesModel();
    const notes = ['Note 1', 'Note 2'];
    model.setNotes(notes);

    expect(model.getNotes()).toEqual(['Note 1', 'Note 2']);
  })
})
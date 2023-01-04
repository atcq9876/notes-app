/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('notesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 0 notes at the start', () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    view.displayNotes();
    notes = document.querySelectorAll('div.note');

    expect(notes.length).toBe(0);
  });

  it('displays one note after adding one', () => {
    const model = new NotesModel;
    model.addNote('Buy groceries');
    const view = new NotesView(model);
    
    view.displayNotes();
    notes = document.querySelectorAll('div.note');

    expect(notes.length).toBe(1);
    expect(notes[0].textContent).toBe('Buy groceries');
  });

  it('displays two notes after adding two', () => {
    const model = new NotesModel;
    model.addNote('Buy groceries');
    model.addNote('Go for a run');
    const view = new NotesView(model);
    
    view.displayNotes();
    notes = document.querySelectorAll('div.note');

    expect(notes.length).toBe(2);
    expect(notes[0].textContent).toBe('Buy groceries');
    expect(notes[1].textContent).toBe('Go for a run');
  });
});
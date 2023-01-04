/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { isReadable } = require('stream');
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

  it('displays a note after the user types it and clicks the button', () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    
    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Buy pasta';

    const buttonEl = document.querySelector('#add-note-btn');
    buttonEl.click();
    
    notes = document.querySelectorAll('div.note');

    expect(notes.length).toBe(1);
    expect(notes[0].textContent).toBe('Buy pasta');
  });

  it('displays a note after the user types it and clicks the button', () => {
    const model = new NotesModel;
    const view = new NotesView(model);
    
    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Buy pasta';
    const buttonEl = document.querySelector('#add-note-btn');
    buttonEl.click();
    
    inputEl.value = 'Exercise';
    buttonEl.click();

    notes = document.querySelectorAll('div.note');

    expect(notes.length).toBe(2);
  });
});
/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { isReadable } = require('stream');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');

// create jest automatic mocks of the model and client classes
jest.mock('./notesModel');
jest.mock('./notesClient');

describe('notesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // clear mocks before each test
    NotesModel.mockClear();
    NotesClient.mockClear();
  });

  // it('displays 0 notes at the start', () => {
  //   const model = new NotesModel;
  //   const view = new NotesView(model);
  //   view.displayNotes();
  //   notes = document.querySelectorAll('div.note');

  //   expect(notes.length).toBe(0);
  // });

  // it('displays one note after adding one', () => {
  //   const model = new NotesModel;
  //   model.addNote('Buy groceries');
  //   const view = new NotesView(model);
    
  //   view.displayNotes();
  //   notes = document.querySelectorAll('div.note');

  //   expect(notes.length).toBe(1);
  //   expect(notes[0].textContent).toBe('Buy groceries');
  // });

  // it('displays two notes after adding two', () => {
  //   const model = new NotesModel;
  //   model.addNote('Buy groceries');
  //   model.addNote('Go for a run');
  //   const view = new NotesView(model);
    
  //   view.displayNotes();
  //   notes = document.querySelectorAll('div.note');

  //   expect(notes.length).toBe(2);
  //   expect(notes[0].textContent).toBe('Buy groceries');
  //   expect(notes[1].textContent).toBe('Go for a run');
  // });

  // it('displays a note after the user types it and clicks the button', () => {
  //   const model = new NotesModel;
  //   const view = new NotesView(model);
    
  //   const inputEl = document.querySelector('#add-note-input');
  //   inputEl.value = 'Buy pasta';

  //   const buttonEl = document.querySelector('#add-note-btn');
  //   buttonEl.click();
    
  //   notes = document.querySelectorAll('div.note');

  //   expect(notes.length).toBe(1);
  //   expect(notes[0].textContent).toBe('Buy pasta');
  // });

  // it('displays a note after the user types it and clicks the button', () => {
  //   const model = new NotesModel;
  //   const view = new NotesView(model);
    
  //   const inputEl = document.querySelector('#add-note-input');
  //   inputEl.value = 'Buy pasta';
  //   const buttonEl = document.querySelector('#add-note-btn');
  //   buttonEl.click();
    
  //   inputEl.value = 'Exercise';
  //   buttonEl.click();

  //   notes = document.querySelectorAll('div.note');

  //   expect(notes.length).toBe(2);
  // });

  it('fetches data (notes) from an API, then sets the notes in the model class', () => {
    // a jest automatic mock is made of NotesModel class, containing mocked methods of this class
    const mockModel = new NotesModel();
    // a jest automatic mock is made of NotesClient class, containing mocked methods of this class
    const mockClient = new NotesClient();
    const view = new NotesView(mockModel, mockClient);

    view.displayNotesFromAPI();
    
    // loadNotes
    expect(mockClient.loadNotes).toHaveBeenCalledTimes(1);
  })
});





// Mocking practice
  // it('fetches data (notes) from an API, then sets the notes in the model class', () => {
  //   const mockClient = {
  //     loadNotes: (callback) => {
  //       const data = { note: 'This note is coming from the server' };
  //       callback(data);
  //     }
  //   }

  //   const mockModel = {
  //     setNotes: jest.fn(),
  //     getNotes: jest.fn()
  //   }

  //   const view = new NotesView(mockModel, mockClient);

  //   view.displayNotesFromAPI();
    
  //   expect(mockClient.loadNotes).toHaveBeenCalledTimes(1);
  //   // expect(mockModel.setNotes).toHaveBeenCalledTimes(1);
  // })
class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#add-note-btn');
    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(document.querySelector('#add-note-input').value);
      this.displayNotes();
    })

  }

  displayNotes() {
    this.removeNotes();
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const newNote = document.createElement('div');
      newNote.classList.add('note');
      newNote.textContent = note;
      this.mainContainerEl.append(newNote);
    });
  }

  removeNotes() {
    const notes = document.querySelectorAll('div.note');
    notes.forEach(note => {
      note.remove();
    })
  }
}

module.exports = NotesView;
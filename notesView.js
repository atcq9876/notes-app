class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    this.addNoteButtonEl = document.querySelector("#add-note-btn");
    this.addNoteButtonEl.addEventListener("click", () => {
      this.client.createNote(document.querySelector("#add-note-input").value);
      this.displayNotesFromAPI();
    });

    this.resetNotesButtonEl = document.querySelector("#reset-notes-btn");
    this.resetNotesButtonEl.addEventListener("click", () => {
      this.resetAllNotes();
    })
  }

  displayNotes() {
    this.removeOldNotesWhenPopulatingPage();
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.textContent = note;
      this.client.emojify(note, (response) => {
        newNote.textContent = response.emojified_text;
      });
      newNote.classList.add("note");
      this.mainContainerEl.append(newNote);
    });
    document.querySelector("#add-note-input").value = "";
  }
  
  removeOldNotesWhenPopulatingPage() {
    const notes = document.querySelectorAll("div.note");
    notes.forEach((note) => {
      note.remove();
    });
  }

  displayNotesFromAPI() {
    this.client.loadNotes((data) => {
      this.model.setNotes(data);
      this.displayNotes();
    }, () => {
      this.displayError();
    });
  }

  displayError() {
    const errorMessage = document.createElement("div");
    errorMessage.id = "error"
    errorMessage.textContent = "Oops, something went wrong!"
    this.mainContainerEl.append(errorMessage);
  }

  resetAllNotes() {
    this.client.deleteNotes();
    this.displayNotesFromAPI();
  }
}

module.exports = NotesView;
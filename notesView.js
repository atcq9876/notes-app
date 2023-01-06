class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    this.buttonEl = document.querySelector("#add-note-btn");
    this.buttonEl.addEventListener("click", () => {
      this.client.createNote(document.querySelector("#add-note-input").value);
      // this.model.addNote(document.querySelector("#add-note-input").value);
      this.displayNotesFromAPI();
    });
  }

  displayNotes() {
    this.removeNotes();
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.classList.add("note");
      newNote.textContent = note;
      this.mainContainerEl.append(newNote);
    });
    document.querySelector("#add-note-input").value = "";
  }
  
    removeNotes() {
      const notes = document.querySelectorAll("div.note");
      notes.forEach((note) => {
        note.remove();
      });
    }

  displayNotesFromAPI() {
    this.client.loadNotes((data) => {
      this.model.setNotes(data);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;
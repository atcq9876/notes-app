class NotesClient {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      // response = the data fetched from the above URL
      // this is then transformed into a JS-friendly object using json()
      .then((response) => response.json())
      // data = the JS-friendly object made by json() above
      // the callback passed to loadNotes is then called on this data
      // this callback function can be seen in displayNotesFromAPI() in notesView
      .then((data) => callback(data));
  }
}

module.exports = NotesClient;

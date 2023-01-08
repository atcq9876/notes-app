class NotesClient {
  loadNotes(mainCallback, errorCallback) {
    fetch("http://localhost:3000/notes")
      // response = the data fetched from the above URL
      // this is then transformed into a JS-friendly object using json()
      .then((response) => response.json())
      // data = the JS-friendly object made by json() above
      // the callback passed to loadNotes is then called on this data
      // this callback function can be seen in displayNotesFromAPI() in notesView
      .then((data) => mainCallback(data))
      .catch((error) => {
        console.error('Error:', error);
        errorCallback();
      });
  }

  emojify(note, callback) {
    fetch("https://makers-emojify.herokuapp.com/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: note }),
    })
      .then((response) => response.json())
      .then((data) => { callback(data) });
  }

  createNote(note, errorCallback) {
    const noteData = { content: note };

    fetch("http://localhost:3000/notes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        errorCallback();
      });
  }
}

module.exports = NotesClient;


// post request with fetch:
  // const data = { username: 'example' };

  // fetch('https://example.com/profile', {
  //   method: 'POST', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('Success:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
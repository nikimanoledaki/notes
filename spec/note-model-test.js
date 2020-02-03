(function(exports) {
  function testNoteTakesText() {
    var note = new Note()
    note.insertText('My favourite language is JavaScript')

    if (note.text !== 'My favourite language is JavaScript') {
      throw new Error("Assertion is not truthy")
    } else {
      console.log("Test passes")
    }
  };

  testNoteTakesText();
})(this);

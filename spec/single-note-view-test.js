

(function TestSingleNoteViewInstantiation() {
  var noteView = new NoteView()

  assert.isTrue(noteView.note instanceof Note)
  
})();

(function TestReturnString() {
  var note = new Note()
  note.insertText("Favourite drink: seltzer")
  var noteView = new NoteView(note)
  assert.isTrue(noteView.returnString() === "<div>Favourite drink: seltzer</div>")

})();
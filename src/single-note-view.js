'use strict';

(function(exports) {
  function NoteView(note = new Note()) {
    this.note = note;
    this.text = note.text;
}

NoteView.prototype.returnString = function() {
  var string = "<div>" + this.text + "</div>"
  return string
}





exports.NoteView = NoteView
})(this);
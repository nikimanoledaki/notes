'use strict';

(function(exports) {
  function Note() {
    this.text = null
  }

  Note.prototype.insertText = function(text) {
    this.text = text
  }

  exports.Note = Note;
})(this)

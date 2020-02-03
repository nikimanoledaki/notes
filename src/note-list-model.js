'use strict';

(function(exports) {
  function List() {
    this.array = []
    this.note = new Note()
  }

  List.prototype.newNote = function(text) {
    this.note.insertText(text)
    this.array.push(this.note.text)
  }

  exports.List = List;
})(this)

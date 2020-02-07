'use strict';

(function(exports) {
  function Controller() {
    this.list = new List()
    this.view = new View(this.list)
  }

  Controller.prototype.addNote = function(text) {
    this.list.newNote(text)
  }

  Controller.prototype.createString = function() {
    return (this.view.createString())
  }

  Controller.prototype.printApp = function(doc = document) {
    var string = this.createString()
    document.getElementById('app').innerHTML = string
  }

  // Controller.prototype.printSingleNote = function(note) {
  //   window.addEventListener("hashchange", function() {
  //     var noteView = new NoteView(note)
  //     return noteView()
  //   })
  // }

  exports.Controller = Controller
})(this);

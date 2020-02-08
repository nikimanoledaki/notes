'use strict';

(function(exports) {
  function Controller(doc = document) {
    this.list = new List()
    this.view = new View(this.list)
    this.document = doc
  }

  Controller.prototype.addNote = function(text) {
    return (this.list.newNote(text))
  }

  Controller.prototype.createString = function() {
    return (this.view.createString())
  }

    Controller.prototype.printDiv = function(divId = 'app') {
    var string = this.createString()
    this.document.getElementById(divId).innerHTML = string
  }

  // Url Change
  
  Controller.prototype.makeUrlChangeShowNoteOnCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteOnCurrentPage());
  }

  Controller.prototype.showNoteOnCurrentPage = function() {
    this.showNote(this.getIDFromUrl(window.location));
  }

  Controller.prototype.getIDFromUrl = function(location) {
    return location.hash.split("#")[1];
  }

  Controller.prototype.showNote = function(noteId) {
    console.log(this.list.array[noteId])
    var string = this.list.array[noteId].text
    this.document.getElementById('note').innerHTML = string
  }

  exports.Controller = Controller
})(this);

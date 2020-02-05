'use strict';

(function(exports) {
  function View() {
    this.array = null
    this.string = null
  }

  View.prototype.inputList = function(noteList) {
    this.array = noteList.array
  }

  View.prototype.createString = function() {
    return this.string = '<ul><li><div>' + this.array.join('</div></li><li><div>') + '</div></li></ul>'
  }
  
  exports.View = View
})(this)

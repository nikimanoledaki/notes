'use strict';

(function(exports) {
  function View() {
    this.array = null
    this.string = null
  }

  View.prototype.inputList = function(list) {
    this.array = list
  }

  View.prototype.createString = function() {
    this.string = '<ul><li><div>' + this.array.join('</div></li><li><div>') + '</div></li></ul>'
  }
  
  exports.View = View
})(this)

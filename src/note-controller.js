(function(exports) {
  function printApp() {
    document
            .getElementById('app')
            .innerHTML = "Howdy"
    console.log(document.getElementById('app'))
  }
  exports.printApp = printApp
})(this);

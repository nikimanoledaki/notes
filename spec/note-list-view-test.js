(function(exports){
  function testReturnsHTMLList() {
    var list = new List()
    list.newNote("Favourite food: pesto")
    list.newNote("Favourite drink: seltzer")

    var view = new View();
    view.inputList(list)
    view.createString()

    if (view.string !== "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>") {
      throw new Error("Assertion is not truthy")
    } else {
      console.log("Test passes")
    }
  }
  
  
  testReturnsHTMLList();
})(this);

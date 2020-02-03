(function(exports) {
  function testArrayReturnsNotes() {
    var list = new List();
    list.newNote("Favourite drink: seltzer")
    
    if (list.array[0] !== 'Favourite drink: seltzer') {
      throw new Error("Assertion is not truthy")
    } else {
      console.log("Test passes")
    }
  }
  
  testArrayReturnsNotes();  
})(this);

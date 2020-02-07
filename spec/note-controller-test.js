(function TestControllerInitiation() {
  var controller = new Controller()

  assert.isTrue(controller.view instanceof View)
  assert.isTrue(controller.list instanceof List)
})();

(function TestControllerAddsNote() {
  var controller = new Controller()
  controller.addNote("Hi")

  assert.isTrue(controller.list.array[0].text === "Hi")
})();

(function TestControllerInputsArray() {
  var controller = new Controller()
  controller.addNote("Hi")

  assert.isTrue(controller.list.array.length === 1)
  assert.isTrue(controller.list.array[0].text === "Hi")
})();

(function TestControllerCreatesString() {
  var controller = new Controller()
  controller.addNote("Hi")

  assert.isTrue(controller.createString() === "<ul><li><div><a href='#0'>Hi</a></div></li></ul>")
})();

(function TestControllerPrintsString() {
  var controller = new Controller()
  controller.addNote("Test")

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printApp();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();

(function TestControllerMocksDocument() {
  var controller = new Controller()
  controller.addNote("Test")

  var fakeDiv = {
    innerHTML: ""
  }
  
  var fakeDocument = {
    getElementById: function() {
      return fakeDiv
    }
  }
  
  controller.printApp(fakeDocument)

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printApp();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();

// (function TestsUrlChange() {
//   var controller = new Controller()
//   controller.addNote("123456789012345678901234567890a")

//   var element = document.createElement('div');
//   element.setAttribute('id', 'app');
//   document.getElementById('app').click();

//   assert.isTrue(document.getElementById('app'.innerHTML.includes("123456789012345678901234567890a")))
// })();

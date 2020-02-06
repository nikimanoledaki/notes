(function TestControllerInitiation() {
  var controller = new Controller()

  if (!(controller.view instanceof View) || !(controller.list instanceof List)) {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }

})();

(function TestControllerAddsNote() {
  var controller = new Controller()
  controller.addNote("Hi")

  if (controller.list.array[0] !== "Hi") {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }
})();

(function TestControllerInputsArray() {
  var controller = new Controller()
  controller.addNote("Hi")
  controller.inputArray()

  if (controller.view.array.length !== 1) {
    throw new Error("Assertion is not truthy")
  } else if (controller.view.array[0] !== "Hi") {
    throw new Error("Assertion is not truthy")
  } 
  else {
    console.log("Test passes")
  }
})();

(function TestControllerCreatesString() {
  var controller = new Controller()
  controller.addNote("Hi")
  controller.inputArray()

  if (controller.createString() !== "<ul><li><div>Hi</div></li></ul>") {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }
})();

(function TestControllerPrintsString() {
  var controller = new Controller()
  controller.addNote("Test")
  controller.inputArray()

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printApp();

  if (document.getElementById('app').innerHTML.includes("test")) {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }
})();

(function TestControllerMocksDocument() {
  var controller = new Controller()
  controller.addNote("Test")
  controller.inputArray()
  
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

  if (fakeDiv.innerHTML.includes("test")) {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }
})();

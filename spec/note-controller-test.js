(function TestControllerInitiation() {
  var controller = new Controller()

  if (!(controller.view instanceof View) || !(controller.list instanceof List)) {
    throw new Error("Assertion is not truthy")
  } else {
    console.log("Test passes")
  }

})()


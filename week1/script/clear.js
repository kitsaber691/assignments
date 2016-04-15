$("document").ready(function () {
  var submit = document.getElementById("submit");
  submit.addEventListener("click", numForm, false);
  function numForm(evt) {
    var entry = evt.target.getAttribute("value");
    var  valueOf
    console.log()
  }
  var reset = document.getElementById("reset");
  reset.addEventListener("click", clearForm, false);
  function clearForm(evt) {
    document.getElementsByTagName("form")[0].reset();
    console.log("Form has been reset.");
  }
});
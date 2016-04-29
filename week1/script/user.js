$("document").ready(function () {
  'use strict';
  var submit = document.getElementsByName("submit"), reset = document.getElementsByName("reset"), integer = document.getElementsByName("integer"), displayData = [];
  
  $(submit).click(function (event) {
    event.preventDefault();
    for (var i = 0; i < displayData.length; i++) {
      integer.value += displayData;
      console.log(displayData);
    }
  });
  
  $(reset).click(function (event) {
    event.preventDefault();
    document.getElementsByTagName("form")[0].reset();
    console.log("Form has been reset.");
  });
  
//  reset.addEventListener("click", clearForm, false);
//  function clearForm(evt) {
//    document.getElementsByTagName("form")[0].reset();
//    console.log("Form has been reset.");
//  }
});
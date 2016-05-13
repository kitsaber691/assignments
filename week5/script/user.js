$("document").ready(function () {
  'use strict';
  var dispVal = $("#formVal").prop();
  console.log(dispVal);
  document.getElementById("display-value").innerHTML(dispVal);
});
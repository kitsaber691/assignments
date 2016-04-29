$("document").ready(function () {
  'use strict';
  var textBox = document.getElementsByTagName("textarea")[0], submit = document.getElementsByName("submit"), reset = document.getElementsByName("reset"), textCollect = [], ints = /[0 - 9]/, addSum = ints.test(textBox.value), intTest = $.isNumeric(textBox.innerHTML);
  $(submit).click(function (event) {
    event.preventDefault();
    if (intTest === true) {
      for (var i = 0; i < textCollect.length; i++) {
        textBox.value += textCollect[i];
        console.log(textCollect[i])
      };
    } else {
      window.alert("Go away!")
    };
  });
});
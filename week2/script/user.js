$("document").ready(function () {
  var button = document.getElementsByName("submit");
  var list = document.getElementsByTagName("tbody")[0];
  var firstName = document.getElementsByName("fname").value;
  var lastName = document.getElementsByName("lname").value;
  var birthYear = document.getElementsByName("birth").value;
  var hogWarts = document.getElementsByName("house").value;
  function bio(fname, lname, birth, house) {
    this.firstName = fname;
    this.lastName = lname;
    this.birthYear = birth;
    this.hogWarts = house;
  }
  var formData = [];
  var cell = document.createElement("td");
  $(button).click(function (event) {
    event.preventDefault();
    formData.push(bio());
    for (var i = 0; i < formData.length; i++){
      $("tbody").append("tr");
    };
    var listRow = ('<td>'+bio.firstName+'</td>'+'<td>'+bio.lastName+'</td>'+'<td>'+bio.birthYear+'</td>'+'<td>'+bio.hogWarts+'</td>');
    $("tr").append(listRow)
  });
});
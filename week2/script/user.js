$("document").ready(function () {
  var button = document.getElementsByName("submit"), list = document.getElementsByTagName("tbody")[0], firstName = document.getElementsByName("fname").value, lastName = document.getElementsByName("lname").value, birthYear = document.getElementsByName("birth").value, hogWarts = document.getElementsByName("house").value, formData = [], cell = document.createElement("td");
  function bio(fname, lname, birth, house) {
    this.firstName = fname;
    this.lastName = lname;
    this.birthYear = birth;
    this.hogWarts = house;
  }
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
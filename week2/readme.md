# Week 2 - Javascript Refresher

## Objects

Objects are collections of properties in `name:value` pairs. Objects are delineated by curly brackets, with properties separated by commas. Names **must** be strings, but values can be absolutely anything.

### Methods

Remember how property values of objects don't require a specific data type? Methods have "normal" names (i.e. strings), but their values are functions!

* Note: while methods are defined as `nameofFunction: function() {}`, invocation code is normal JavaScript syntax
* `nameOfFunction: function() {}` does the same thing as `function nameOfFunction() {}`

## Homework

Create a list of objects to to populate a "database" (in this case, a table). Display the data with one object per row, and one property per cell.

### Hints
General coding

* Append content to table using arrays and jQuery
* Two divs - one table and one form
  * Section tag instead of div?
* Function that creates table row for each object in array
* Table's visibility has to change on the page

Considerations for `<table>`

* Add row vs. complete refresh

Extra Credit (Optional)

* Remove table data - splice and pop
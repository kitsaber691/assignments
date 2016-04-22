# Week 3 - JavaScript Arrays
## Review of Previous Assignment
### jQuery

Which version to use?

* Minimized version for deployment (via CDN)
* Uncompressed/development version while coding
  * Save local copy of development version if you're working offline
  
### Further Coding Resources

Mozilla Developer Network

* Documentation on how standards are meant to be used

### Coding tips

Arrays

* Create empty array to store captured form data
  
Adding new items (as objects in jQuery)

* Set inital text value of each field as blank
  * `.hide()` and `.show()` methods to control visibility
  * `.val()` will add input values from form fields to object properties
  * `empty()` clears content from the table body

Pushing items to array/updating display (`for` loop)

* Store length of array as variable
* Create/define `<tr>` and `<td>` elements using either jQuery selectors or `createElement()` function
  * Avoid typing lines of HTML code for use as strings!
    
Display the content!

* jQuery event handlers - `$("body").on("click", addItemFunction)`
* Modifies table body by adding form data after clicking the submit button

## Arrays

Arrays can be seen as a type of object. Property "names" are integers and referred to as keys. Property values can be any type of data, just like objects in general.

* Array literals are preferred JS syntax
* Because `name` is always an integer, people will often talk about array indexes
  * **Note:** by default, arrays have zero-based indexes
  
### Unexpected Results

Undefined, Null, and Not a Number

* If an object/array pair does not include a value, JavaScript will return produce an `undefined` error
* Empty objects/arrays with neither names nor values gives you `null`
  * Fun article on people who are unfortunate enough to have Null as their last name, courtesty of [Wired](http://www.wired.com/2015/11/null/).

### Array Methods

Listed at [W3Schools](http://www.w3schools.com/js/js_array_methods.asp).

* Notables: `pop`, `push`, `splice`, `map`
* Specific to arrays - will not work with objects!

## Assignment 3 - Numbers and Strings

Components

* Basic webpage with `<input type="textarea">`
  * Submit and Reset buttons below form
* Each time the user clicks Submit, check whether the text entry is a number or a string
  * If number, then need to display submission quantity, and sum and mean of all entries
  * Strings should be concantenated
* CSS is a bonus
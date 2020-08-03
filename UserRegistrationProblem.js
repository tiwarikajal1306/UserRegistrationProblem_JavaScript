console.log("Welcome to User Registration Problem");
let prompt = require('prompt-sync')();

let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const name = prompt('Enter first name');

let checkFirstName = firstNameRegex.test(name);

if(checkFirstName == true)
   console.log("FirstName is valid");
else
   console.log("FirstName is Ivalid name");



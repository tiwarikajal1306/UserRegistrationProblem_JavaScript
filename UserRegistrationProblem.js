console.log("Welcome to User Registration Problem");
let prompt = require('prompt-sync')();

let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const firstName = prompt('Enter first name');

let checkFirstName = firstNameRegex.test(firstName);

if(checkFirstName == true)
   console.log("FirstName is valid");
else
   console.log("FirstName is Ivalid name");

let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const lastName = prompt('Enter last name');

let checkLastName = lastNameRegex.test(lastName);

if(checkLastName == true)
   console.log("LastName is valid");
else
   console.log("LastName is Ivalid name");

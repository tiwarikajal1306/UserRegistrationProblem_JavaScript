console.log("Welcome to User Registration Problem");
let prompt = require('prompt-sync')();

let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
let firstName = prompt('Enter first name');

let checkFirstName = firstNameRegex.test(firstName);

if(checkFirstName == true)
   console.log("FirstName is valid");
else
   console.log("FirstName is Ivalid name");

let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
let lastName = prompt('Enter last name');

let checkLastName = lastNameRegex.test(lastName);

if(checkLastName == true)
   console.log("LastName is valid");
else
   console.log("LastName is Ivalid name");

let mailRegex = RegExp("^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$");
let mail = prompt('Enter Email')

let checkEmail = mailRegex.test(mail);

if(checkEmail == true)
        console.log("valid mail");
else
        console.log("Invalid mail");

let mobileRegex = RegExp("^[1-9]{2,5}[\ ]{1}[1-9]{1}[0-9]{9}$")
let mobileNumber = prompt('Enter mobile number')

let checkNumber = mobileRegex.test(mobileNumber);

if(checkNumber == true)
        console.log("valid mobile Number");
else
        console.log("Invalid mobile Number");


let passwordRegexOfCharacterLimit = RegExp("^[0-9 a-z A-Z \! \@ \#\$\%\^\&\*]{8,}$");
let password = prompt('Enter password');

let checkPassword = passwordRegexOfCharacterLimit.test(password)

if(checkPassword == true)
        console.log("valid password");
else
        console.log("Invalid password");

let passwordRegexContainUpperCaseLetter = RegExp("(?=.*[A-Z])[a-zA-Z]{8,}");
let password1 = prompt('Enter password');

let checkPassword1 = passwordRegexContainUpperCaseLetter.test(password1)

if(checkPassword1 == true)
        console.log("valid password");
else
        console.log("Invalid password");

let passwordRegexContainNumericNumber = RegExp("^(?=.*[A-Z])(?=.*[0-9])([A-z0-9]){8,}$");
let password2 = prompt('Enter password');

let checkPassword2 = passwordRegexContainNumericNumber.test(password2)

if(checkPassword2 == true)
        console.log("valid password");
else
        console.log("Invalid password");

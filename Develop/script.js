// Assignment code here

var lChar = ("abcdefghijklmnopqrstuvwxyz");
var uChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var num = ("0123456789");
//num = num.split("");
var sym = ("!@#$%^&*()'/-_=+{[}],.<>?|\"\\");
// clicking the button generates prompts

//set each prompt value to a variable


function generatePassword() {
  var passwordOptions = [];
  var passwordLength = window.prompt("How long will your password be? Please enter a value between 8 and 128.");

// 1)whenever you get input check it for errors. (if password length is >128 or <8)

var passwordQuestions2 = window.confirm("Will your password include lower case letters?"); //if is true push into an array
if (passwordQuestions2) {
    passwordOptions.push("lower");
}

var passwordQuestions3 = window.confirm("Will your password include Upper case letters?");
if (passwordQuestions3) {
  passwordOptions.push("upper");
}
var passwordQuestions4 = window.confirm("Will your password include numbers?");
if (passwordQuestions4) {
    passwordOptions.push("number");
}
var passwordQuestions5 = window.confirm("Will your password include symbols?");
if (passwordQuestions5) {
    passwordOptions.push("symbol");
}
console.log(passwordOptions);
}



// prompts ask for password criteria

// password length = 8-128



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
if (generateBtn) {
  var password = generatePassword(); //this needs to return a string
  writePassword(password);
}

// Write password to the #password input
function writePassword(password) { 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


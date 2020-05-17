// Assignment code here
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '\'', '`', '{', '|', '}', '~', '"', '\\'];

function generatePassword() {
  var passwordOptions = [];
  var passwordLength = 0; 
  var newPassword = "";
  

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("How long will your password be? Please enter a value between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128)  {
      window.alert("This is not a valid answer. Please enter a value between 8 and 128.");
    }
  }

  // if confirm is true, an array will be added to passwordOptions
  while (passwordOptions.length === 0) {
    var optionLower = window.confirm("Will your password include lower case letters? Click 'OK' for yes and 'Cancel' for no."); 
    if (optionLower) {
      passwordOptions.push(lower);
    }

    var optionUpper = window.confirm("Will your password include upper case letters? Click 'OK' for yes and 'Cancel' for no."); 
    if (optionUpper) {
      passwordOptions.push(upper);
    }

    var optionNum = window.confirm("Will your password include numbers? Click 'OK' for yes and 'Cancel' for no."); 
    if (optionNum) {
      passwordOptions.push(number);
    }

    var optionSym = window.confirm("Will your password include symbols? Click 'OK' for yes and 'Cancel' for no."); 
    if (optionSym) {
      passwordOptions.push(symbols);
    }
    if (passwordOptions.length === 0) {
      window.alert("No character types were selected. Please select at least one character type for your password.");
      
    }
    
      //for random password option array choice. 
      for(var i = 0; i < passwordLength; i++){
        var randomArray = passwordOptions[Math.floor(Math.random()* passwordOptions.length)];
        newPassword += randomArray[Math.floor(Math.random()* randomArray.length )];

      }
    }
    
    return newPassword;
  }

  //prompt validation

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

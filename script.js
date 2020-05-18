// Assignment code here
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '\'', '`', '{', '|', '}', '~', '"', '\\'];

function generatePassword() {
  var passwordOptions = [];
  var passwordLength = 0; 
  var newPassword = "";
  var verifyLower = "lower case letters ";
  var verifyUpper = "upper case letters ";
  var verifySym = "symbols/ special characters ";
  var verifyNum = "numbers ";
  var verifyArray =[];
  var notReady = true;

//the conditions of this while loop should prevent all invalid answers and direct the user to make a valid choice.
  while (notReady) {
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      passwordLength = window.prompt("How long will your password be? Please enter a value between 8 and 128.");
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))  {
        window.alert("This is not a valid answer. Please enter a value between 8 and 128.");
      }
    }
    
    // these reset the arrays to blank and remove any pass inputs.
    passwordOptions = [];
    verifyArray = [];
    // if confirm is true, an array will be added to passwordOptions array.
    while (passwordOptions.length === 0) {
      var optionLower = window.confirm("Will your password include lower case letters? Click 'OK' for yes and 'Cancel' for no."); 
      if (optionLower) {
        passwordOptions.push(lower);
        verifyArray.push(verifyLower);
      }

      var optionUpper = window.confirm("Will your password include upper case letters? Click 'OK' for yes and 'Cancel' for no."); 
      if (optionUpper) {
        passwordOptions.push(upper);
        verifyArray.push(verifyUpper);
      }

      var optionNum = window.confirm("Will your password include numbers? Click 'OK' for yes and 'Cancel' for no."); 
      if (optionNum) {
        passwordOptions.push(number);
        verifyArray.push(verifyNum);
      }

      var optionSym = window.confirm("Will your password include symbols/special characters? Click 'OK' for yes and 'Cancel' for no."); 
      if (optionSym) {
        passwordOptions.push(symbols);
        verifyArray.push(verifySym);
      }
      // conditions of this statement prevent the user from making no choice and they will be directed to try making another password.
      if (passwordOptions.length === 0) {
        window.alert("No character types were selected. Please select at least one character type for your new password.");
      }
      else if (window.confirm("Your password will be " + passwordLength + " characters long and will contain " + verifyArray + ". Does that look right? Click 'OK' to get your password and click 'Cancel' to change your criteria.")){
        notReady = false;
      } else {
        passwordLength = 0;
      }
    }
  }
  //for loop that creates a random password from the array choice. 
  //The conditions of this for loop create a new 'digit' for the password as long as they don't exceed passwordLength and prevent a password from being generated if there is nothing in the array 'passwordOptions'
  for(var i = 0; i < passwordLength && passwordOptions.length > 0 ; i++){
    var randomArray = passwordOptions[Math.floor(Math.random()* passwordOptions.length)];
    newPassword += randomArray[Math.floor(Math.random()* randomArray.length )];
  }
    
  return newPassword;
}

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

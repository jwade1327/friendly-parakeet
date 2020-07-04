// Assignment code here

// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "-", "+", "~"];
var passwordLength;
var passwordArray = [];

// Prompt for password length
function generatePassword() {
  passwordLength = parseInt(prompt("How many characters would you like for your password?"));
    while (passwordLength <= 8 || passwordLength >= 128) {
      window.alert("Incorrect number of characters for your password. Enter a number between 8-128.");
      passwordLength = parseInt(prompt("How many characters would you like for your password?"));
    }
  window.alert("OK. Your password will have " + passwordLength + " characters.");

  var hasLowerCase = confirm("Your password must contain a lower case character. Click OK.");
  var hasUpperCase = confirm("Your password must contain an upper case character. Click OK.");
  var hasNumber = confirm("Your password must contain a number. Click OK.");
  var hasSpecialCharacter = confirm("Your password must contain a special character. Click OK.");
}

  var passwordRequirements = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter
  }

  return passwordRequirements;

  function randomPassword(array) {
    var random = Math.floor(Math.random() * array.length);
    var random1 = array[random];
  
    return random1;
  }



  for (i = 0; i < passwordLength; i++) {
    passwordArray.push(randomPassword(lowerCase));
    passwordArray.push(randomPassword(upperCase));
    passwordArray.push(randomPassword(number));
    passwordArray.push(randomPassword(specialCharacter));
    
  }

  console.log(passwordArray);
  

};
  
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

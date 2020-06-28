// Assignment code here
// Array Options
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "~", "/", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ".", "-", "?"];

// Prompt for password length
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like for your password?"));
  while (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("Incorrect number of characters for your password. Enter a number between 8-128.");
    var passwordLength = (prompt("How many characters would you like for your password?"));
  }

  window.alert("OK. Your password will have " + passwordLength + " characters.");
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

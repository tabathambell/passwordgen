// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var smolChars = "abcdefghijklmnopqrstuvwxyz";
  var bigchungusChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var mahdigitsChars = "0123456789"
  var specialChars = "!@#$%^&*,.()_+?<>:{}[]"
  var passwordLength = 20;
  var password = "";
  var passwordText = document.querySelector("#password");

  for (var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
    document.getElementById("password").value = password
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// used different variable names to help myself remember
function writePassword() {
  var smolChars = "abcdefghijklmnopqrstuvwxyz";
  var bigchungusChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var mahdigitsChars = "0123456789";
  var specialChars = "!@#$%^&*,.()_+?<>:{}[]";
  
  var passwordLength = window.prompt("Please enter a password length.");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128.");
    return;
  }

  var confirmSmol = confirm("Do you want lowercase characters in your password?");
  var confirmBigchungus = confirm("Do you want uppercase characters in your password?");
  var confirmMahdigits = confirm("Do you want digits in your password?");
  var confirmSpecial = confirm("Do you want special characters in your password?");

  if (!confirmSmol && !confirmBigchungus && !confirmMahdigits && !confirmSpecial) {
    alert("You have to have SOMETHING in your password!");
    return;
  }

  var password = "";
  var passwordText = document.querySelector("#password");

  var chars = "";
  if (confirmSmol) {
    chars += smolChars;
  }

  if (confirmBigchungus) {
    chars += bigchungusChars;
  }

  if (confirmMahdigits) {
    chars += mahdigitsChars;
  }

  if (confirmSpecial) {
    chars += specialChars;
  }

  while (badPassword) {
    var hasSmol = false;
    var hasBigchungus = false;
    var hasMahdigits = false;
    var hasSpecial = false;
    var badPassword = false;
    password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }  

  for (var j = 0; j < password.length; j++) {
    var character = pasword.substring(j, j + 1);
    if (smolChars.includes(character)) {
      hasSmol = true;
    }
    if (bigchungusChars.includes(character)) {
      hasBigchungus = true;
    }
    if (mahdigitsChars.includes(character)) {
      hasMahdigits = true;
    }
    if (specialChars.includes(character)) {
      hasSpecial = true;
    }
  }

  badPassword =
    (confirmSmol && !hasSmol) ||
    (confirmBigchungus && !hasBigchungus) ||
    (confirmMahdigits && !hasMahdigits) ||
    (confirmSpecial && !hasSpecial);
}

    document.getElementById("password").value = password
};

// Add event listener to generate button
generateBtn.addEventListener("onMouseUp", writePassword);
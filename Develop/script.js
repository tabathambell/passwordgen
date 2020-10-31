// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// used different variable names to help myself remember
function writePassword() {
  // define character sets
  var smolChars = "abcdefghijklmnopqrstuvwxyz";
  var bigchungusChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var mahdigitsChars = "0123456789";
  var specialChars = "!@#$%^&*,.()_+?<>:{}[]";
  
  // get password length from user
  var passwordLength = window.prompt("Please enter a password length.");

  // verify password length is valid
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128.");
    return;
  }

  // confirm what kinds of characters the user wants in the password
  var confirmSmol = confirm("Do you want lowercase characters in your password?");
  var confirmBigchungus = confirm("Do you want uppercase characters in your password?");
  var confirmMahdigits = confirm("Do you want digits in your password?");
  var confirmSpecial = confirm("Do you want special characters in your password?");

  // ensure the user has made at least one selection
  if (!confirmSmol && !confirmBigchungus && !confirmMahdigits && !confirmSpecial) {
    alert("You have to have SOMETHING in your password!");
    return;
  }

  var password = "";

  // construct a master string containing all wanted characters for the password
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

  // check if the generated password is bad (doesn't contain at least one of each type of character the user asked for and generator a new one if it is)
  while (badPassword) {
    var hasSmol = false;
    var hasBigchungus = false;
    var hasMahdigits = false;
    var hasSpecial = false;
    var badPassword = false;
    password = "";

  // generate a random password
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }  

  // check the password, one character at a time to test for each character type
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

  //determine if the password is bad
  badPassword =
    (confirmSmol && !hasSmol) ||
    (confirmBigchungus && !hasBigchungus) ||
    (confirmMahdigits && !hasMahdigits) ||
    (confirmSpecial && !hasSpecial);

    console.log("Password generated: " + password);
    console.log("Bad password? " + badPassword);
}

    document.getElementById("password").value = password
};

// Add event listener to generate button
generateBtn.addEventListener("onMouseUp", writePassword);
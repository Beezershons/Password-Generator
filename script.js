// Assignment Code
var generateBtn = document.querySelector("#generate");
var options = ["Y", "N", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

// Write password to the #password input
function generatePassword() {
  // Asks user a series of questions to set parameters for the generated password
  var userChoiceCap = window.prompt("Do you want capital letters? Enter Y or N:");
  var userChoiceNum = window.prompt("Do you want your password to contain numbers? Enter Y or N:");
  var userChoiceSpec = window.prompt("Do you want your password to contain special characters? Enter Y or N:");
  var userChoiceLen = window.prompt("How long do you want your Password to be? Choose a number 8-20:");
  
  // if cancle is pressed, ends function
  if (!userChoiceCap) {
    return;
  }
  
  // Converts to upercase
  userChoiceCap = userChoiceCap.toUpperCase();
  userChoiceNum = userChoiceNum.toUpperCase();
  userChoiceSpec = userChoiceSpec.toUpperCase();

  // if user presses Y will generate password with no caps
  if (userChoiceCap == "Y") {
    var charsetLet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    var charsetLet = "abcdefghijklmnopqrstuvwxyz";
  }

  // if user presses Y will generate password with no numbers
  if (userChoiceNum == "Y") {
    var charsetNum = "1234567890";
  }
  else {
    var charsetNum = "";
  }

  // if user presses Y will generate password with no special characters
  if (userChoiceSpec == "Y") {
    var charsetSpec = "!@#$%^&*?";
  }
  else {
    var charsetSpec = "";
  }

  // combines all strings into one variable
  var charsetAll = charsetLet.concat(charsetNum, charsetSpec);
  // sets the length of the password
  var length = userChoiceLen;

  // Randomly selects from the string to create a password
  retVal = "";
  for (var i = 0, n = charsetAll.length; i < length; ++i) {
    retVal += charsetAll.charAt(Math.floor(Math.random() * n));

  }
  return retVal;
  

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
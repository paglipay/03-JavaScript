// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

  var desiredPassLen = 0;
  while ((desiredPassLen > 7 && desiredPassLen < 129) == false) {
    desiredPassLen = prompt('What is the desired length of password? Choose a length of at least 8 characters and no more than 128 characters.');
  }

  var numeric = confirm('include numeric in the password?');
  var lowercase = confirm('include lowercase in the password?');
  var uppercase = confirm('include uppercase in the password?');
  var scharacters = confirm('include special characters in the password?');
  var finalCharset = ''
  var charSet = 'abcdefghijklmnopqrstuvwxyz';
  var sCharSet = "!\"#$%" + String.fromCharCode(38) + "'()*+,-./:;" + String.fromCharCode(60) + "=>?@[\\]^_`{|}~";
  var numericSet = '0123456789';

  if (numeric) {
    finalCharset += numericSet
  }
  if (lowercase) {
    finalCharset += charSet
  }
  if (uppercase) {
    finalCharset += charSet.toUpperCase();
  }
  if (scharacters) {
    finalCharset += sCharSet
  }

  var password = generatePassword(finalCharset, parseInt(desiredPassLen));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Write password to the #password input
function generatePassword(charset, len) {
  var result = "";
  for (var i = 0; i < len; i++)
    result += charset[randomInt(charset.length)];
  return result;
}

// Returns a random integer in the range [0, n) using a variety of methods.
function randomInt(n) {
  return Math.floor(Math.random() * n); // returns a random integer from 0 to length of char set
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

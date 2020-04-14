// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

  var desiredPassLen = prompt('What is the desired length of password?');

  var password = generatePassword('abc', parseInt(desiredPassLen));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Write password to the #password input
function generatePassword(charset, len) {
  //alert('generatePassword');
	var result = "";
	for (var i = 0; i < len; i++)
		result += charset[randomInt(charset.length)];
	return result;
}

// Returns a random integer in the range [0, n) using a variety of methods.
function randomInt(n) {
  return Math.floor(Math.random() * n) + 0; // returns a random integer from 1 to 100
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

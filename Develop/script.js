// These are the varibles for the passwords 

const passwordStringInput = {
lowerAlpha: "abcdefghijklmnopqrstuvwxyz",
upperAlpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers: "0123456789",
symbols: "!@#$%^&*_-+=",
};

// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("Hehehe I have been CLICKED!"); // This allows me to test the function to determine that I have an output
var passwordSelection = "";
  
var length = window.prompt("How long do you want your password to be? Please choose between 8 and 128 characters long.");


if (length < 8 || length > 128) { //This is what terminates the function if they fail to pick a number between 8 and 128
 window.confirm("Please choose a number between 8 and 128");
 return;
} else 

console.log(length);

var lowercase = window.confirm("Do you want lowercase characters?"); 
if (lowercase) {
  passwordSelection += passwordStringInput.lowerAlpha;
};

var uppercase = window.confirm("Do you want uppercase characters?");
if (uppercase) {
  passwordSelection += passwordStringInput.upperAlpha;
};

var numeric = window.confirm("Do you want numbers?");
if (numeric) {
  passwordSelection += passwordStringInput.numbers;
};

var specialSymbols = window.confirm("Do you want special characters?");
if (specialSymbols) {
  passwordSelection += passwordStringInput.symbols;
};

var password = "";
for (let i = 0; i < length; i++) {
  password += passwordSelection[Math.floor(Math.random() * passwordSelection.length)]
}
  
return password; // This is what returns ther password to the HTML password ID
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

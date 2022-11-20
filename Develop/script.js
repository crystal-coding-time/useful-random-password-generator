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
console.log(length);

var lowercase = window.confirm("Do you want lowercase characters?"); 
if (lowercase) {
  passwordSelection += passwordStringInput.lowerAlpha;
};

var uppercase = window.confirm("Do you want uppercase characters?");
if (uppercase) {
  passwordSelection += passwordStringInput.upperAlpha;
};



  
return "Generated password will go Here!"; // This is what returns ther password to the HTML password ID
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

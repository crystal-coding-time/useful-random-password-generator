// These are the varibles for the passwords 

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hehehe I have been CLICKED!"); // This allows me to test the function to determine that I have an output
  
  /*
  I want a popup that asks how long the password should be, and limits the input to 8 to 128
If a user enters in a number less than 8 or greater then 128 an error message is displayed 

// (Maybe an if/else statement? Nested in a function?) 
I want a popup box that asks the user if they want lower case alpha characters (yes/no)
I want a popup box that asks the user if they want uppercase alpha characters (yes/no)
I want a popup box that asks the user if they want numeric characters (yes/no)
I want a popup box that asks if they want unique characters (yes/no)

A minimum of one option must be selected 

I want to display a randomized selection of alpha/numeric/special characters based on user input that is the desired length 

I want that to display via HTML
  */
  
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

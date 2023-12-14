// Assignment Code
// Variable of password generation
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Updates the text area with the new password
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>Add from here<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Array of variables that store different kinds of characters

// array of uppercase letters
var uppercase = ["A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
//array of lowercase letters
var lowercase = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
//array of numbers
var numbers = ["2","3","4","5","6","7","8","9"];
//array of special characters
var special = ["!","#","$","%","&","*","+","-","?","@", "(",")",",",".","/",":",";","<","=",">","[","\\","]","^","_","`","{","}","~"];
//////////////////////////////////////////////////////////////////////////

//WRITE HERE
var givenKeys = [""]
// variable to hold the password to be generated
var passwordGen = "";

function generatePassword() {
  //Function prompting request of total password length
  var passwordLength = prompt("Please state how many characters you want your new password to have. It must be between 8 and 128 characters in length")

  //If statement which checks password length is correct size 
  // Provides an alert if the password length is below 8 or above 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error: Please enter a number between 8 and 128");
    return
  }

  //When prompt asks for password length:
  // Provides an alert if user enters a non-numerical character into the text box
  if (isNaN(passwordLength)) {
    alert("Error: Please enter a number between 8 and 128");
    return
  }

  ////////////////Character selection prompts////////////////////////////////////////////////////

  //Variable to prompt whether password includes lowercase letters 
  var lowercaseConfirm = confirm("Do you want to include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowercase.length; i++) {
      givenKeys.push(lowercase[i]);
    }
    console.log(givenKeys)
  }
  //Variable to prompt whether password includes uppercase letters 
  var uppercaseConfirm = confirm("Do you want to include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < uppercase.length; i++) {
      givenKeys.push(uppercase[i]);
    }
    console.log(givenKeys)
  }
  //Variable to prompt whether password includes numbers
  var numberConfirm = confirm("Do you want to include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < numbers.length; i++) {
      givenKeys.push(numbers[i]);
    }
    console.log(givenKeys)
  }
  //Variable to prompt whether password includes special characters
  var specialsConfirm = confirm("Do you want to include special characters?");
  if (specialsConfirm === true) {
    for (var i = 0; i < special.length; i++) {
      givenKeys.push(special[i]);
    }
    console.log(givenKeys)
  }

  // Conditional statement; A prompt generated if user rejects all character types
  if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialsConfirm === false) {
    alert("Error: Your password must have at least 1 type of character.")
    return;
  }

 var keyLength = passwordLength;

  //for loop to randomize user selections into the password
  for (var i = 0; i < keyLength; i++) {
    givenKeys[
      Math.floor(Math.random() * givenKeys.length)];

      passwordGen += givenKeys[
      Math.floor(Math.random() * givenKeys.length)];
  }
  /// return a newly generated password to the text area
  return passwordGen;
}

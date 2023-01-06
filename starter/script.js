// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var passwordLength = {};
var lowerCaseChoice = {};
// Function to prompt user for password options
function getPasswordOptions() {
    passwordLength.answer = prompt("How long do you want your password to be? (Enter a number between 10 and 64)")
    lowerCaseChoice.answer = confirm("Do you want lowercase characters?")
    var upperCaseChoice = confirm("Do you want uppercase characters?")
    var numericChoice = confirm("Do you want numbers?")
    var specialCharacterChoice = confirm("Do you want special characters?")
}

// Function for getting a random element from an array
function getRandom(arrays) {
    return arrays[Math.floor(Math.random()*arrays.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  password = "";
  // for (var i = 0; i < passwordLength; ++i) {
    
  // }
  while (password < passwordLength.answer) {
    // if (lowerCaseChoice === true) 
    // {
      password += getRandom(lowerCasedCharacters)
    // }
  }
}

generatePassword();
console.log(password);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Run password options function


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

// Function to prompt user for password options
function getPasswordOptions() {
    var passwordLength = prompt("How long do you want your password to be? (Enter a number between 10 and 64)")
    var lowerCaseChoice = confirm("Do you want lowercase characters?")
    var upperCaseChoice = confirm("Do you want uppercase characters?")
    var numericChoice = confirm("Do you want numbers?")
    var specialCharacterChoice = confirm("Do you want special characters?")
// return as object, use object keys to call in generatePassword function
    return options = {
      'passwordLength': passwordLength,
      'lowerCaseChoice': lowerCaseChoice,
      'upperCaseChoice': upperCaseChoice,
      'numericChoice': numericChoice,
      'specialCharacterChoice': specialCharacterChoice
    };
}

// Function for getting a random element from an array
function getRandom(arrays) {
    return arrays[Math.floor(Math.random()*arrays.length)];
}

// Function to generate password with user input
function generatePassword() {
  password = "";
  getPasswordOptions();
  var numericalLength = parseInt(options.passwordLength);
  while (password.length < numericalLength) {
    if (options.lowerCaseChoice === true) {
      password += getRandom(lowerCasedCharacters)
    };
    if (options.upperCaseChoice === true) {
      password += getRandom(upperCasedCharacters)
    };
    if (options.numericChoice === true) {
      password += getRandom(numericCharacters)
    };
    if (options.specialCharacterChoice === true) {
      password += getRandom(specialCharacters)
    };
  }
  return password
};


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


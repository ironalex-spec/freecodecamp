// JavaScript provides a .replace() method that enables you to replace characters in a string with another string. This method accepts two arguments. The first argument is the character sequence to be replaced, which can be either a string or a regex pattern. The second argument is the string that replaces the matched sequence.

// Since strings are immutable, the replace method returns a new string with the replaced characters.

// In this example, the replace method is used to replace all instances of the letter l with the number 1 in the string hello.

// "hello".replace(/l/g, "1");
// Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.

const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
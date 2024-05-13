// The innerText property controls the text that appears in an HTML element. For example:

// <p id="info">Demo content</p> 
// const info = document.querySelector("#info"); 
// info.innerText = "Hello World"; 
// The following example would change the text of the p element from Demo content to Hello World.

// When a player clicks your Go to store button, you want to change the buttons and text. Remove the code inside the goStore function and add a line that updates the text of button1 to say "Buy 10 health (10 gold)".

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}
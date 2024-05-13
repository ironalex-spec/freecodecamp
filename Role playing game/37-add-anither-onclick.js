// Using the same syntax, set the onclick properties of button2 and button3 to goCave and fightDragon respectively.

// Once you have done that, open your console and try clicking the buttons on your project.

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
  console.log("Going to store.");
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}
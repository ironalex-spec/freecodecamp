// Because your function was no longer using the parameter, changing the value passed in the call did not affect it.

// Go ahead and remove the test declaration from your padRow function. Also, remove the return statement, so your function is empty again.

const character = "#";
const count = 8;
const rows = [];

function padRow() {
}
const call = padRow();
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
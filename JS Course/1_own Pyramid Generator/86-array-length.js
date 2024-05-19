// Using done to track the number of rows that have been generated is functional, but you can actually clean up the logic a bit further.

// Arrays have a special length property that allows you to see how many values, or elements, are in the array. You would access this property using syntax like myArray.length.

// Update your condition to check if rows.length is less than or equal to count.

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

let done = 0;

while (rows.length <= count) {
  done++;
  rows.push(padRow(done, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
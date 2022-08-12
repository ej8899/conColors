//
// create a random ID -default 6 chars longer, otherwise specify # of chars to create
// return is the random ID
//
const makeID = function(numChars) {
  let yourCode = "";
  let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (!numChars) {
    numChars = 6; // set a default to 6 characters of a random ID
  }
  for (let i = 0; i < numChars; i++) {
    yourCode += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return yourCode;
};

// EXAMPLE
console.log(makeID(10));

//
// randomNumer(5,98);
// return a random number between min and max supplied values
//
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// EXAMPLE
console.log(randomNumber(5,575));
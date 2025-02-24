const readline = require('readline');

// Function to generate the next string
function generateNextString(word) {
  let nextString = '';
  for (let char of word) {
    if (char === 'z') {
      nextString += 'a';
    } else {
      nextString += String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }
  return nextString;
}

// Recursive function to build the string until its length is at least k
function buildString(word, k) {
  if (word.length >= k) {
    return word;
  }
  const nextString = generateNextString(word);
  return buildString(word + nextString, k);
}

// Function to get the k-th character
function getKthCharacter(k) {
  let word = 'a';
  word = buildString(word, k);
  return word[k - 1]; // Since strings are 0-indexed in JavaScript
}

// Read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the value of k: ', input => {
  const k = parseInt(input, 10);
  if (isNaN(k) || k < 1) {
    console.log('Please enter a valid positive integer for k.');
  } else {
    const result = getKthCharacter(k);
    console.log(`The ${k}-th character is: ${result}`);
  }
  rl.close();
});

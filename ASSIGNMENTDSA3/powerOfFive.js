const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Recursive function to check if n is a power of 5
function isPowerOfFive(n) {
  // Base case: If n is 1, it's a power of 5 (5^0 = 1)
  if (n === 1) {
    return true;
  }
  // If n is less than 1 or not divisible by 5, return false
  if (n < 1 || n % 5 !== 0) {
    return false;
  }
  // Recursively divide n by 5
  return isPowerOfFive(n / 5);
}

// Function to get input and check if it is a power of 5
function checkPowerOfFive() {
  rl.question('Enter an integer n: ', input => {
    const n = parseInt(input);
    if (isNaN(n)) {
      console.log('Please enter a valid integer.');
    } else {
      const result = isPowerOfFive(n);
      console.log(result); // Output: true or false
    }
    rl.close(); // Close the readline interface
  });
}

// Start the program
checkPowerOfFive();

function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

const number = 5; // Replace with your desired positive integer.
const result = factorialRecursive(number);
console.log(`The factorial of ${number} is: ${result}`);

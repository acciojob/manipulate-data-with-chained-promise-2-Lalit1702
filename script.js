//your JS code here. If required.
// Function that returns a promise which resolves after 3 seconds with an array of numbers
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(num => num * 2);
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Function to update the output div
function updateOutput(text) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = text;
}

// Chaining the promises
getNumbers()
  .then(numbers => {
    // After 3 seconds, the numbers are resolved
    return filterOddNumbers(numbers); // Filters out odd numbers
  })
  .then(evenNumbers => {
    // After 1 second, update the output with the filtered even numbers
    updateOutput(`Filtered even numbers: ${evenNumbers.join(', ')}`);
    return multiplyEvenNumbers(evenNumbers); // Multiplies the even numbers by 2
  })
  .then(multipliedNumbers => {
    // After 2 seconds, update the output with the multiplied numbers
    updateOutput(`Multiplied even numbers: ${multipliedNumbers.join(', ')}`);
  })
  .catch(error => {
    // Handle any errors
    updateOutput(`Error: ${error}`);
  });

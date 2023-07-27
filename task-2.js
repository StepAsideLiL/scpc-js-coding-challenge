// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositive(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number > 0) {
      sum = sum + number;
    }
  }

  return sum;
}

console.log(sumOfPositive([2, -5, 10, -3, 7]));

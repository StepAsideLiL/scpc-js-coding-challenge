// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

function stringToReversed(str) {
  const convertedString = str.toString();
  let reverseString = "";

  for (let i = convertedString.length - 1; i >= 0; i--) {
    reverseString = reverseString + convertedString[i];
  }

  return reverseString;
}

console.log(stringToReversed("hello world"));

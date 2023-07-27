// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function elementsCountInArray(arr) {
  let elements = {};

  for (let i = 0; i < arr.length; i++) {
    const keys = Object.keys(elements);

    if (keys.includes(arr[i] + "")) {
      elements[arr[i]] = elements[arr[i]] + 1;
    } else {
      elements[arr[i]] = 1;
    }
  }

  return elements;
}

function findMostFrequentElement(arr) {
  const elements = elementsCountInArray(arr);
  let maxKey = null;
  let maxValue = Number.MIN_SAFE_INTEGER;

  for (const [key, value] of Object.entries(elements)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
}

console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));

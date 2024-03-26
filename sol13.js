//Write a program that creates an array of numbers and returns a new array that contains only the unique numbers using reduce function.

function getUniqueNumbers(arr) {
    const uniqueArray = arr.reduce((accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    return uniqueArray;
  }
  
  const numbers = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9];
  const uniqueNumbers = getUniqueNumbers(numbers);
  console.log("Original array:", numbers);
  console.log("Array of unique numbers:", uniqueNumbers);
  
//Write a program to create an array of 10 string, create a function that returns longest string from the array.

const strings = [
    "apple",
    "banana",
    "orange",
    "strawberry",
    "pineapple",
    "kiwi",
    "grape",
    "blueberry",
    "watermelon",
    "peach"
  ];

  function findLongestString(array) {
    let longestString = "";
    for (let str of array) {
      if (str.length > longestString.length) {
        longestString = str;
      }
    }
    return longestString;
  }

  let longestString=findLongestString(strings);

  console.log('longest string is: '+longestString);
//Write a program that creates two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays) and print the results to console.

const arr1=[1,2,3,4,5];
const arr2=[6,2,3,4,7];

const intersection = arr1.filter(value => arr2.includes(value));

console.log("Intersection of the two arrays:", intersection);
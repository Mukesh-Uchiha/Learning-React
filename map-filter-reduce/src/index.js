import emojipedia from "./emojipedia";

console.log(emojipedia);

const emoInfo = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});
console.log(emoInfo);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const numMap = numbers.map(function (x) {
  return x * 2;
});
console.log(numMap);
//Filter - Create a new array by keeping the items that return true.
const numFilter = numbers.filter(function (x) {
  return x < 10;
});
console.log(numFilter);
//Reduce - Accumulate a value by doing something to each item in an array.
const numReduce = numbers.reduce(function (count, x) {
  return count + x;
});
console.log(numReduce);
//Find - find the first item that matches from an array.
const numFind = numbers.find(function (x) {
  return x > 10;
});
console.log(numFind);
//FindIndex - find the index of the first item that matches.
const numFindIndex = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(numFindIndex);

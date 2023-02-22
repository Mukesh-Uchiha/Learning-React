import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const mapNumber = numbers.map((x) => x * x);
console.log(mapNumber);

////Filter - Create a new array by keeping the items that return true.
const mapNumbers = numbers.filter((num) => num < 10);
console.log(mapNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.
var RexNumber = numbers.reduce((x, count) => x + count);
console.log(RexNumber);

//Find - find the first item that matches from an array.
const findNumber = numbers.find((num) => num > 10);
console.log(findNumber);

//FindIndex - find the index of the first item that matches.
const findIndexNumber = numbers.findIndex((num) => num > 10);
console.log(findIndexNumber);

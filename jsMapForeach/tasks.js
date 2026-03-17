// 1
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
document.writeln(doubleNumbers([1, 2, 3]));
document.writeln("<br>");

// 2   check again!
function numbersToStrings(arr) {
  return arr.map((num) => num.toString());
}
document.writeln([1, 2, 3]);
document.writeln("<br>");

// 3
function upperCaseNames(arr) {
  return arr.map((word) => word.toUpperCase());
}
document.writeln(upperCaseNames(["ali", "sara"]));
document.writeln("<br>");

// 4
function addFive(arr) {
  return arr.map((num) => num + 5);
}
document.writeln(addFive([10, 20, 30]));
document.writeln("<br>");

// 5
function getNames(obj) {
  return obj.map((data) => data.name);
}
document.writeln(
  getNames([
    { name: "Ali", age: 20 },
    { name: "Sara", age: 25 },
  ]),
);
document.writeln("<br>");

// 6
function wordLengths(arr) {
  return arr.map((word) => word.length);
}
document.writeln(wordLengths(["apple", "dog"]));
document.writeln("<br>");

// 7
function valTimesIndex(arr) {
  return arr.map((item) => item * arr.indexOf(item));
}
document.writeln(valTimesIndex([2, 3, 4]));
document.writeln("<br>");

// 8
function makeUsernames(obj) {
  return obj.map((item) => "@" + item.username);
}
document.writeln(makeUsernames([{ username: "ahmad" }, { username: "sara" }]));
document.writeln("<br>");

// 9
function squareNumbers(arr) {
  return arr.map((item) => item * item);
}
document.writeln(squareNumbers([2, 3, 4]));
document.writeln("<br>");

// 10
function firstLetters(arr) {
  return arr.map((item) => item[0]);
}
document.writeln(firstLetters(["Ali", "Sara"]));
document.writeln("<br>");

// 11
function sumNumbers(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
}
document.writeln(sumNumbers([10, 20, 30]));
document.writeln("<br>");

// 12
function countEven(arr) {
  let count = 0;
  arr.forEach((num) => {
    if (num % 2 === 0) {
      count += 1;
    }
  });
  return count;
}
document.writeln(countEven([1, 2, 3, 4]));
document.writeln("<br>");

// 13
function timesTen(arr) {
  return arr.map((num) => num * 10);
}
document.writeln(timesTen([1, 2, 3]));
document.writeln("<br>");

// 14
function addAdult(obj) {
  return obj.map((data) => ({ ...data, adult: data.age > 18 }));
}
document.writeln(
  JSON.stringify(
    addAdult([
      { name: "Ali", age: 20 },
      { name: "Sara", age: 15 },
    ]),
  ),
);
document.writeln("<br>");

// 15
function addTax(arr) {
  return arr.map((item) => item + 10);
}
document.writeln(addTax([100, 200]));
document.writeln("<br>");

// 16
function countBig(arr) {
  return arr.map((item) => (item > 50 ? item : null));
}
document.writeln(countBig([20, 60, 80]));
document.writeln("<br>");

// 17
function labelNumbers(arr) {
  return arr.map((item) => `Number: ${item}`);
}
document.writeln(labelNumbers([5, 10]));
document.writeln("<br>");

// 18
function productNames(obj) {
  return obj.map((item) => item.product);
}
document.writeln(
  productNames([
    { product: "Laptop", price: 1000 },
    { product: "Phone", price: 500 },
  ]),
);
document.writeln("<br>");

// 19
function addIndex(arr) {
  //   return arr.map((item) => item + arr.indexOf(item));
  // (item, index, array);
  return arr.map((item, index) => item + index);
}
document.writeln(addIndex([5, 5, 5]));
document.writeln("<br>");

// 20
function isEvenArray(arr) {
  return arr.map((item) => item % 2 == 0);
}
document.writeln(isEvenArray([1, 2, 3, 4]));
document.writeln("<br>");

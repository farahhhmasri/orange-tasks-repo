// 1
let var1 = "Hello";
let var2 = "World";

// console.log(var1.concat([" ", var2]));
document.writeln(var1.concat(" ", var2));
document.writeln("<br>");

// 2
let var3 = "JavaScript";
document.writeln(var3.length);
document.writeln("<br>");

// 3
var3 = "Programming";
document.writeln(var3.charAt(0));
document.writeln("<br>");

// 4
var3 = "coding is fun";
document.writeln(var3.slice("coding"));
document.writeln("<br>");

// 5
var3 = "cat";
document.writeln(var3.replace("a", "e"));
document.writeln("<br>");

// 6
var3 = "javascript";
document.writeln(var3.toUpperCase());
document.writeln("<br>");

// 7
let var4 = "apple,banana,orange";
document.writeln(var4.split(","), " ", typeof var4.split(","));
document.writeln("<br>");

// 8
let arr = ["hello", "world"];
document.writeln(arr.join(" "));
document.writeln("<br>");

// 9
var3 = " hello world ";
document.writeln(var3.trim());
document.writeln("<br>");

// 10
var3 = "hello world";
document.writeln(var3.includes("world"));
document.writeln("<br>");

// 11
var4 = "hello";
document.writeln(var4.split("").reverse().join(""));
document.writeln("<br>");

// 12
// var3 = "elephant";
// document.writeln(var3.split("e"));

// 13
var4 = "racecar";
document.writeln(var4.split("").reverse().join("") === var4);
document.writeln("<br>");

// 14
var4 = "hello world";
document.writeln(
  var4
    .split(" ")
    .map((word) => word.toUpperCase())
    .join(" "),
);
document.writeln("<br>");

// 15
let num = "1234.5678";
// console.log(num.toFixed(2));

let splitArray = num.split(".");
let result;
if (Number(splitArray[1][2]) > 5) {
  splitArray[1].slice(0, 2);
  result = splitArray[0].concat(".", Number(splitArray[1].slice(0, 2)) + 1);
} else {
  result = splitArray[0].concat(".", splitArray[1].slice(0, 2));
}
document.writeln(result);
document.writeln("<br>");

// 16
var3 = "There are 3 apples and 2 oranges";
document.writeln(var3.match(/\d+/g));
document.writeln("<br>");

// 17
var3 = "example@email.com";
if (var3.match(/\w+(@)\w+(\.com)/g) != null) {
  document.writeln(true);
} else {
  document.writeln(false);
}
document.writeln("<br>");

// 18
var4 = "This is a bad word";
document.writeln(var4.replace("bad", "good"));
document.writeln("<br>");

// 19
var4 = "aabbc";
var4 = var4.toLowerCase().split("").sort();
let newStr = "";
for (let item of var4) {
  if (newStr.indexOf(item) === -1) {
    newStr += item;
  }
}
document.writeln(newStr);
document.writeln("<br>");

// 20
var4 = "hello";
document.writeln(var4.split("").sort().join(""));
document.writeln("<br>");

// 21
let word1 = "listen";
let word2 = "silent";
let check = true;
if (word1.length > word2.length) {
  for (let item of word1) {
    if (word2.indexOf(item) === -1) {
      check = false;
      break;
    }
  }
} else {
  for (let item of word2) {
    if (word1.indexOf(item) === -1) {
      check = false;
      break;
    }
  }
}
if (check) {
  document.writeln(true);
} else {
  document.writeln(false);
}
document.writeln("<br>");

// 22
var4 = "The quick brown fox";
let temp = var4.split(" ");
let tempArray = [];
for (let i = temp.length; i > 0; i--) {
  tempArray.push(temp[i - 1]);
}
document.writeln(tempArray.join(" "));
document.writeln("<br>");

// 23
var4 = "Web development is fascinating";
tempArray = [];
temp = var4.split(" ");

for (let item of temp) {
  tempArray.push(item.length);
}
document.writeln(temp[tempArray.indexOf(Math.max(...tempArray))]);
document.writeln("<br>");

// 24
var4 = "A man, a plan, a canal, Panama!";
var4 = var4
  .toLowerCase()
  .replace(/,/g, "")
  .replace(/\./g, "")
  .replace(/!/g, "")
  .replace(/ /g, "");

var4rev = var4.split("").reverse().join("");
if (var4 == var4rev) {
  document.writeln(true);
} else {
  document.writeln(false);
}
document.writeln("<br>");

// 25
let counter = {};
var4 = "mississippi";

for (let letter of var4) {
  if (letter in counter) {
    counter[letter] += 1;
  } else {
    counter[letter] = 1;
  }
}
document.writeln(JSON.stringify(counter));
document.writeln("<br>");

// 26
let replaceObj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
var4 = "Hello World";
var4 = var4.toLocaleLowerCase();
for (let letter of var4) {
  if (letter in replaceObj) {
    var4 = var4.replace(letter, replaceObj[letter]);
  }
}
document.writeln(var4);
document.writeln("<br>");

// 27
var4 = "JavaScript is fun";
document.writeln(var4.startsWith("Java"));
document.writeln("<br>");

// 28
var4 = "image.png";
document.writeln(var4.endsWith("png"));
document.writeln("<br>");

// 29
var4 = "ha";
document.writeln(var4.repeat(3));
document.writeln("<br>");

// 30
var4 = "Hello World";
document.writeln(var4.indexOf("o"));

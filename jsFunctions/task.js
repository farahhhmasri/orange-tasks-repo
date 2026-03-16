// 1
function firstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}

document.writeln(firstAndLast([4, 7, 8, 9, 0]));
document.writeln("<br>");
// console.log(firstAndLast([4, 7, 8, 9, 0]));

// 2
function removeMiddle(arr) {
  middle = Math.round(arr.length / 2) - 1;
  arr.splice(middle, 1);
  return arr;
}
document.writeln(removeMiddle([1, 2, 3, 4, 5]));
document.writeln("<br>");

// 3
function swapFirstLast(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}
document.writeln(swapFirstLast([1, 2, 3, 4, 5]));
document.writeln("<br>");

// 4
function insertAtMiddle(arr, value) {
  middle = Math.round(arr.length / 2);
  arr.splice(middle, 0, value);
  return arr;
}
document.writeln(insertAtMiddle([1, 2, 3, 4], 10));
document.writeln("<br>");

// 5
function duplicateArray(arr) {
  return arr.concat(arr);
}
document.writeln(duplicateArray([1, 2, 3]));
document.writeln("<br>");

// 6
function removeDuplicates(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!tempArr.includes(arr[i])) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}
document.writeln(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
document.writeln("<br>");

// 7
function findSecondLargest(arr) {
  //   return arr.sort().reverse()[1];
  return arr.sort((a, b) => b - a)[1];
}
document.writeln(findSecondLargest([4, 9, 2, 10, 6]));
document.writeln("<br>");

// 8
function findSecondSmallest(arr) {
  return arr.sort((a, b) => a - b)[1];
}
document.writeln(findSecondSmallest([4, 9, 2, 10, 6]));
document.writeln("<br>");

// 9
function removeGreaterThan(arr, value) {
  return arr.filter((num) => num < value);
}
document.writeln(removeGreaterThan([10, 5, 20, 3, 8], 10));
document.writeln("<br>");

// 10
function removeLessThan(arr, value) {
  return arr.filter((num) => num > value);
}
document.writeln(removeLessThan([10, 5, 20, 3, 8], 10));
document.writeln("<br>");

// 11
function countOccurrences(arr, value) {
  let res = arr.filter((num) => num === value);
  return res.length;
}
document.writeln(countOccurrences([1, 2, 3, 2, 4, 2], 2));
document.writeln("<br>");

// 12
function arrayIntersection(arr1, arr2) {
  let res = arr1.filter((num) => arr2.includes(num));
  return res;
}
document.writeln(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
document.writeln("<br>");

// 13
function arrayDifference(arr1, arr2) {
  let res = arr1.filter((num) => !arr2.includes(num));
  return res;
}
document.writeln(arrayDifference([1, 2, 3, 4], [3, 4]));
document.writeln("<br>");

// 14
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4];
function uniqueMerge(arr1, arr2) {
  let res = arr1.concat(arr2);
  let temp = [];
  for (let i of res) {
    if (!temp.includes(i)) {
      temp.push(i);
    }
  }
  return temp;
}
document.writeln(uniqueMerge([1, 2, 3], [3, 4, 5]));
document.writeln("<br>");

// 15
function removeNegativeNumbers(arr) {
  return arr.filter((num) => num > 0);
}
document.writeln(removeNegativeNumbers([5, -2, 10, -3, 7]));
document.writeln("<br>");

// 16
function wordsLongerThan(arr, length) {
  return arr.filter((word) => word.length > length);
}
document.writeln(wordsLongerThan(["alex", "mohammad", "ali", "sara"], 4));
document.writeln("<br>");

// 17
function countLetterInWords(arr, letter) {
  return arr.filter((word) => word.includes(letter)).length;
}
document.writeln(countLetterInWords(["apple", "banana", "car", "dog"], "a"));
document.writeln("<br>");

// 18
function removeShortWords(arr, length) {
  return arr.filter((word) => word.length < length);
}
document.writeln(wordsLongerThan(["alex", "mohammad", "ali", "sara"], 4));
document.writeln("<br>");

// 19
function findLongestWord(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}
document.writeln(findLongestWord(["alex", "mohammad", "ali", "sara"]));
document.writeln("<br>");

// 20
function findShortestWord(arr) {
  return arr.sort((a, b) => a.length - b.length)[0];
}
document.writeln(findShortestWord(["alex", "mohammad", "ali", "sara"]));
document.writeln("<br>");

// 21
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
document.writeln(sortByLength(["apple", "hi", "banana"]));
document.writeln("<br>");

// 22
function removeEverySecond(arr) {
  return arr.filter((item) => arr.indexOf(item) % 2 === 0);
}
document.writeln(removeEverySecond([1, 2, 3, 4, 5, 6]));
document.writeln("<br>");

// 23
function sumEvenNumbers(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .reduce((total, current) => total + current, 0);
}
document.writeln(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
document.writeln("<br>");

// 24
function sumOddIndex(arr) {
  return arr
    .filter((item) => arr.indexOf(item) % 2 != 0)
    .reduce((total, current) => total + current, 0);
}
document.writeln(sumOddIndex([1, 2, 3, 4, 5, 6]));
document.writeln("<br>");

// 25
function reverseWithoutReverse(arr) {
  let temp = [];
  for (let i of arr) {
    temp.unshift(i);
  }
  return temp;
}
document.writeln(reverseWithoutReverse([1, 2, 3, 4, 5, 6]));
document.writeln("<br>");

// 26
function findMissingNumber(arr) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}
document.writeln(findMissingNumber([1, 2, 3, 5, 6]));
document.writeln("<br>");

// 27
function pairSum(arr, target) {
  for (let item of arr) {
    if (arr.includes(target - item)) {
      return [item, target - item];
    }
  }
}
document.writeln(pairSum([2, 7, 11, 15], 9));
document.writeln("<br>");

// 28
function rotateArray(arr, steps) {
  let firstPart = arr.slice(0, steps + 1);
  let secondPart = arr.slice(steps + 1, arr.length);
  return secondPart.concat(firstPart);
}
document.writeln(rotateArray([1, 2, 3, 4, 5], 2));
document.writeln("<br>");

// 29
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
document.writeln(JSON.stringify(chunkArray([1, 2, 3, 4, 5, 6], 2)));
document.writeln("<br>");

// 30
function groupByLength(arr) {
  let counter = {};
  for (item of arr) {
    len = item.length;
    if (len in counter) {
      counter[len].push(item);
    } else {
      counter[len] = [item];
    }
  }
  return counter;
}
document.writeln(JSON.stringify(groupByLength(["hi", "cat", "dog", "apple"])));
document.writeln("<br>");

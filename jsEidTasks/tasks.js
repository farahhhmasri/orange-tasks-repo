// task 1
document.writeln("Q1");
document.writeln("<br>");

logs = [
  { event: "click", time: 1 },
  { event: "click", time: 2 },
  { event: "scroll", time: 3 },
  { event: "scroll", time: 5 },
  { event: "click", time: 4 },
];

function compressLogs(logs) {
  if (logs.length > 1) {
    let newLogs = [];
    for (let item of logs) {
      if (
        newLogs.length > 0 &&
        newLogs[newLogs.length - 1].event === item.event
      ) {
        newLogs[newLogs.length - 1].count += 1;
      } else {
        newLogs[newLogs.length] = { event: item.event, count: 1 };
      }
    }
    return JSON.stringify(newLogs);
  }
  return JSON.stringify({ event: logs[0].event, count: 1 });
}

function compressLogs2(logs) {
  if (logs.length > 1) {
    let newLogs = [];
    for (let i = 0; i < logs.length; i++) {
      if (i == 0) {
        newLogs[i] = { ...logs[i], count: 1 };
        continue;
      }
      if (
        newLogs[newLogs.length - 1].event === logs[i].event &&
        newLogs[newLogs.length - 1].time === logs[i].time - 1
      ) {
        newLogs[newLogs.length - 1] = {
          ...logs[i],
          count: newLogs[newLogs.length - 1].count + 1,
        };
      } else {
        newLogs[newLogs.length] = { ...logs[i], count: 1 };
      }
    }
    let result = [];
    for (let i = 0; i < newLogs.length; i++) {
      result[i] = { event: newLogs[i].event, count: newLogs[i].count };
    }
    return JSON.stringify(result);
  }
  return JSON.stringify({ event: logs[0].event, count: 1 });
}

document.writeln(compressLogs2(logs));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task2
document.writeln("Q2");
document.writeln("<br>");

function findTarget(arr, target) {
  let start = -1;
  let end = -1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) {
        start = i;
        end = j;
        break;
      }

      if (sum > target) {
        break;
      }
    }
    if (start != -1 && end != -1) {
      return [start, end];
    }
    sum = 0;
  }
  return [start, end];
}

let arr = [1, 4, 20, 3, 10, 5];
let target = 33;
document.writeln(findTarget(arr, target));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task3
document.writeln("Q3");
document.writeln("<br>");
// Go through the array once and always remember the lowest price you've seen so far.

function maxProfit(prices) {
  let min = prices[0];
  let profit = 0;
  for (let item of prices) {
    if (item < min) {
      min = item;
    }
    if (item - min > profit) {
      profit = item - min;
    }
  }
  return profit;
}

let prices = [7, 1, 5, 3, 6, 4];
document.writeln(maxProfit(prices));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task4
document.writeln("Q4");
document.writeln("<br>");

function waterTrapped(arr) {
  // min(maxLeft, maxRight) - height[i];
  let total = 0;
  let maxLeft;
  let maxRight;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      maxLeft = 0;
      maxRight = 0;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > maxRight) maxRight = arr[j];
      }
      if (maxRight > maxLeft) {
        diff = maxLeft - arr[i];
        if (diff > 0) total += diff;
      } else {
        diff = maxRight - arr[i];
        if (diff > 0) total += diff;
      }
    }
    if (i === arr.length - 1) {
      maxLeft = 0;
      maxRight = 0;
      for (let j = 0; j < arr.length - 2; j++) {
        if (arr[j] > maxLeft) maxLeft = arr[j];
      }
      if (maxRight > maxLeft) {
        diff = maxLeft - arr[i];
        if (diff > 0) total += diff;
      } else {
        diff = maxRight - arr[i];
        if (diff > 0) total += diff;
      }
    } else {
      maxLeft = 0;
      maxRight = 0;

      // left check
      for (let j = 0; j < i; j++) {
        if (maxLeft < arr[j]) maxLeft = arr[j];
      }
      // right check
      for (let j = i + 1; j < arr.length; j++) {
        if (maxRight < arr[j]) maxRight = arr[j];
      }
      if (maxRight > maxLeft) {
        diff = maxLeft - arr[i];
        if (diff > 0) total += diff;
      } else {
        diff = maxRight - arr[i];
        if (diff > 0) total += diff;
      }
    }
  }
  return total;
}
// arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// arr = [3, 0, 2, 0, 4];
arr = [4, 2, 0, 3, 2, 5];
document.writeln(waterTrapped(arr));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task5
document.writeln("Q5");
document.writeln("<br>");

function longestSubarray(arr) {
  let newarr = [];
  let check;
  for (let item of arr) {
    if (newarr.length > 0) {
      check = false;
      for (let newitem of newarr) {
        if (newitem === item) {
          newarr = [];
          newarr[0] = item;
          check = true;
          break;
        }
      }
      if (check === false) newarr[newarr.length] = item;
    } else newarr[newarr.length] = item;
  }
  return newarr;
}
arr = [1, 2, 3, 1, 2, 3, 4, 5];
document.writeln(longestSubarray(arr));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task6
document.writeln("Q6");
document.writeln("<br>");

function productOfArray(arr) {
  let newArr = [];
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    // left product
    for (let j = 0; j < i; j++) {
      result *= arr[j];
    }

    // right product
    for (let j = i + 1; j < arr.length; j++) {
      result *= arr[j];
    }

    newArr[i] = result;
    result = 1;
    // if (i === 0) {
    //   for (let j = i + 1; j < arr.length; j++) {
    //     result *= arr[j];
    //   }
    //   newArr[i] = result;
    //   result = 1;
    // } else if (i === arr.length - 1) {
    //   for (let j = 0; j < arr.length - 1; j++) {
    //     result *= arr[j];
    //   }
    //   newArr[i] = result;
    //   result = 1;
    // } else {
    //   //left product result
    //   for (let j = 0; j < i; j++) {
    //     result *= arr[j];
    //   }
    //   //right product result
    //   for (let j = i + 1; j < arr.length; j++) {
    //     result *= arr[j];
    //   }
    //   newArr[i] = result;
    //   result = 1;
    // }
  }
  return newArr;
}
arr = [1, 2, 3, 4];
document.writeln(productOfArray(arr));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task7
document.writeln("Q7");
document.writeln("<br>");

function spiralTraversal(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result[result.length] = arr[i];
    } else {
      let tempArr = [];
      for (let j = arr[i].length - 1; j >= 0; j--) {
        tempArr[tempArr.length] = arr[i][j];
      }
      result[result.length] = tempArr;
    }
  }
  return result;
}

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
document.writeln(spiralTraversal(arr));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task8
document.writeln("Q8");
document.writeln("<br>");
function minSubArray(arr, target) {
  let pointer = 0;
  let part = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pointer + 1) {
      part[part.length] = arr[i];
      pointer += 1;
    } else {
      part = [];
      pointer = 0;
    }
  }
  return part;
}
arr = [1, 2, 2, 3, 1, 2, 3];
target = [1, 2, 3];
document.writeln(minSubArray(arr, target));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task9
document.writeln("Q9");
document.writeln("<br>");
function findCycle(arr) {
  let visited = [];
  i = 0;
  do {
    for (let index of visited) {
      if (i === index) return true;
    }
    if (i >= arr.length) return false;
    visited[visited.length] = i;
    i += arr[i];
  } while (i != -100);
}
arr = [2, -1, 1, 2, 2];
document.writeln(findCycle(arr));
document.writeln("<br>");
document.writeln("========================================");
document.writeln("<br>");

// task10
document.writeln("Q10");
document.writeln("<br>");

function reconstruct(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j].height < arr[i].height) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      } else if (arr[j].height === arr[i].height) {
        if (arr[j].inFront > arr[i].inFront) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
  }
  return JSON.stringify(arr);
}

arr = [
  { height: 7, inFront: 0 },
  { height: 4, inFront: 4 },
  { height: 7, inFront: 1 },
  { height: 5, inFront: 0 },
  { height: 6, inFront: 1 },
  { height: 5, inFront: 2 },
];

document.writeln(reconstruct(arr));

document.writeln("<br>");

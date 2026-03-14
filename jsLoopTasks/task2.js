// 12
let arr = [0];
let j;
for (let i = 0; i < 5; i++) {
  steps = arr.length;
  j = arr[steps - 1];
  while (steps > 0) {
    document.writeln(`${j + 1} `);
    j = j + 1;
    steps--;
  }
  arr.push(j);
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// 13
for (let i = 1; i < 101; i++) {
  if (i % 7 === 0) {
    document.writeln(`${i} `);
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 14
let sum = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 == 1) {
    sum += i;
  }
}
document.writeln(sum);
document.writeln("<br>");
document.writeln("<br>");

// 15
for (let i = 1; i < 11; i++) {
  document.writeln(`${i ** 2} `);
}
document.writeln("<br>");
document.writeln("<br>");

// 16
for (let i = 1; i < 31; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.writeln("FizzBuzz");
    continue;
  } else if (i % 3 === 0) {
    document.writeln("Fizz");
  } else if (i % 5 === 0) {
    document.writeln("Buzz");
  } else {
    document.writeln(`${i}`);
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 17
for (let i = 1; i < 6; i++) {
  let j = i;
  while (j > 0) {
    document.writeln("*");
    j--;
  }
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// 18
for (let i = 5; i > 0; i--) {
  let j = i;
  while (j > 0) {
    document.writeln("*");
    j--;
  }
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// 19
for (let i = 1; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    document.writeln(`${j + 1}`);
  }
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// 20
for (let i = 1; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    document.writeln(`${i}`);
  }
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// 21
for (let i = 1; i < 201; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  let sum = 0;
  for (let j = 0; j < counter; j++) {
    sum += Number(strNum[j]);
  }

  if (sum === 5) {
    document.writeln(i);
    document.writeln("<br>");
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 22
for (let i = 1; i < 101; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1 && strNum[0] > strNum[counter - 1]) {
    document.writeln(i);
    document.writeln("<br>");
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 23
for (let i = 1; i < 101; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1 && strNum[0] == strNum[counter - 1]) {
    document.writeln(i);
    document.writeln("<br>");
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 24
for (let i = 1; i < 300; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  let product = 1;
  if (counter > 1) {
    for (let j = 0; j < counter; j++) {
      product *= Number(strNum[j]);
    }

    if (i % product === 0) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 25
for (let i = 1; i < 100; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  let product = 1;
  let sum = 0;
  if (counter > 1) {
    for (let j = 0; j < counter; j++) {
      product *= Number(strNum[j]);
      sum += Number(strNum[j]);
    }

    if (product === sum) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 26
for (let i = 1; i < 501; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    for (let j = counter - 1; j >= 0; j--) {
      reverse += String(strNum[j]);
    }

    if (Number(reverse) % 3 === 0) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 27
for (let i = 1; i < 201; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let diff = 0;
    for (let j = 0; j < counter - 1; j++) {
      diff += Number(strNum[j] - strNum[j + 1]);
    }
    if (diff === 2 || diff === -2) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 28
for (let i = 1; i < 501; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let check = true;
    for (let j = 0; j < counter - 1; j++) {
      if (
        Number(strNum[j]) > Number(strNum[j + 1]) ||
        Number(strNum[j + 1]) != Number(strNum[j]) + 1
      ) {
        check = false;
        break;
      }
    }
    if (check) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 29
for (let i = 1; i < 501; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let check = true;
    for (let j = 0; j < counter - 1; j++) {
      if (
        Number(strNum[j]) < Number(strNum[j + 1]) ||
        Number(strNum[j + 1]) != Number(strNum[j]) - 1
      ) {
        check = false;
        break;
      }
    }
    if (check) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 30
for (let i = 1; i < 301; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 2) {
    let sum = 0;
    for (let j = 0; j < counter - 1; j++) {
      sum += Number(strNum[j]);
    }
    if (sum === Number(strNum[counter - 1])) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 31
for (let i = 1; i < 201; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
    }
    if (sum > 10) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 32
// for (let i = 1; i < 501; i++) {
//   let strNum = i.toString();
//   let counter = strNum.length;
//   if (counter > 1) {
//     let sum = 0;
//     for (let j = 0; j < counter; j++) {
//       sum += Number(strNum[j]);
//     }
//     if (sum > 10) {
//       document.writeln(i);
//       document.writeln("<br>");
//     }
//   }
// }
// document.writeln("<br>");
// document.writeln("<br>");

// 33
for (let i = 1; i < 301; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let numsArray = [];
    let check = false;
    for (let j = 0; j < counter; j++) {
      let count = 0;
      for (let k = j; k < counter; k++) {
        if (strNum[j] === strNum[k]) {
          count++;
        }
      }
      if (count === 2) {
        check = true;
        break;
      }
    }
    if (check === true) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 34
for (let i = 1; i < 201; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    for (let j = counter; j > 0; j--) {
      reverse += String(strNum[j - 1]);
    }
    if (Number(reverse) > i) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 35
for (let i = 1; i < 501; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let product = 1;
    for (let j = 0; j < counter; j++) {
      product *= Number(strNum[j]);
    }
    if (product % 5 === 0) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 36
for (let i = 1; i < 301; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
    }
    if (sum === counter * 5) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 37
for (let i = 1; i < 201; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    for (let j = counter; j > 0; j--) {
      reverse += String(strNum[j - 1]);
    }
    if (Number(reverse) % 2 === 0) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 38
for (let i = 1; i < 201; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    if (Number(strNum[0]) === Number(strNum[counter - 1]) ** 2) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 39
for (let i = 1; i < 301; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
    }
    if (sum % counter === 0) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 40
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
    }
    if (sum === 15) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 41
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    let product = 1;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
      product *= Number(strNum[j]);
    }
    if (sum === product) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 42
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    for (let j = counter; j > 0; j--) {
      reverse += String(strNum[j - 1]);
    }
    if (Number(reverse) === i + 9) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 43
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  let sqr = i * i;
  let strSqr = sqr.toString();
  let check = true;
  let j = strSqr.length - counter;
  let k = 0;
  while (j < strSqr.length) {
    if (strNum[k] != strSqr[j]) {
      check = false;
      break;
    }
    j++;
    k++;
  }
  if (check === true) {
    document.writeln(i);
    document.writeln("<br>");
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 44
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    for (let j = counter; j > 0; j--) {
      reverse += String(strNum[j - 1]);
    }
    if (Math.abs(Number(reverse) - i) % 9 === 0) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 45
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    let sum = 0;
    for (let j = counter; j > 0; j--) {
      reverse += String(strNum[j - 1]);
    }
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
    }
    if (sum === Number(reverse)) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 46
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]);
    }
    if (sum ** 2 === i) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 47
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      sum += Number(strNum[j]) ** 3;
    }
    if (sum === i) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 48

// 49
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let product = 1;
    let sum = 0;
    for (let j = 0; j < counter; j++) {
      product *= Number(strNum[j]);
      sum += Number(strNum[j]);
    }
    if (sum === product) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

// 50
for (let i = 1; i < 1001; i++) {
  let strNum = i.toString();
  let counter = strNum.length;
  if (counter > 1) {
    let reverse = "";
    for (let j = counter; j > 0; j--) {
      reverse += String(strNum[j - 1]);
    }
    let res = (Number(reverse) * i).toString();
    if (res[res.length - 1] == 1) {
      document.writeln(i);
      document.writeln("<br>");
    }
  }
}
document.writeln("<br>");
document.writeln("<br>");

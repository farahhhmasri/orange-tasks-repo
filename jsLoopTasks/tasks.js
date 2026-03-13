// 1
for (let i = 1; i < 11; i++) {
  document.write(`${i}`);
  if (i === 10) continue;
  document.write("-");
}

document.write("<br>");
document.write("<br>");

// 2
let sum = 0;
for (let i = 0; i < 31; i++) {
  sum += i;
}
document.writeln(sum);
document.write("<br>");
document.write("<br>");

// 3
for (let i = 0; i < 51; i++) {
  if (i % 2 == 0) {
    document.writeln(`${i}`);
  }
}
document.write("<br>");
document.write("<br>");

// // 4
for (let i = 10; i > 0; i--) {
  document.writeln(`${i}`);
}
document.write("<br>");
document.write("<br>");

// 5
let counter = 3;
for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    if (row === 0) {
      document.writeln("A ");
    } else if (row === 1) {
      if (col < counter) {
        document.writeln("A ");
      } else {
        document.writeln("B ");
      }
    } else if (row === 2) {
      if (col < counter) {
        document.writeln("A ");
      } else {
        document.writeln("C ");
      }
    } else if (row === 3) {
      if (col < counter) {
        document.writeln("A ");
      } else {
        document.writeln("D ");
      }
    } else {
      document.writeln("E ");
    }
  }
  if ([1, 2, 3].includes(row)) {
    counter -= 1;
  }

  document.writeln("<br>");
}
document.write("<br>");
document.write("<br>");

// 6
let counter2 = 4;
for (let row = 1; row < 6; row++) {
  for (let col = 1; col < 6; col++) {
    if (row === 1) {
      document.writeln(`${1} `);
    } else if (row === 2) {
      if (col < counter2) {
        document.writeln(`${1} `);
      } else {
        document.writeln(`${row} `);
      }
    } else if (row === 3) {
      if (col < counter2) {
        document.writeln(`${1} `);
      } else {
        document.writeln(`${row} `);
      }
    } else if (row === 4) {
      if (col < counter2) {
        document.writeln(`${1} `);
      } else {
        document.writeln(`${row} `);
      }
    } else {
      document.writeln(`${row} `);
    }
  }
  if ([2, 3, 4].includes(row)) {
    counter2 -= 1;
  }

  document.writeln("<br>");
}
document.write("<br>");
document.write("<br>");

// 7
document.writeln("<br>");
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6; j++) {
    if (i === j) {
      document.writeln(i);
    } else {
      document.writeln(0);
    }
  }
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

// 8
let num = 5;
let result = 1;
for (let i = num; i > 0; i--) {
  result *= i;
}
document.writeln(result);
document.writeln("<br>");
document.writeln("<br>");

// 9
let prev1 = 0;
let prev2 = 1;
let temp;
document.writeln(prev1);
for (let i = 0; i < 10; i++) {
  document.writeln(prev2);
  temp = prev2;
  prev2 = prev1 + prev2;
  prev1 = temp;
}
document.writeln("<br>");
document.writeln("<br>");

// 10
let count = 0;
let str = "Orange Coding School";
for (let char of str) {
  if (char === "c" || char === "C") {
    count += 1;
  }
}
document.writeln(count);
document.writeln("<br>");
document.writeln("<br>");

// 11
for (let row = 1; row < 6; row++) {
  for (let col = 1; col < 6; col++) {
    document.writeln(
      `${row} * ${col} = `,
      row * col,
      "&nbsp;&nbsp;&nbsp;&nbsp;",
    );
  }
  document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

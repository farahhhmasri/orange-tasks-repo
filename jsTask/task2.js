// let mark = prompt("Enter mark: ");
// mark = Number(mark);

let mark = 73;

if (mark < 50) {
  document.writeln("FAIL");
} else if (mark >= 50 && mark < 60) {
  document.writeln("D");
} else if (mark >= 60 && mark < 70) {
  document.writeln("C");
} else if (mark >= 70 && mark < 80) {
  document.writeln("B");
} else if (mark >= 80 && mark < 90) {
  document.writeln("A");
} else if (mark >= 90 && mark <= 100) {
  document.writeln("A+");
} else {
  document.writeln("Mark isnt within the range.");
}

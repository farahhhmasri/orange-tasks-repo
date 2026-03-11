let input1 = prompt("Enter operation: ");
let input2 = prompt("Enter first number: ");
let input3 = prompt("Enter second number: ");

input2 = Number(input2);
input3 = Number(input3);

switch (input1) {
  case "+":
    console.log(`${input2} + ${input3} =`, input2 + input3);
    break;
  case "-":
    console.log(`${input2} - ${input3} =`, input2 - input3);
    break;
  case "*":
    console.log(`${input2} * ${input3} =`, input2 * input3);
    break;
  case "/":
    console.log(`${input2}/${input3} =`, input2 / input3);
    break;
  default:
    console.log("Invalid Operation");
}

let age = prompt("enter age: ");
age = Number(age);

if (age < 13) {
  alert("You are a child");
  console.log("You are a child");
} else if (age >= 13 && age <= 19) {
  alert("You are a teenager");
  console.log("You are a teenager");
} else if (age >= 20 && age <= 59) {
  alert("You are an adult");
  console.log("You are an adult");
} else if (age >= 60) {
  alert("You are a senior");
  console.log("You are a senior");
}

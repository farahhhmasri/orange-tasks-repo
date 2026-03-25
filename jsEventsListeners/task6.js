let div = document.createElement("div");

let btn1 = document.createElement("button");
btn1.innerText = "+";
btn1.style.width = "50px";
btn1.style.color = "red";

let btn2 = document.createElement("button");
btn2.innerText = "-";
btn2.style.width = "50px";
btn2.style.color = "red";

let num = document.createElement("p");
num.innerText = "0";
let currentNum = 0;

div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(num);

document.body.appendChild(div);

btn1.addEventListener("click", (event) => {
  currentNum += 1;
  if (currentNum == 0) document.body.style.backgroundColor = "black";
  else if (currentNum > 0) document.body.style.backgroundColor = "green";
  else document.body.style.backgroundColor = "red";

  num.innerText = currentNum;
});

btn2.addEventListener("click", (event) => {
  currentNum -= 1;
  if (currentNum == 0) document.body.style.backgroundColor = "black";
  else if (currentNum > 0) document.body.style.backgroundColor = "green";
  else document.body.style.backgroundColor = "red";

  num.innerText = currentNum;
});

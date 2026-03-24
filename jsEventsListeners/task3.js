let body = document.body;
let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.style.display = "flex";
let text1 = document.createElement("span");
let btn1 = document.createElement("button");
btn1.innerText = "delete";
text1.innerText = "Item 1";
li1.appendChild(text1);
li1.appendChild(btn1);

let li2 = document.createElement("li");
li2.style.display = "flex";
let text2 = document.createElement("span");
let btn2 = document.createElement("button");
btn2.innerText = "delete";
text2.innerText = "Item 2";
li2.appendChild(text2);
li2.appendChild(btn2);

ul.addEventListener("click", (event) => {
  ul.removeChild(event.target.parentElement);
});

ul.appendChild(li1);
ul.appendChild(li2);
body.appendChild(ul);

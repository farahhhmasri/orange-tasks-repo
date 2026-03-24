// task1
let body = document.getElementsByTagName("body")[0];
console.log(body);
console.log(body.children);
console.log(body.firstChild);
console.log(body.lastChild);

let element = document.getElementsByTagName("hr")[0];
console.log(element.nextSibling);

//  ===========================================================
// task2
let card = document.createElement("div");
card.setAttribute("display", "flex");
card.setAttribute("width", "50%");
card.setAttribute("height", "30%");
card.setAttribute("alignItems", "center");

let title = document.createElement("h4");
title.innerText = "Card Title";

let desc = document.createElement("p");
desc.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

let image = document.createElement("img");
image.setAttribute("src", "img.jpg");
image.setAttribute("width", "100px");
image.setAttribute("height", "100px");

card.appendChild(title);
card.appendChild(desc);
card.appendChild(image);

document.body.appendChild(card);

//  ===========================================================
// task3
let listDiv = document.getElementsByTagName("div")[0];
console.log(listDiv.children[0].children[0]);

//  ===========================================================
// task4
let allbody = document.body;

let styling = document.createElement("style");
styling.innerHTML = ".h3style{text-decoration:underline;}";
document.head.appendChild(styling);

let h3 = document.createElement("h3");
h3.innerText = "New title - Simple HTML Page";
h3.classList.add("h3style");

let h2 = allbody.getElementsByTagName("h2")[0];
allbody.replaceChild(h3, h2); // new, old

//  ===========================================================
// Bonus - dynamic table
let tableData = [
  { name: "alex", age: 25, gender: "m" },
  { name: "sam", age: 23, gender: "f" },
  { name: "ali", age: 30, gender: "m" },
];

let table = document.createElement("table");
let head;
let data;
let row;

// header
firstObj = tableData[0];
headerRow = document.createElement("thead");
for (let key in firstObj) {
  head = document.createElement("th");
  head.innerText = key;
  headerRow.appendChild(head);
}
table.appendChild(headerRow);

// other rows
for (let item of tableData) {
  row = document.createElement("tr");
  for (let key in item) {
    data = document.createElement("td");
    data.innerText = item[key];
    row.appendChild(data);
  }
  table.appendChild(row);
}
allbody.appendChild(table);

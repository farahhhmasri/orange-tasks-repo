// task2
let task2 = document.getElementsByClassName("task2")[0];
let flagImg = document.createElement("img");
flagImg.setAttribute("width", "100px");
flagImg.setAttribute("height", "100px");

let select = document.getElementsByTagName("select")[0];
flagImg.setAttribute("src", `${select.value}.png`);

select.addEventListener("input", (event) => {
  let clicked = event.target.value;
  flagImg.setAttribute("src", `${clicked}.png`);
});

task2.appendChild(flagImg);

// task3
let task3 = document.getElementsByClassName("task3")[0];
let style = document.createElement("style");
style.innerHTML = ".show{display:block;}";
document.head.appendChild(style);

task3.addEventListener("click", (event) => {
  if (event.target.name === "show") {
    let parent = event.target.parentElement;
    let paragraph = parent.nextElementSibling;
    paragraph.classList.toggle("show");
  } else {
    let parent = event.target.parentElement;
    parent.style.display = "none";
  }
});

// task4
let task4 = document.getElementsByClassName("task4")[0];
let textarea = document.getElementsByTagName("textarea")[0];
task4.addEventListener("click", (event) => {
  let propertyName = event.target.name;
  if (propertyName === "italic") {
    if (event.target.checked) textarea.style.fontStyle = "italic";
    else textarea.style.fontStyle = "normal";
  } else if (propertyName === "bold") {
    if (event.target.checked) textarea.style.fontWeight = "bold";
    else textarea.style.fontWeight = "normal";
  } else if (propertyName === "underline") {
    if (event.target.checked) textarea.style.textDecoration = "underline";
    else textarea.style.textDecoration = "none";
  }
});

task4.addEventListener("input", (event) => {
  let propertyName = event.target.name;
  let propertyValue = event.target.value;
  if (propertyName === "fontFamily") {
    textarea.style.fontFamily = propertyValue;
  } else if (propertyName === "fontSize") {
    textarea.style.fontSize = propertyValue + "px";
  }
});

// task5
let task5 = document.getElementsByClassName("task5")[0];
setInterval(() => {
  task5.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}, 1000);

let body = document.getElementsByTagName("body")[0];

let style = document.createElement("style");
style.innerHTML =
  ".btn-style{width:100px; height:30px; background-color:pink;}";
document.head.appendChild(style);

// btn.style.width = "100px";
// btn.style.height = "30px";
// btn.style.backgroundColor = "pink";

let btn = document.createElement("button");
btn.classList.add("btn-style");

style.innerHTML += ".clicked-btn{background-color:green;}";
btn.addEventListener("click", (e) => {
  btn.innerText = "Clicked!";
  btn.classList.toggle("clicked-btn");
  if (!btn.classList.contains("clicked-btn")) {
    btn.innerText = "";
  }
});
body.appendChild(btn);

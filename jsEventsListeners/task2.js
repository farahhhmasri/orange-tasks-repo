let body = document.body;

let input = document.createElement("input");
input.setAttribute("type", "text");

let p = document.createElement("p");
input.addEventListener("input", (event) => {
  p.innerText = event.target.value;
});

body.appendChild(input);
body.appendChild(p);

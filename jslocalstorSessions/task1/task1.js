let btn = document.getElementById("saveBtn");
let name = document.getElementById("input");

btn.addEventListener("click", (event) => {
  localStorage.setItem("name", name.value);
  let div = document.createElement("div");
  div.innerText = localStorage.getItem("name");
  document.body.append(div);
});

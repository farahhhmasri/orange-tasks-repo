let section = document.createElement("section");
let p = document.createElement("p");
p.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi consequatur magnam. Placeat corrupti odio temporibus fugiat dignissimos sit distinctio esse, numquam, quisquam recusandae labore aperiam ex eaque ducimus quae!";

let btn = document.createElement("button");
btn.innerText = "Hide/Show";

let style = document.createElement("style");
style.innerHTML = ".hide{display:none;}";
document.head.appendChild(style);

section.appendChild(p);
section.appendChild(btn);

btn.addEventListener("click", (event) => {
  let sec = event.target.previousElementSibling;
  sec.classList.toggle("hide");
});

document.body.appendChild(section);

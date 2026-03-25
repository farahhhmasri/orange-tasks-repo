title = "Card Fake Title";
content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus. Mollitia qui nulla quisquam dolor soluta recusandae, incidunt numquam perferendis neque, cumque, voluptatem ex! Voluptatem ipsa quod optio vero dolorum.";

let cardDiv = document.createElement("div");
cardDiv.style.display = "flex";
cardDiv.style.backgroundColor = "pink";
cardDiv.style.justifyContent = "center";

// creating active class
let style = document.createElement("style");
style.innerHTML = ".active {background-color:blue;}";
document.head.appendChild(style);

// creating three cards
for (let i = 0; i < 3; i++) {
  let card = document.createElement("div");
  card.style.width = "30%";
  card.style.height = "70%";

  let cardTitle = document.createElement("h3");
  cardTitle.innerText = title;

  let cardContent = document.createElement("p");
  cardContent.innerText = content;

  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  cardDiv.appendChild(card);
}

cardDiv.addEventListener("click", (event) => {
  let parent = document.getElementsByTagName("div")[0];
  let otherChildren = parent.children;
  for (child of otherChildren) {
    if (child.classList.contains("active")) child.classList.remove("active");
  }
  event.target.parentNode.classList.add("active");
});

document.body.appendChild(cardDiv);

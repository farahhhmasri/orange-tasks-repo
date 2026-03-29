const users = [
  { name: "Ahmad" },
  { name: "Ali" },
  { name: "Sara" },
  { name: "Lana" },
];

let result = document.getElementById("result");
let search = document.getElementById("search");
localStorage.setItem("users", JSON.stringify(users));

let usersValues = JSON.parse(localStorage.getItem("users"));
let savedSearch = localStorage.getItem("lastSearch");
let resetSearch = document.getElementById("resetSearch");

if (savedSearch != null && savedSearch != "") {
  let searchValue = savedSearch.toLowerCase();
  result.innerHTML = "";

  let filteredUsers = usersValues.filter((user) =>
    user.name.toLowerCase().includes(searchValue),
  );

  for (let user of filteredUsers) {
    let resultItem = document.createElement("div");

    resultItem.innerHTML = `
    <div>
      <img/>
      <small>${user.name}</small>
    </div>
    <button type="button" class="delete-btn" id="deletebtn" name="del">Delete</button>
  `;

    resultItem.classList.add("item");
    result.appendChild(resultItem);
  }
} else {
  for (let user of usersValues) {
    let resultItem = document.createElement("div");
    resultItem.innerHTML = `
    <div>
      <img/>
      <small>${user.name}</small>
    </div>
    <button type="button" class="delete-btn" id="deletebtn" name="del">Delete</button>
  `;

    resultItem.classList.add("item");
    result.appendChild(resultItem);
  }
}

search.addEventListener("input", (event) => {
  let searchValue = event.target.value;
  result.innerHTML = "";
  let filteredUsers = usersValues.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  for (let user of filteredUsers) {
    let resultItem = document.createElement("div");

    resultItem.innerHTML = `
      <div>
        <img/>
        <small>${user.name}</small>
      </div>
      <button type="button" class="delete-btn" name="del">Delete</button>
    `;

    resultItem.classList.add("item");
    result.appendChild(resultItem);
    localStorage.setItem("lastSearch", searchValue);
  }
});

result.addEventListener("click", (event) => {
  let target = event.target;
  if (target.name === "del") {
    let parent = target.parentElement;
    result.removeChild(parent);
  }
});

resetSearch.addEventListener("click", (event) => {
  search.innerText = "";
  localStorage.removeItem("lastSearch");
  result.innerHTML = "";
  for (let user of usersValues) {
    let resultItem = document.createElement("div");
    resultItem.innerHTML = `
      <div>
        <img/>
        <small>${user.name}</small>
      </div>
      <button type="button" class="delete-btn" name="del">Delete</button>
    `;
    resultItem.classList.add("item");
    result.appendChild(resultItem);
  }
});

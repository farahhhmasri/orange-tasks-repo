let cardscontainer = document.getElementById("cardscontainer");
let loadDiv = document.getElementById("loadDiv");

let searchBar = document.getElementById("searchBar");
let usersData = [];

fetch("https://api.github.com/users")
  .then((resp) => resp.json())
  .then((users) => {
    loadDiv.style.display = "none";
    users = users.slice(0, 10);
    usersData.push(...users);
    searchBar.style.display = "block";
    users.forEach((user) => {
      let userDiv = document.createElement("div");
      userDiv.className = "card";

      let username = user.login;
      let avatar = user.avatar_url;
      let link = user.html_url;

      userDiv.innerHTML = `
            <img src=${avatar}>
            <span>${username}</span>
            <a href=${link} target="_blank">View Profile</a>
            `;

      cardscontainer.appendChild(userDiv);
    });
  })
  .catch((err) => {
    loadDiv.innerHTML = "";
    loadDiv.style.color = "red";
    loadDiv.textContent = "ERROR While fetching the data" + err;
  });

searchBar.addEventListener("input", (event) => {
  cardscontainer.innerHTML = "";
  let searchValue = event.target.value;

  usersData.forEach((user) => {
    let username = user.login;

    if (username.includes(searchValue)) {
      let userDiv = document.createElement("div");
      userDiv.className = "card";
      let avatar = user.avatar_url;
      let link = user.html_url;

      userDiv.innerHTML = `
            <img src=${avatar}>
            <span>${username}</span>
            <a href=${link} target="_blank">View Profile</a>
            `;

      cardscontainer.appendChild(userDiv);
    }
  });
});

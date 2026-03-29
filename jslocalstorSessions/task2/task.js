let namee = document.getElementById("name");
let email = document.getElementById("email");
let savebtn = document.getElementById("save");
let contentDiv = document.getElementById("content");

let nameval = localStorage.getItem("name");
let emailval = localStorage.getItem("email");

if (nameval != null && emailval != null) {
  contentDiv.innerText = `Name: ${nameval}\nEmail: ${emailval}`;
}

savebtn.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.setItem("name", namee.value);
  localStorage.setItem("email", email.value);
});

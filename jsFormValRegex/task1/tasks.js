let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");

let fnameResult = document.getElementById("fname-show");
let lnameResult = document.getElementById("lname-show");
let emailResult = document.getElementById("email-show");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fnameResult.innerText = fname.value;
  lnameResult.innerText = lname.value;
  emailResult.innerText = email.value;
});

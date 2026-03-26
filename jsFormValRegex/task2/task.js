let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");

let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");
let emailError = document.getElementById("emailError");

let fnameShow = document.getElementById("fname-show");
let lnameShow = document.getElementById("lname-show");
let emailShow = document.getElementById("email-show");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fnameError.innerText = "";
  lnameError.innerText = "";
  emailError.innerText = "";
  let isValid = true;

  if (fname.value === "" || /\d/.test(fname.value)) {
    fnameError.style.color = "red";
    fnameError.innerText =
      "First name is required & must contains letters only";
    isValid = false;
  }
  if (lname.value === "" || /\d/.test(lname.value)) {
    lnameError.style.color = "red";
    lnameError.innerText = "Last name is required & must contains letters only";
    isValid = false;
  }
  if (email.value === "") {
    emailError.style.color = "red";
    emailError.innerText = "Email is required";
    isValid = false;
  }
  if (isValid) {
    fnameShow.innerText = fname.value;
    lnameShow.innerText = lname.value;
    emailShow.innerText = email.value;
    alert("Form submitted successfully ✅");
  }
});

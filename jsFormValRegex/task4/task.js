let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let confEmail = document.getElementById("confEmail");
let password = document.getElementById("password");
let confPassword = document.getElementById("confPassword");
let dob = document.getElementById("dob");

let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");
let dobError = document.getElementById("dobError");
let emailError = document.getElementById("emailError");
let confEmailError = document.getElementById("confEmailError");
let passwordError = document.getElementById("passwordError");
let confPasswordError = document.getElementById("confPasswordError");
let formError = document.getElementById("formError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  let birthYear = new Date(dob).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^[A-Z](?=(?:.*\d){2,})(?=.*[!@#$%^&*(),.?":{}|<>]).{7,31}$/;

  fnameError.innerText = "";
  lnameError.innerText = "";
  dobError.innerText = "";
  emailError.innerText = "";
  confEmailError.innerText = "";
  passwordError.innerText = "";
  confPasswordError.innerText = "";
  formError.innerText = "";

  if (fname.value === "" || /\d/.test(fname.value)) {
    fnameError.style.color = "red";
    fnameError.innerText = "First name needs to be filled with letters only.";
    isValid = false;
  }
  if (lname.value === "" || /\d/.test(lname.value)) {
    lnameError.style.color = "red";
    lnameError.innerText = "Last name needs to be filled with letters only.";
    isValid = false;
  }

  if (dob.value === "" || age < 15) {
    dobError.style.color = "red";
    dobError.innerText =
      "Date of birth mustn't be empty, fill it with year less than 2011. ";
    isValid = false;
  }

  if (email.value === "" || !emailPattern.test(email.value)) {
    emailError.style.color = "red";
    emailError.innerText = "Email needs to be filled with valid email address.";
    isValid = false;
  }

  if (confEmail.value != email.value) {
    confEmailError.style.color = "red";
    confEmailError.innerText = "Email confirmation must match email.";
    isValid = false;
  }

  if (password.value === "" || !passwordPattern.test(password.value)) {
    passwordError.style.color = "red";
    passwordError.innerText = "Password must: start with a capital letter,\n";
    passwordError.innerText += "contain at least 2 numbers,\n";
    passwordError.innerText += "contain at least 1 special character,\n";
    passwordError.innerText += "Length must be between 8 and 32 characters.";
    isValid = false;
  }

  if (confPassword.value != password.value) {
    confPasswordError.style.color = "red";
    confPasswordError.innerText = "Password confirmation must match password.";
    isValid = false;
  }

  if (!isValid)
    formError.innerText = "Please fix the errors above to submit the form.";
  else alert("Form submitted successfully ✅");
});

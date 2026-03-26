let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");

let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");
let emailError = document.getElementById("emailError");
let mobileError = document.getElementById("mobileError");

let fnameShow = document.getElementById("fname-show");
let lnameShow = document.getElementById("lname-show");
let emailShow = document.getElementById("email-show");
let mobileShow = document.getElementById("mobile-show");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fnameError.innerText = "";
  lnameError.innerText = "";
  emailError.innerText = "";
  mobileError.innerText = "";
  let isValid = true;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  if (email.value === "" || !pattern.test(email.value)) {
    emailError.style.color = "red";
    emailError.innerText =
      "Email is required & needs to folllow the correct format";
    isValid = false;
  }
  if (mobile.value === "" || /[a-zA-Z]/.test(mobile.value)) {
    mobileError.style.color = "red";
    mobileError.innerText = "Mobile needs to filled and contains digits only";
    isValid = false;
  }
  if (isValid) {
    fnameShow.innerText = fname.value;
    lnameShow.innerText = lname.value;
    emailShow.innerText = email.value;
    mobileShow.innerText = mobile.value;
    alert("Form submitted successfully ✅");
  }
});

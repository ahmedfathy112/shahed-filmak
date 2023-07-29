let logForm = document.getElementById("log-form");
let signForm = document.getElementById("sign-form");
let logBtn = document.getElementById("log-in");
let signBtn = document.getElementById("sign-up");
let formTitle = document.getElementById("form-title");
let adminForm = document.getElementById("admin-form");
let adminBtn = document.getElementById("admin-btn");

logBtn.addEventListener("click", () => {
  logForm.style.display = "none";
  adminForm.style.display = "none";
  signForm.style.display = "flex";
  formTitle.innerHTML = "SignUp Now";
});
signBtn.addEventListener("click", () => {
  signForm.style.display = "none";
  adminForm.style.display = "none";
  logForm.style.display = "flex";
  formTitle.innerHTML = "Log-In Now";
});
adminBtn.addEventListener("click", () => {
  signForm.style.display = "none";
  logForm.style.display = "none";
  adminForm.style.display = "flex";
  formTitle.innerHTML = "Log-In as admin";
});

let password = document.getElementById("pass");
let confirmPass = document.getElementById("confirm-pass");
let btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", () => {
  if (confirmPass.innerHTML != password.innerHTML) {
    confirmPass.style.border = "3px solid red";
  } else {
    confirmPass.style.border = "none";
  }
});

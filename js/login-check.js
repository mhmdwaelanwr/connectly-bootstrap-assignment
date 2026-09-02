var loginForm = document.getElementById("loginForm");
var userLogin = document.getElementById("userLogin");
var userPassword = document.getElementById("userPassword");
var showPassword = document.getElementById("showPassword");
var loginMessage = document.getElementById("loginMessage");

// show and hide password
showPassword.addEventListener("change", function () {
  if (showPassword.checked == true) {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var loginValue = userLogin.value.trim();
  var passValue = userPassword.value;

  loginMessage.innerHTML = "";

  if (loginValue == "") {
    loginMessage.innerHTML = '<div class="alert alert-danger py-2">Please enter valid login data.</div>';
    return;
  }

  if (passValue.length < 6) {
    loginMessage.innerHTML = '<div class="alert alert-danger py-2">Please enter valid login data.</div>';
    return;
  }

  loginMessage.innerHTML = '<div class="alert alert-success py-2">Login form is valid.</div>';
});

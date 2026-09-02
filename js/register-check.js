var registerForm = document.getElementById("registerForm");
var registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var mailAddress = document.getElementById("mailAddress").value.trim();
  var phoneNumber = document.getElementById("phoneNumber").value.trim();
  var passwordOne = document.getElementById("newPassword").value;
  var passwordTwo = document.getElementById("repeatPassword").value;
  var birthDate = document.getElementById("birthDate").value;
  var selectedGender = document.querySelector('input[name="gender"]:checked');

  registerMessage.innerHTML = "";

  if (firstName == "" || lastName == "" || mailAddress == "" || phoneNumber == "") {
    registerMessage.innerHTML = '<div class="alert alert-danger py-2">Please fill in the required information.</div>';
    return;
  }

  if (passwordOne.length < 6) {
    registerMessage.innerHTML = '<div class="alert alert-danger py-2">Password must contain at least 6 characters.</div>';
    return;
  }

  if (passwordOne != passwordTwo) {
    registerMessage.innerHTML = '<div class="alert alert-danger py-2">The two passwords are not the same.</div>';
    return;
  }

  if (selectedGender == null || birthDate == "") {
    registerMessage.innerHTML = '<div class="alert alert-danger py-2">Please select gender and birthdate.</div>';
    return;
  }

  registerMessage.innerHTML = '<div class="alert alert-success py-2">Account data looks good.</div>';
});

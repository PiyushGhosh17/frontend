let button = document.getElementById("form");
let pass = document.getElementById("pass");
let user = document.getElementById("user");

const checkPass = (event) => {
  event.preventDefault();
  // var pat=/^[A-Za-z0-9]\w{8,20}$/;
  if (user.value === "") {
    alert("Please Enter username");
    user.focus();
    return false;
  }
  if (pass.value.length === 0 || pass.value.length < 8) {
    alert("Password length should be 8");
    pass.focus();
    return false;
  }
  if (
    !(pass.value.match(/[A-Za-z]{7,20}/) && pass.value.match(/[0-9]{1,20}/))
  ) {
    alert("8 characters and at least 1 digit is required");
    pass.focus();
    return false;
  }

  alert("Login Successfull");
  return true;
};

button.addEventListener("click", checkPass);

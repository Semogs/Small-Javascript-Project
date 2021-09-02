let hours = document.getElementById("hours");
let firstName = document.getElementById("firstname")
let email = document.getElementById("email")
let comments = document.getElementById("comments")
let subBtn = document.querySelector(".sbtn");

subBtn.disabled = true;

firstName.addEventListener("change", stateHandle);
email.addEventListener("change", stateHandle);
comments.addEventListener("change", stateHandle);
hours.addEventListener("change", stateHandle);

function stateHandle() {
  if (firstName.value === "") {
    subBtn.disabled = true;
  } else if (email.value === "") {
    subBtn.disabled = true;
  } else if (hours.value === "") {
    subBtn.disabled = true;
  } else if (comments.value === "") {
    subBtn.disabled = true;
  } else {
    subBtn.disabled = false;
  }
}
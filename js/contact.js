let req = document.querySelector(".req");
let subBtn = document.querySelector(".sbtn");

subBtn.disabled = true;

req.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".req").value === "") {
    subBtn.disabled = true;
  } else {
    subBtn.disabled = false;
  }
}
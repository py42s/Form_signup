let maforme = document.getElementById("maforme");
let myinput = document.getElementById("first-name");
let myinput1 = document.getElementById("last-name");
let myinput2 = document.getElementById("email");
let myinput3 = document.getElementById("password");

//Cas ou le champ est vide

maforme.addEventListener("submit", function (e) {
  if (myinput.value.trim() == "") {
    myinput.classList.add("error-icon");
    let myError = document.querySelector("#error");
    myError.innerHTML = "First name can not be empty";
    myError.style.color = "red";
    e.preventDefault();
  }

  if (myinput1.value == "") {
    myinput1.classList.add("error-icon");
    let myError = document.querySelector("#error1");
    myError.innerHTML = "Last can not be empty";
    myError.style.color = "red";
    e.preventDefault();
  }

  if (myinput2.value == "") {
    myinput2.classList.add("error-icon");
    let myError = document.querySelector("#error2");
    myError.innerHTML = "Email can not be empty";
    myError.style.color = "red";
    e.preventDefault();
  }

  if (myinput3.value == "") {
    myinput3.classList.add("error-icon");
    let myError = document.querySelector("#error3");
    myError.innerHTML = "password can not be empty";
    myError.style.color = "red";
    e.preventDefault();
  }
});

//Au cas ou le champ est completer

maforme.addEventListener("input", function (f) {
  if (myinput.value.trim() != "") {
    myinput.classList.remove("error-icon");
    let myError = document.querySelector("#error");
    myError.innerHTML = "First name can not be empty";
    myError.style.visibility = "hidden";
  }
});
maforme.addEventListener("input", function (f) {
  if (myinput1.value.trim() != "") {
    myinput1.classList.remove("error-icon");
    let myError = document.querySelector("#error1");
    myError.innerHTML = "Last can not be empty";
    myError.style.visibility = "hidden";
  }
});
maforme.addEventListener("input", function (f) {
  if (myinput2.value.trim() != "") {
    myinput2.classList.remove("error-icon");
    let myError = document.querySelector("#error2");
    myError.innerHTML = "Email can not be empty";
    myError.style.visibility = "hidden";
  }
});
maforme.addEventListener("input", function (f) {
  if (myinput3.value.trim() != "") {
    myinput3.classList.remove("error-icon");
    let myError = document.querySelector("#error3");
    myError.innerHTML = "password can not be empty";
    myError.style.visibility = "hidden";
  }
});

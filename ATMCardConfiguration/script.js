var complete = document.getElementById("submit");
var error = document.getElementsByClassName("errors");
var inputs = document.querySelectorAll("input");
var names = document.getElementById("name");
var atmno = document.getElementById("atmno");
var exp = document.getElementById("exp");
var expyear = document.getElementById("expyear");
var cvc = document.getElementById("cvc");
var cardname = document.querySelector(".card-name");
var cardno = document.querySelector(".card-no");
var cardexp = document.querySelector(".card-expire");
var cardcvc = document.querySelector(".card-ccv");
var cardexpy = document.querySelector(".card-expirey");
var completed = document.querySelector(".completed");
var continuebtn = document.getElementById("continue");
var userform = document.querySelector(".user-details");
var form = document.querySelector(".forms");

const regex = new RegExp(/[0-9]/g);

names.addEventListener("input", (event) => {
  cardname.innerText = names.value;
});

atmno.addEventListener("input", (event) => {
  cardno.innerText = atmno.value;
  if (atmno.value === "") {
    error[1].innerText = "Can't be blank";
    cardno.innerText = "0000 0000 0000 0000";
  } else if (!regex.test(atmno.value)) {
    inputs[1].classList.add("invalid");
    error[1].innerText = "Wrong Format. Numbers only";
    let number = atmno;
    number = number.value.split(" ").join("");
    let fixedNumber = number.match(/.{1,4}/g).join(" ");
    atmno.value = fixedNumber;
  } else {
    inputs[1].classList.remove("invalid");
    error[1].innerText = "";
    let number = atmno;
    number = number.value.split(" ").join("");
    let fixedNumber = number.match(/.{1,4}/g).join(" ");
    atmno.value = fixedNumber;
  }
});
exp.addEventListener("input", (event) => {
  cardexp.innerText = exp.value;
  if (exp.value === "") {
    error[2].innerText = "Can't be blank";
    cardexp.innerText = "00";
  } else if (!regex.test(exp.value)) {
    inputs[2].classList.add("invalid");
    error[2].innerText = "Wrong Format. Numbers only";
  } else {
    inputs[2].classList.remove("invalid");
    error[2].innerText = "";
  }
});

expyear.addEventListener("input", (event) => {
  cardexpy.innerText = expyear.value;
  if (expyear.value === "") {
    error[3].innerText = "Can't be blank";
    cardexpy.innerText = "00";
  } else if (!regex.test(expyear.value)) {
    inputs[3].classList.add("invalid");
    error[3].innerText = "Wrong Format. Numbers only";
  } else {
    inputs[3].classList.remove("invalid");
    error[3].innerText = "";
  }
});

cvc.addEventListener("input", (event) => {
  cardcvc.innerText = cvc.value;
  if (cvc.value === "") {
    error[4].innerText = "Can't be blank";
    cardcvc.innerText = "000";
  } else if (!regex.test(cvc.value)) {
    inputs[4].classList.add("invalid");
    error[4].innerText = "Wrong Format. Numbers only";
  } else {
    inputs[4].classList.remove("invalid");
    // error[4].innerText = "";
  }
});

complete.addEventListener("click", (event) => {
  atmConfigure();
  event.preventDefault();
});

function atmConfigure(e) {
  var error = document.getElementsByClassName("errors");
  var inputs = document.querySelectorAll("input");

  if (!inputs[0].value) {
    inputs[0].classList.add("invalid");
    error[0].innerHTML = "Name is required";
  } else if (!inputs[1].value) {
    inputs[1].classList.add("invalid");
    error[1].innerHTML = "Card number is required";
  } else if (!inputs[2].value) {
    inputs[2].classList.add("invalid");
    error[2].innerHTML = "Can't be blank";
  } else if (!inputs[3].value) {
    inputs[3].classList.add("invalid");
    error[3].innerHTML = "Can't be blank";
  } else if (!inputs[4].value) {
    inputs[4].classList.add("invalid");
    error[4].innerHTML = "Can't be blank";
  } else {
    completed.style.display = "block";
    userform.style.display = "none";
  }
}

continuebtn.addEventListener("click", function (e) {
  completed.style.display = "none";
  userform.style.display = "block";
  form.reset();
});

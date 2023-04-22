var btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  calculateAge();
});

function calculateAge() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var text = document.getElementsByClassName("text");
  var error = document.getElementsByClassName("errors");
  var inputs = document.querySelectorAll("input");
  var err_text = document.getElementById("err_text");

  if (!inputs[0].value) {
    inputs[0].classList.add("invalid");
    text[0].classList.add("invalid");
    error[0].innerHTML = "This field is required";
  } else {
    inputs[0].classList.remove("invalid");
    text[0].classList.remove("invalid");
    error[0].innerHTML = "";
  }
  if (!inputs[1].value) {
    inputs[1].classList.add("invalid");
    text[1].classList.add("invalid");
    error[1].innerHTML = "This field is required";
  } else {
    inputs[1].classList.remove("invalid");
    text[1].classList.remove("invalid");
    error[1].innerHTML = "";
  }
  if (!inputs[2].value) {
    inputs[2].classList.add("invalid");
    text[2].classList.add("invalid");
    error[2].innerHTML = "This field is required";
  } else {
    inputs[2].classList.remove("invalid");
    text[2].classList.remove("invalid");
    error[2].innerHTML = "";
  }

  // current date
  var dateNow = new Date();
  var userDate = new Date(year, month - 1, day);

  var ageInMilliseconds = dateNow.getTime() - userDate.getTime();
  var age = new Date(ageInMilliseconds);
  var years = age.getFullYear() - 1970;
  var months = age.getMonth() + 1;
  var days = age.getDate() - 1;

  var userYear = document.getElementById("y");
  userYear.innerHTML = years;

  var userMonth = document.getElementById("months");
  userMonth.innerHTML = months;

  var userDay = document.getElementById("days");
  userDay.innerHTML = days;
}

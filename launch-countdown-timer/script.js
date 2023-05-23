let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function countdownTimer() {
  const sec = 1000,
    min = sec * 60,
    hr = min * 60,
    d = hr * 24;
  // option to specify personal date
  //   var countDownDate = new Date("June 1, 2023 10:39:59").getTime();
  // specify exact days via the getHours method
  var countDownDate = new Date().setHours(new Date().getHours() + 240);

  var x = setInterval(function () {
    var now = new Date().getTime();
    var difference = countDownDate - now;
    var day = Math.floor(difference / d);
    var hour = Math.floor((difference % d) / hr);
    var minute = Math.floor((difference % hr) / min);
    var second = Math.floor((difference % min) / sec);
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time-up").innerHTML = "Product Launched!";
    }
  }, 500);
}

console.log(countdownTimer());

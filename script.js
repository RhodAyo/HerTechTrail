const imgone = document.getElementById("imgone");
const imgtwo = document.getElementById("imgtwo");
const imgthree = document.getElementById("imgthree");
const imgfour = document.getElementById("imgfour");
const imgfive = document.getElementById("imgfive");
const imgsix = document.getElementById("imgsix");
const imgseven = document.getElementById("imgseven");
const imgeight = document.getElementById("imgeight");
const imgnine = document.getElementById("imgnine");

imgone.addEventListener("click", (event) => {
  event.target.style.background = "black";
  event.target.style.color = "rgb(245, 181, 109)";
});

imgtwo.addEventListener("click", (event) => {
  event.target.style.background = "rgba(53, 52, 61, 0.835)";
  event.target.style.color = "rgb(75, 52, 24)";
});

imgthree.addEventListener("click", (event) => {
  event.target.style.background = "rgb(55, 56, 61)";
  event.target.style.color = "rgb(245, 181, 109)";
});

imgfour.addEventListener("click", (event) => {
  event.target.style.background = "rgb(255, 219, 36)";
  event.target.style.color = "rgba(190, 139, 81, 0.942)";
});

imgfive.addEventListener("click", (event) => {
  event.target.style.background = "rgb(255, 255, 245)";
  event.target.style.color = "rgba(200, 146, 85, 0.646)";
});

imgsix.addEventListener("click", (event) => {
  event.target.style.background = "rgba(31, 58, 131, 0.753)";
  event.target.style.color = "rgb(245, 181, 109)";
});

imgseven.addEventListener("click", (event) => {
  event.target.style.background = "black";
  event.target.style.color = "rgb(183, 185, 194)";
});

imgeight.addEventListener("click", (event) => {
  event.target.style.background = "rgba(55, 56, 61, 0.778)";
  event.target.style.color = "rgb(54, 35, 18)";
});

imgnine.addEventListener("click", (event) => {
  event.target.style.background = "rgb(255, 219, 36)";
  event.target.style.color = "rgb(54, 35, 18)";
});

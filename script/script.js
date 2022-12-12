//elements
let viewEl = document.getElementById("views");
let costMobEl = document.getElementById("dollar-mob"); //for mobile
let costDeskEl = document.getElementById("dollar-desk"); //for desktop
let sliderEl = document.getElementById("price-slider");
let toggleEl = document.getElementById("billing");

const btn = document.getElementById("btn");
const socialIconEl = document.getElementById("socil-media");
//global variables
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

//event listneres

//for slider input
sliderEl.addEventListener("input", function () {
  updateValue();
  viewEl.innerHTML = pageViews[sliderEl.value];

  let value = this.value * 25;

  this.style.background = `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`;
});

//for toggle input
toggleEl.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
    document.getElementById("yearly").classList.add("selected");
    document.getElementById("monthly").classList.remove("selected");
  } else {
    isYearly = false;
    document.getElementById("monthly").classList.add("selected");
    document.getElementById("yearly").classList.remove("selected");
  }
  updateValue();
});

//for trial button
btn.addEventListener("click", function () {
  socialIconEl.classList.toggle("hidden");
  document.getElementById("monthly").classList.remove("selected");
  document.getElementById("yearly").classList.remove("selected");
});

//functions
function updateValue() {
  if (isYearly) {
    costDeskEl.innerHTML = perMonth[sliderEl.value] * 0.75;
    costMobEl.innerHTML = perMonth[sliderEl.value] * 0.75;
  } else {
    costDeskEl.innerHTML = perMonth[sliderEl.value];
    costMobEl.innerHTML = perMonth[sliderEl.value];
  }
}

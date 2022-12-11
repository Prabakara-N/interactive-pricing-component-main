//elements
let viewEl = document.getElementById("views");
let costEl = document.getElementById("dollar");
let sliderEl = document.getElementById("price-slider");
let toggleEl = document.getElementById("billing");

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
  } else {
    isYearly = false;
  }
  updateValue();
});

//functions
function updateValue() {
  if (isYearly) {
    costEl.innerHTML = perMonth[sliderEl.value] * 0.75;
  } else {
    costEl.innerHTML = perMonth[sliderEl.value];
  }
}

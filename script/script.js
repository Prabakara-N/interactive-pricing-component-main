// // get elements

// const pageViewEl = document.getElementById("views");
// const dollarEl = document.getElementById("dollar");
// const rangeEl = document.getElementById("range-input");
// const yearBillEl = document.getElementById("checkbox");

// const startBtn = document.querySelector(".btn");

// // global variables

// // page views in array
// let pageViews = ["10K", "50K", "100K", "500K", "1M"];
// // perMonths in array
// let perMonth = [8, 12, 16, 24, 36];
// // yearly
// let yearly = false;

// // event listeners
// rangeEl.addEventListener("input", function () {
//   updateValue();
//   pageViewEl.innerHTML = `${pageViews[rangeEl.value]} PAGE VIEWS`;
//   dollarEl.innerHTML = `$${perMonth[rangeEl.value]}/month`;
// });

// // yearly billing

// yearBillEl.addEventListener("change", function () {
//   if (yearly == false) {
//     yearly = true;
//   } else {
//     yearly = false;
//   }
//   updateValue();
// });

// // update value 25% discount

// function updateValue() {
//   if (yearly) {
//     dollarEl.innerText = `$${perMonth[rangeEl.value] * 0.75} /month`;
//   } else {
//     dollarEl.innerText = `$${perMonth[rangeEl.value]} /month`;
//   }
// }

let viewEl = document.getElementById("views");
let costEl = document.getElementById("dollar");
let sliderEl = document.getElementById("price-slider");
let toggleEl = document.getElementById("billing");

let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

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

toggleEl.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateValue();
});

function updateValue() {
  if (isYearly) {
    costEl.innerHTML = perMonth[sliderEl.value] * 0.75;
  } else {
    costEl.innerHTML = perMonth[sliderEl.value];
  }
}

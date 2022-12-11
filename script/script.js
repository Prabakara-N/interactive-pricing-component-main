// get elements

const pageViewEl = document.getElementById("views");
const dollarEl = document.getElementById("dollar");
const rangeEl = document.getElementById("range-input");
const yearBillEl = document.getElementById("checkbox");

const startBtn = document.querySelector(".btn");

// global variables

// page views in array
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
// perMonths in array
let perMonth = [8, 12, 16, 24, 36];
// yearly
let yearly = false;

// event listeners
rangeEl.addEventListener("input", function () {
  updateValue();
  pageViewEl.innerText = `${pageViews[rangeEl.value]} PAGE VIEWS`;
  dollarEl.innerText = `$${perMonth[rangeEl.value]}/month`;
});

// yearly billing

yearBillEl.addEventListener("change", function () {
  if (yearly == false) {
    yearly = true;
  } else {
    yearly = false;
  }
  updateValue();
});

// update value 25% discount

function updateValue() {
  if (yearly) {
    dollarEl.innerText = perMonth[rangeEl.value] * 0.75;
  } else {
    dollarEl.innerText = perMonth[rangeEl.value];
  }
}

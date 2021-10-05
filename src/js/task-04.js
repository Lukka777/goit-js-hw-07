let counterValue = 0;
const refValue = document.querySelector("#value");
const refDecrement = document.querySelector('[data-action="decrement"]');
const refIncrement = document.querySelector('[data-action="increment"]');

const increment = function () {
  counterValue += 1;
  refValue.textContent = counterValue;
};

const decrement = function () {
  counterValue -= 1;
  refValue.textContent = counterValue;
};

refDecrement.addEventListener("click", decrement);
refIncrement.addEventListener("click", increment);

const inputSelector = document.querySelector("#validation-input");
inputSelector.addEventListener("blur", (event) => {
  const inputLength = Number(inputSelector.dataset.length);
  if (inputLength === event.target.value.length) {
    inputSelector.classList.add("valid") ;
      inputSelector.classList.remove("invalid");
  } else {
    inputSelector.classList.add("invalid") ;
      inputSelector.classList.remove("valid");
  }
});

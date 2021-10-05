const fontSizeControl = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  textControl.style = `font-size:${event.target.value}px`;
});

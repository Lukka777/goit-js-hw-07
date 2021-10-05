const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const elem = document.querySelector("#ingredients");
ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  elem.appendChild(listItem);
});

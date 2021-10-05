const categories = document.querySelectorAll(".item");

categories.forEach((elem) => {
  const header = elem.querySelector("h2");
  const listItems = elem.querySelectorAll("li");

  console.log(`Категория: ${header.innerText}\nКоличество элементов: ${listItems.length}`);
});
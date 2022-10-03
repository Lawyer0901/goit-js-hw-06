// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const changeColorBtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", changeRandomColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeRandomColor() {
  const rndCol = getRandomHexColor();
  body.style.backgroundColor = rndCol;
  nameOfColor.textContent = rndCol;
}

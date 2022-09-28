// // Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// // Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// // Обновляй интерфейс новым значением переменной counterValue.

const decrBtn = document.querySelector("[data-action=decrement]");

const incrBtn = document.querySelector("[data-action=increment]");
const span = document.querySelector("#value");
let counterValue = 0;

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
console.log(counterValue);

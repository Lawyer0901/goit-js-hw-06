// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputValue = document.querySelector("#font-size-control");
console.log(inputValue);
const text = document.querySelector("#text");
console.log(text);

inputValue.addEventListener("input", biggerFontSizeText);

function biggerFontSizeText(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value) {
    text.style.fontSize = event.currentTarget.value + "px";
  }
}

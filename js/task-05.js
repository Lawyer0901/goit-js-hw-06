// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputName = document.querySelector("#name-input");
// console.log(inputName.textContent);
const outputName = document.querySelector("#name-output");
console.log(outputName.textContent);

inputName.addEventListener("input", onInputName);

function onInputName(event) {
  const emptyString = "";
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === emptyString) {
    return (outputName.textContent = "Anonymous");
  }
  return (outputName.textContent = event.currentTarget.value);
}

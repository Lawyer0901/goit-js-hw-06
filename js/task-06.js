// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputName = document.querySelector("#validation-input");

inputName.addEventListener("blur", outOfFocusInputName);
// console.dir(inputName);
function outOfFocusInputName(event) {
  inputName.classList.remove("valid");
  inputName.classList.remove("invalid");

  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length == inputName.dataset.length) {
    return inputName.classList.add("valid");
  }

  return inputName.classList.add("invalid");
}
// console.log(inputName.dataset.length);

// Напиши скрипт управления формой логина.
// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
const form = document.querySelector(".login-form");
console.dir(form);

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  const emptyString = "";
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };
  event.preventDefault();

  if (mail === emptyString || password === emptyString) {
    alert("Все поля должны быть заполнены");
  }
  console.log(formData);
  form.reset();
}

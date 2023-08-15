// const btn = document.getElementById("button");

// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   btn.value = "Отправка...";

//   const serviceID = "default_service";
//   const templateID = "template_cl2zyrx";

//   emailjs.sendForm(serviceID, templateID, this).then(
//     () => {
//       btn.value = "Отправить сообщение";
//       alert("Отправить сообщение?");
//     },
//     (err) => {
//       btn.value = "Отправить сообщение";
//       alert(JSON.stringify(err));
//     }
//   );
// });
const btn = document.getElementById("button");
const form = document.getElementById("form");
const anketWrapper = document.getElementById("anketWrapper");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Отправка...";

  const serviceID = "default_service";
  const templateID = "template_cl2zyrx";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Отправить сообщение";
      closeForm(); // Вызываем функцию для закрытия формы
    },
    (err) => {
      btn.value = "Отправить сообщение";
      console.error(JSON.stringify(err));
    }
  );
});

// Функция для закрытия формы
function closeForm() {
  // Можно добавить дополнительные действия, если необходимо
  form.reset(); // Сбрасываем содержимое формы
  anketWrapper.style.display = "none"; // Скрываем div с формой
}

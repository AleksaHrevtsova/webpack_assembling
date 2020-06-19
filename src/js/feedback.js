// декоратор - передает вызов функции не более 1 раза в ms
import debounce from "lodash.debounce";

const refs = { form: document.getElementById("feedback-form") };
const persistedFeedback = localStorage.getItem("feedback");

// если по ключу найдено значение в localStorage,
// то запиши его в значение нашей textarea
if (persistedFeedback) {
  const textarea = refs.form.elements.message;
  textarea.value = persistedFeedback;
}

// refs.form.addEventListener("input", (e) => {
//   const textarea = e.currentTarget.elements.message;
//   localStorage.setItem("feedback", textarea.value);
// });

refs.form.addEventListener(
  "input",
  debounce((e) => {
    const textarea = e.target;
    localStorage.setItem("feedback", textarea.value);
  }, 300),
);

// если пользовательвводитданные, они сохраняются,
// а когда произошла отправка, данные удаляются
refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem("feedback");
});

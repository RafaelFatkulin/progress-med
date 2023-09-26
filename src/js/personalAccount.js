import mask from "./modules/mask";
import select2 from "./modules/select2";
import validator from "./modules/validator";

window.addEventListener("DOMContentLoaded", () => {
  // Маски
  mask();

  // Валидация форм
  validator();

  // Кастомный выпадающий список
  select2();
});

// Открытие и закрытие формы отправки письма start

const buttonThatOpensTheForm = document.querySelector(".contacts-btn");
const openForm = document.querySelector(".email-sending-form");
const closeForm = openForm.querySelector(".email-sending-form-close-btn");
const setFocusNameInput = openForm.querySelector(".email-sending-form-data");
const validationForm = openForm.querySelector(".email-sending-form-main");
const validationUserName = openForm.querySelector(".email-sending-form-user-name");
const validationEmail = openForm.querySelector(".email-sending-form-validation");

    // Проверка localSrorage на работоспособность, так как не все браузеры поддерживают работоспособность start
    let isStorageSupport = true;
    let storage = "";

    try {
      storage = localStorage.getItem("userName");
    } catch (err) {
      isStorageSupport = false;
    }
    // Проверка localSrorage на работоспособность, так как не все браузеры поддерживают работоспособность end

  // Открывает форму отправки письма start
  buttonThatOpensTheForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    openForm.classList.add("email-sending-form-send-opened");

    if (storage) {
      validationUserName.value = storage;
    }
    if (storage) {
      validationUserName.value = storage;
      setFocusNameInput.focus();
    } else {
      validationEmail.focus(); // Установливает фокус при открытии модального окна в поле ввода логина
    }

  });
  // Открывает форму отправки письма end
  // --- //
  // Закрывает форму отправки письма start
  closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    openForm.classList.remove("email-sending-form-send-opened");
  });
  // Закрывает форму отправки письма end
  // --- //
  // Валидация формы start
  validationForm.addEventListener("submit", function (evt) {
    if (!validationUserName.value || !validationUserName.value) {
      evt.preventDefault();
      openForm.classList.remove("email-sending-form-modal-error");
      openForm.offsetWidth = openForm.offsetWidth;
      openForm.classList.add("email-sending-form-modal-error"); // Если данные не проходят валидацию в форме
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", validationUserName.value);
      }
    }
  });
  // Валидация формы end
  // --- //
  // Если модальное окно открыто, то при нажатии клавиши Esc оно закрывается start
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (openForm.classList.contains("email-sending-form-send-opened")) {
        evt.preventDefault();
        openForm.classList.remove("email-sending-form-send-opened");
        openForm.classList.remove("email-sending-form-modal-error"); // Если данные не проходят валидацию в форме
      }
    }
  });
  // Если модальное окно открыто, то при нажатии клавиши Esc оно закрывается end


// Открытие и закрытие формы отправки письма end

import '../styles/ContactStyle.css';

export default {
  name: "TestComponent",
  mounted() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('.send_button');
    const fullNameInput = form.querySelector('#fullNameInput');
    const phoneInput = form.querySelector('#phoneInput');

    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем отправку формы по умолчанию

      // Проверяем каждое поле формы на заполненность
      const inputs = form.querySelectorAll('input[type="text"]');
      const select = form.querySelector('select');
      let isFormValid = true;

      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          isFormValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      if (select.value === 'Выберите...') {
        isFormValid = false;
        select.classList.add('error');
      } else {
        select.classList.remove('error');
      }

      // Проверяем значение поля ФИО
      const fullNameValue = fullNameInput.value.trim();
      const fullNamePattern = /^[а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+$/;
      if (!fullNamePattern.test(fullNameValue)) {
        isFormValid = false;
        fullNameInput.classList.add('error');
      } else {
        fullNameInput.classList.remove('error');
      }

      // Проверяем значение поля телефона
      const phoneValue = phoneInput.value.trim();
      const phonePattern = /^(\+7|\+3)\d{9,11}$/;
      if (!phonePattern.test(phoneValue)) {
        isFormValid = false;
        phoneInput.classList.add('error');
      } else {
        phoneInput.classList.remove('error');
      }

      if (isFormValid) {
        // Если форма заполнена корректно, можно отправить данные
        form.submit();
      } else {
        // Форма содержит незаполненные поля или неверно заполненные поля, выводим сообщение об ошибке
        alert('Пожалуйста, заполните все поля формы корректно.');
        const firstInvalidField = form.querySelector('.error');
        if (firstInvalidField) {
          firstInvalidField.focus(); // Устанавливаем фокус на первое незаполненное или неверно заполненное поле
        }
      }
    });
  }
};
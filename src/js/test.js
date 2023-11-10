
import '../styles/TestStyle.css'
export default {
    name: "TestComponent",
    mounted() {
        const form = document.querySelector('form');
        const submitButton = form.querySelector('.send_button');

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


            if (isFormValid) {
                // Если форма заполнена корректно, можно отправить данные
                form.submit();
            } else {
                    // Форма содержит незаполненные поля, выводим сообщение об ошибке
                    alert('Пожалуйста, заполните все поля формы.');
                    const firstInvalidField = form.querySelector('.error');
                    if (firstInvalidField) {
                        firstInvalidField.focus(); // Устанавливаем фокус на первое незаполненное поле
                    }
                }
            });
        }
    }

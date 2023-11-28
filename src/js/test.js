import '../styles/TestStyle.scss';
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

export default {
    name: "TestComponent",
    mounted() {
        updatePageHistory();

        const form = $('form');
        const submitButton = form.find('.send_button');

        submitButton.on('click', function(event) {
            event.preventDefault(); // Отменяем отправку формы по умолчанию

            // Проверяем каждое поле формы на заполненность
            const inputs = form.find('input[type="text"]');
            const select = form.find('select');
            let isFormValid = true;

            inputs.each(function() {
                const input = $(this);
                if (input.val().trim() === '') {
                    isFormValid = false;
                    input.addClass('error');
                } else {
                    input.removeClass('error');
                }
            });

            if (select.val() === 'Выберите...') {
                isFormValid = false;
                select.addClass('error');
            } else {
                select.removeClass('error');
            }

            if (isFormValid) {
                // Если форма заполнена корректно, можно отправить данные
                form.submit();
            } else {
                // Форма содержит незаполненные поля, выводим сообщение об ошибке
                alert('Пожалуйста, заполните все поля формы.');
                const firstInvalidField = form.find('.error').first();
                if (firstInvalidField.length) {
                    firstInvalidField.focus(); // Устанавливаем фокус на первое незаполненное поле
                }
            }
        });
    },
};
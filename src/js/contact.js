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

    var calendarContainer = document.getElementById('calendar');
    var monthSelect = document.getElementById('monthSelect');
    var yearSelect = document.getElementById('yearSelect');

    // Функция для генерации календаря
    function generateCalendar(year, month) {
      var calendarTable = document.createElement('table');
      calendarTable.classList.add('calendar');

      // Создаем заголовок с названиями дней недели
      var headerRow = document.createElement('tr');
      var daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

      for (var i = 0; i < daysOfWeek.length; i++) {
        var headerCell = document.createElement('th');
        headerCell.textContent = daysOfWeek[i];
        headerRow.appendChild(headerCell);
      }

      calendarTable.appendChild(headerRow);

      // Получаем первый день месяца
      var firstDay = new Date(year, month, 1);
      var startingDay = firstDay.getDay();

      // Определяем количество дней в месяце
      var monthLength = new Date(year, month + 1, 0).getDate();

      // Создаем ячейки для дней месяца
      var day = 1;

      for (i = 0; i < 6; i++) {
        var weekRow = document.createElement('tr');

        for (var j = 0; j < 7; j++) {
          if (i === 0 && j < startingDay) {
            var dayCell = document.createElement('td');
            weekRow.appendChild(dayCell);
          } else if (day > monthLength) {
            break;
          } else {
            var dayCel = document.createElement('td');
            dayCel.textContent = day;
            dayCel.addEventListener('click', selectDate);
            weekRow.appendChild(dayCel);
            day++;
          }
        }

        calendarTable.appendChild(weekRow);

        if (day > monthLength) {
          break;
        }
      }

      return calendarTable;
    }

    // Функция для обновления календаря при изменении выбранных значений
    function updateCalendar() {
      var selectedYear = parseInt(yearSelect.value);
      var selectedMonth = parseInt(monthSelect.value);

      // Удаляем предыдущий календарь (если есть)
      while (calendarContainer.firstChild) {
        calendarContainer.removeChild(calendarContainer.firstChild);
      }

      // Генерируем новый календарь
      var newCalendar = generateCalendar(selectedYear, selectedMonth);
      calendarContainer.appendChild(newCalendar);
    }

    // Функция для выбора даты
    function selectDate(event) {
      var selectedDay = event.target.textContent;
      var selectedMonth = parseInt(monthSelect.value);
      var selectedYear = parseInt(yearSelect.value);

      var selectedDateInput = document.getElementById('selectedDateInput');
      selectedDateInput.value = selectedDay + '.' + (selectedMonth + 1) + '.' + selectedYear;

      console.log('Выбрана дата:', selectedDay, selectedMonth, selectedYear);
    }

    // Заполняем выпадающие списки для выбора года и месяца
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();

    for (var i = currentYear - 100; i <= currentYear + 10; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.textContent = i;

      if (i === currentYear) {
        option.selected = true;
      }

      yearSelect.appendChild(option);
    }

    //На изменение месяца или года, обновление календаря
    yearSelect.addEventListener("change", function() {
      updateCalendar();
    });
    monthSelect.addEventListener("change", function() {
      updateCalendar();
    
    document.getElementById("selectedDateInput").addEventListener("focus", function() {
      showCalendar();
    });
      
    // Обработчик события ухода фокуса с поля ввода даты
    document.getElementById("selectedDateInput").addEventListener("blur", function() {
      hideCalendar();
    });

    });
    monthSelect.selectedIndex = currentMonth;

    // Функция для показа календаря
    function showCalendar() {
      var input = document.getElementById('selectedDateInput');
      var calendar = document.getElementById('calendar');
      var inputRect = input.getBoundingClientRect();

      calendar.style.display = 'block';
      calendar.style.position = 'absolute';
      calendar.style.top = inputRect.bottom + 'px';
      calendar.style.left = inputRect.left + 'px';
    }

    // Функция для скрытия календаря
    function hideCalendar() {
      var calendar = document.getElementById('calendar');
      calendar.style.display = 'none';
    }

    // Генерируем календарь при загрузке страницы
    var initialCalendar = generateCalendar(currentYear, currentMonth);
    calendarContainer.appendChild(initialCalendar);

  }
};
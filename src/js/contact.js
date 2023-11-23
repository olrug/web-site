import '../styles/ContactStyle.css';
import { updatePageHistory } from './historyFunction';

export default {
  name: "TestComponent",
  mounted() {
    updatePageHistory();

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

    // Получаем элементы DOM
var calendarContainer = document.getElementById("calendarContainer");
var yearSelect = document.getElementById("yearSelect");
var monthSelect = document.getElementById("monthSelect");
var calendar = document.getElementById("calendar");
var selectedDateInput = document.getElementById("selectedDateInput");

// Функция для создания списка выбора года
function populateYearSelect() {
  var currentYear = new Date().getFullYear();
  var minYear = currentYear - 50;
  var maxYear = currentYear + 50;

  for (var year = minYear; year <= maxYear; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
  }
}

// Функция для создания календаря
function createCalendar(year, month) {
  // Получаем элементы календаря
  var header = document.createElement("div");
  header.innerHTML = getMonthName(month) + " " + year;
  calendar.innerHTML = "";
  calendar.appendChild(header);

  var table = document.createElement("table");
  var daysInMonth = getDaysInMonth(year, month);
  var firstDay = getFirstDay(year, month);

  // Создаем заголовки таблицы
  var thead = document.createElement("thead");
  var tr = document.createElement("tr");
  var weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  for (var i = 0; i < weekdays.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = weekdays[i];
    tr.appendChild(th);
  }

  thead.appendChild(tr);
  table.appendChild(thead);

  // Создаем ячейки для дней месяца
  var tbody = document.createElement("tbody");
  var day = 1;

  for (i = 0; i < 6; i++) {
    tr = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      var td = document.createElement("td");

      if (i === 0 && j < firstDay) {
        // Пустая ячейка до первого дня месяца
        td.innerHTML = "";
      } else if (day > daysInMonth) {
        // Пустая ячейка после последнего дня месяца
        break;
      } else {
        // Ячейка с датой
        td.innerHTML = day;
        td.dataset.day = day;
        td.dataset.month = month;
        td.dataset.year = year;
        td.addEventListener("click", selectDate);
        day++;
      }

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  calendar.appendChild(table);
}

// Функция для получения имени месяца по индексу
function getMonthName(month) {
  var months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  return months[month];
}

// Функция для получения количества дней в месяце
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Функция для получения индекса первого дня месяца (0 - Пн, 1 - Вт, и т.д.)
function getFirstDay(year, month) {
  return new Date(year, month, 1).getDay();
}

// Функция для выбора даты
function selectDate(e) {
  var day = e.target.dataset.day;
  var month = e.target.dataset.month;
  var year = e.target.dataset.year;

  selectedDateInput.value = day + "." + (parseInt(month) + 1) + "." + year;
  calendar.style.display = "none";
}

// Добавляем обработчик события для отображения календаря при нажатии на input
selectedDateInput.addEventListener("click", function() {
  calendarContainer.style.position = "relative";
  calendarContainer.appendChild(calendar);
  calendar.style.display = "block";
  // Добавьте класс "below-input" к календарю
  calendar.classList.add("below-input");
});

// Добавляем обработчики событий для выбора года и месяца
yearSelect.addEventListener("change", function() {
  var year = parseInt(yearSelect.value);
  var month = parseInt(monthSelect.value);
  createCalendar(year, month);
});

monthSelect.addEventListener("change", function() {
  var year = parseInt(yearSelect.value);
  var month = parseInt(monthSelect.value);
  createCalendar(year, month);
});

// Инициализация календаря
populateYearSelect();
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
yearSelect.value = currentYear;
monthSelect.value = currentMonth;
createCalendar(currentYear, currentMonth);


  }
};
<template>
    <div class="ContactWrap">
        <div class="NameContactWrap">
            <h1>Контакт</h1>
        </div>
        <div class="ContactInfoWrap">
            <form id="contactForm" action="mailto:artvik48@gmail.com" method="POST">
                <p>
                    Фамилия Имя Отчество<br>
                    <input id="fullNameInput" class="txt" type="text" size="20" placeholder="Введите ФИО">
                </p>
                <p>
                    Номер телефона<br>
                    <input id="phoneInput" class="txt" type="text" size="20" placeholder="Введите номер телефона">
                </p>
                <p>
                    Дата рождения<br></p>
                    <div id="calendarContainer">
                        <div class="controls">
                          <select id="yearSelect"></select>
                          <select id="monthSelect">
                            <option value="0">Январь</option>
                            <option value="1">Февраль</option>
                            <option value="2">Март</option>
                            <option value="3">Апрель</option>
                            <option value="4">Май</option>
                            <option value="5">Июнь</option>
                            <option value="6">Июль</option>
                            <option value="7">Август</option>
                            <option value="8">Сентябрь</option>
                            <option value="9">Октябрь</option>
                            <option value="10">Ноябрь</option>
                            <option value="11">Декабрь</option>
                          </select>
                        </div>
                        <div id="calendar" style="display: none;"></div>
                        <input type="text" placeholder="Выберите дату" id="selectedDateInput" readonly>
                      </div>
                
                <p>
                    Ваш пол.<br>
                    <input type="radio" name="browser" value="male">Мужской
                    <input type="radio" name="browser" value="female">Женский
                </p>
                <p>Возраст<br>
                    <select name="list1" autofocus>
                        <option>Выберите...</option>
                        <option>0-15</option>
                        <option>16-19</option>
                        <option>20-30</option>
                        <option>31-45</option>
                        <option>45-60</option>
                        <option>61+</option>
                    </select>
                </p>
                <p>
                    E-mail.<br>
                    <input class="txt" type="text" name="email" size="20" placeholder="Введите почту">
                </p>
                <p>Комментарий<br>
                    <textarea class="coment" name="message" cols="40" rows="3"></textarea></p>
                <p>
                    <input id="submitButton" class="send_button" type="submit" value="Отправить">
                    <input class="clear_button" type="reset" value="Очистить">
                </p>
            </form>
        </div>
        <div id="modal" class="modal">
            <div class="modal-content">
              <h2>Вы действительно хотите это сделать?</h2>
              <button id="confirmButton">Да</button>
              <button id="cancelButton">Отмена</button>
            </div>
          </div>
          
    </div>
</template>

<script src="../js/contact.js"></script>
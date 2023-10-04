<template>
    <div>
        <div class="NameTestWrap">
            <h1>Тест</h1>
            <h2>Дисциплина: Управление данными</h2>
        </div>
        <div class="TestInfoWrap">
            <div>
                <form action="mailto:artvik48@gmail.com" method="POST">
                    <p>
                        Фамилия Имя Отчество<br>
                        <input class="txt" type="text" size="20" placeholder="Введите ФИО">
                    </p>
                    <p>
                        Группа
                    </p>
                    <select name="list1" autofocus>
                        <option>Выберите...</option>
                        <option disabled>1 курс</option>
                        <option>ИТ/б-23-1-о</option>
                        <option>ИТ/б-23-2-о</option>
                        <option>ИТ/б-23-3-о</option>
                        <option>ИТ/б-23-4-о</option>
                        <option disabled>2 курс</option>
                        <option >ИТ/б-22-1-о</option>
                        <option>ИТ/б-22-2-о</option>
                        <option>ИТ/б-22-3-о</option>
                        <option>ИТ/б-22-4-о</option>
                        <option disabled>3 курс</option>
                        <option>ИС/б-21-1-о</option>
                        <option>ИС/б-21-2-о</option>
                        <option>ИС/б-21-3-о</option>
                        <option>ПИ/б-21-1-о</option>
                        <option disabled>4 курс</option>
                        <option>ИС/б-20-1-о</option>
                        <option>ИС/б-20-2-о</option>
                        <option>ИС/б-20-3-о</option>
                        <option>ПИ/б-20-1-о</option>
                    </select>

                    <p>1. Какой оператор используется для обновления данных в таблице?</p>
                    <div class="radio-group1">
                        <label>
                            <input type="radio" name="group1" value="insert">
                            INSERT
                        </label>
                        <label>
                            <input type="radio" name="group1" value="update">
                            UPDATE
                        </label>
                        <label>
                            <input type="radio" name="group1" value="delete">
                            DELETE
                        </label>
                        <label>
                            <input type="radio" name="group1" value="select">
                            SELECT
                        </label>
                    </div>

                    <p>2. Какой оператор используется для удаления таблицы из базы данных?</p>
                    <div class="radio-group2">
                        <label>
                            <input type="radio" name="group2" value="create2">
                            CREATE
                        </label>
                        <label>
                            <input type="radio" name="group2" value="alter2">
                            ALTER
                        </label>
                        <label>
                            <input type="radio" name="group2" value="drop2">
                            DROP
                        </label>
                        <label>
                            <input type="radio" name="group2" value="truncate2">
                            TRUNCATE
                        </label>
                    </div>

                    <p>3. Какой оператор используется для создания новой таблицы в базе данных?</p>
                    <div class="radio-group3">
                        <label>
                            <input type="radio" name="group3" value="create3">
                            CREATE
                        </label>
                        <label>
                            <input type="radio" name="group3" value="alter3">
                            ALTER
                        </label>
                        <label>
                            <input type="radio" name="group3" value="drop3">
                            DROP
                        </label>
                        <label>
                            <input type="radio" name="group3" value="truncate3">
                            TRUNCATE
                        </label>
                    </div>
                    <p>
                        <input class="send_button" type="submit" value="Отправить">
                        <input class="clear_button" type="reset" value="Очистить">
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import '../styles/TestStyle.css'
    export default {
        name: "TestComponent"
    }
</script>
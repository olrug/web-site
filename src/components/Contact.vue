<template>
    <div class="ContactWrap">
        <div class="NameContactWrap">
            <h1>Контакт</h1>
        </div>
        <div class="ContactInfoWrap">
            <form action="mailto:artvik48@gmail.com" method="POST">
                <p>
                    Фамилия Имя Отчество<br>
                    <input class="txt" type="text" size="20" placeholder="Введите ФИО">
                </p>
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
                    <input class="send_button" type="submit" value="Отправить">
                    <input class="clear_button" type="reset" value="Очистить">
                </p>
            </form>
        </div>
    </div>
</template>

<script>
    import '../styles/ContactStyle.css'
    export default {
        name: "ContactComponent"
    }
</script>
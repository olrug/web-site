<template>
    <div class="InterestsWrap">
        <div class="NameInterestsWrap">
            <h1>Мои интересы</h1>
        </div>
        <div class="InterestsInfoWrap">
            <div class="panel">
                <ul class="panel_first">
                    <li>Мои хобби</li>
                        <ul class="panel_second">
                            <li><a href="#guitar">Игра на гитаре</a></li>
                            <li><a href="#basket">Баскетбол</a></li>
                            <li><a href="#voley">Волейбол</a></li>
                        </ul>
                    <li>Мои любимые книги</li>
                        <ul class="panel_second">
                            <li><a href="#alhimik">Пауло Коэльо - Алхимик</a></li>
                            <li><a href="#palanik">Чак Палланик - Удушье</a></li>
                            <li><a href="#psycho">Брет Истон Эллис - Американский психопат</a></li>
                        </ul>
                    <li>Моя любимая музыка</li>
                        <ul class="panel_second">
                            <li><a href="#mad">Mad Season - Lifeless Dead</a></li>   <a href=""></a>
                            <li><a href="#chains">Alice in Chains - Swing on This</a></li>
                            <li><a href="#pantera">Pantera - Cowboys from Hell</a></li>
                            <li><a href="#sound">Soundgarden - Spoonman</a></li>
                        </ul>
                    <li>Мои любимые фильмы</li>
                        <ul class="panel_second">
                            <li><a href="#inter">Интерстеллар</a></li>
                            <li><a href="#open">Опенгеймер</a></li>
                            <li><a href="#american">Американский психопат</a></li>
                        </ul>
                </ul>
            </div>
            <div class="main">
                <ul class="main_first">
                    <li>Список моих занятий</li>
                        <ul class="main_second">
                            <li>Программирование</li>
                            <li>Настольный теннис</li>
                            <li id="guitar">Игра на гитаре</li>
                            <li>Чтение книг</li>
                            <li id="basket">Баскетбол</li>
                            <li>Прослушивание музыки</li>
                            <li id="voley">Волейбол</li>
                        </ul>
                    <li>Список прочитанных книг</li>
                        <ul class="main_second">
                            <li>Михаил Булгаков — Мастер и Маргарита</li>
                            <li>Антуан де Сент-Экзюпери — Маленький принц</li>
                            <li>Федор Достоевский — Преступление и наказание</li>
                            <li>Александр Пушкин — Евгений Онегин</li>
                            <li id="palanik">Чак Палланик - Удушье</li>
                            <li>Лев Толстой — Анна Каренина</li>
                            <li>Марк Твен — Приключения Тома Сойера</li>
                            <li>Александр Пушкин — Капитанская дочка</li>
                            <li id="alhimik">Пауло Коэльо - Алхимик</li>
                            <li>Джон Толкин — Властелин колец</li>
                            <li id="psycho">Брет Истон Эллис - Американский психопат</li>
                        </ul>
                    <li>Список прослушанных песен</li>
                        <ul class="main_second">
                            <li>Red Hot Chili Peppers - Storm In A Teacup</li>
                            <li id="mad">Mad Season - Lifeless Dead</li>
                            <li>Nirvana - Oh me</li>
                            <li id="chains">Alice in Chains - Swing on This</li>
                            <li>Metalica - Master of Puppets</li>
                            <li id="pantera">Pantera - Cowboys from Hell</li>
                            <li>Sum 41 - In too Deep</li>
                            <li id="sound">Soundgarden - Spoonman</li>
                        </ul>
                    <li>Список просмотренных фильмов</li>
                        <ul class="main_second">
                            <li>Властелин колец</li>
                            <li id="american">Американский психопат</li>
                            <li>Драконий жемчуг</li>
                            <li id="open">Опенгеймер</li>
                            <li>Бойцовский клуб</li>
                            <li id="inter">Интерстеллар</li>
                        </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import '../styles/InterestsStyle.css'
    export default{
        name: 'InterestsComponent'
    }
</script>
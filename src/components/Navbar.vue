
<template>
    <div class="Navb">
        <nav>
            <ul>
                <li><router-link active-class="active" to="/">Главная страница</router-link></li>
                <li><router-link active-class="active" to="/about">Обо мне</router-link></li>
                <li><router-link active-class="active" to="/interests">Мои интересы</router-link></li>
                <li><router-link active-class="active" to="/study">Учёба</router-link></li>
                <li><router-link active-class="active" to="/photoalbum">Фотоальбом</router-link></li>
                <li><router-link active-class="active" to="/contact">Контакт</router-link></li>
                <li><router-link active-class="active" to="/test">Тест</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import '../styles/NavbarStyle.css';

    export default {
        name: 'NavbarComponent'
    };
</script>
<template>
    <div class="Navbar">
        <nav>
            <div class="current-date">{{ currentDateTime }}</div>
            <ul>
                <li><router-link active-class="active" to="/">Главная страница</router-link></li>
                <li><router-link active-class="active" to="/about">Обо мне</router-link></li>
                <li class="interests-dropdown">
                    <router-link active-class="active" to="/interests">Мои интересы</router-link>
                    <div class="dropdown-content">
                    </div>
                </li>
                <li><router-link active-class="active" to="/study">Учёба</router-link></li>
                <li><router-link active-class="active" to="/photoalbum">Фотоальбом</router-link></li>
                <li><router-link active-class="active" to="/contact">Контакт</router-link></li>
                <li><router-link active-class="active" to="/test">Тест</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script src="../js/navbar.js"></script>
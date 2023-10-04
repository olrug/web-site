import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';


router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;

    if (pageTitle) {
      document.title = `Остапович Андрей. ${pageTitle}`;
    } else {
      document.title = 'Остапович Андрей.';
    }
    
    next();
});

const app = createApp(App);
app.use(router);
app.mount('#app');
import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/NavbarComponent.vue';
import Home from '../components/HomeComponent.vue';
import About from '../components/AboutComponent.vue';
import Interests from '../components/InterestsComponent.vue';
import Study from '../components/StudyComponent.vue';
import PhotoAlbum from '../components/PhotoAlbum.vue';
import Contact from '../components/ContactComponent.vue';
import Test from '../components/TestComponent.vue';
import History from '../components/HistoryComponent.vue';

const routes = [
    {
      path: '/',
      name: '/home',
      components: {
        default: Home,
        navbar: Navbar,
      },
      meta: { title: 'Главная страница' }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: About,
        navbar: Navbar,
      },
      meta: { title: 'Обо мне' }
    },
    {
      path: '/interests',
      name: 'interests',
      components: {
        default: Interests,
        navbar: Navbar,
      },
      meta: { title: 'Интересы' }
    },
    {
      path: '/study',
      name: 'study',
      components: {
        default: Study,
        navbar: Navbar,
      },
      meta: { title: 'Учёба'}
    },
    {
      path: '/photoalbum',
      name: 'photoalbum',
      components: {
        default: PhotoAlbum,
        navbar: Navbar,
      },
      meta: {title: 'Фотоальбом'}
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: Contact,
        navbar: Navbar,
      },
      meta: { title: 'Контакты'}
    },
    {
      path: '/test',
      name: 'test',
      components: {
        default: Test,
        navbar: Navbar,
      },
      meta: { title: 'Тест по дисциплине'}
    },
    {
      path: '/history',
      name: 'history',
      components: {
        default: History,
        navbar: Navbar,
      },
      meta: { title: 'История посещений'}
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  
  export default router;
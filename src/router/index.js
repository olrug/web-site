import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Interests from '../components/Interests.vue';
import Study from '../components/Study.vue';
import PhotoAlbum from '../components/PhotoAlbum.vue';
import Contact from '../components/Contact.vue';
import Test from '../components/Test.vue';

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
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  
  export default router;
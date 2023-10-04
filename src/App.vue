<template>
  <Navbar />
  <main class="content">
      <router-view />
  </main>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import './styles/AppStyle.css'

  export default {
      name: 'App',
      components: {
          Navbar
      }
  }
</script>
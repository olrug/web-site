<template>
  <NavbarComponent />
  <main class="content">
      <router-view />
  </main>
</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue';
  import './styles/AppStyle.css'

  export default {
      name: 'App',
      components: {
          NavbarComponent
      }
  }
</script>
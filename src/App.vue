<template>
  <div id="app">
<font-awesome-icon icon="user-secret" />
    <Navbar />
    <br /><br />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
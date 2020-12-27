<template>
  <div id="app">
    <navbar />
    <br /><br />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
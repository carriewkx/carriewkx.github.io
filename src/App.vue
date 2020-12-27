<template>
  <div id="app">
<font-awesome-icon icon="user-secret" />
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
<template>
  <div id="app">
    <navbar />
     <br /><br />
    <aboutme />
   
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Aboutme from "./components/aboutme.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Aboutme
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
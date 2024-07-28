<template>
  <nav class="navbar navbar-expand-lg">
    <div
      class="navbar-nav font-weight-light float-lg-left float-xl-left float-sm-left"
    >
      <a class="navbar-brand font-weight-bold" href="/">
        Kaixuan (Carrie) Wang</a
      >

      <router-link class="nav-item nav-link" to="/">About Me 👩🏻 </router-link>
      <router-link class="nav-item nav-link" to="experience">Experience 📎</router-link>
      <router-link class="nav-item nav-link" to="projects">Projects 💾 </router-link>
      <router-link class="nav-item nav-link" to="photography">Photography 📷 </router-link>
      <router-link class="nav-item nav-link" to="blog">Blog 📝</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
a {
  color: black;
}
.navbar-nav {
  padding-left: 5%;
}
.navbar-nav .nav-item {
  color: black;
}
.navbar-nav .nav-item:hover {
  color: rgb(49,97,36);
}

.navbar-nav .nav-item:focus {
  color: rgb(49,97,36);
}
</style>
<template>
  <nav class="navbar navbar-expand-lg ml-0">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/aboutme">About Me 👩🏻</router-link>
      <router-link class="nav-item nav-link" to="Experience"
        >Experience 📎</router-link
      >
      <router-link class="nav-item nav-link" to="Projects"
        >Projects ⚒</router-link
      >
      <router-link class="nav-item nav-link" to="Projects"
        >Photography 📷</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
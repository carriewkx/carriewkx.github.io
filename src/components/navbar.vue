<template>
  <nav class="navbar navbar-expand-lg ml-0">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to='Aboutme'>About Me 👩🏻</router-link>
      <router-link class="nav-item nav-link" to="Experience"
        >Experience 📎</router-link
      >
      <router-link class="nav-item nav-link" to=""
        >Projects ⚒</router-link
      >
      <router-link class="nav-item nav-link" to=""
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
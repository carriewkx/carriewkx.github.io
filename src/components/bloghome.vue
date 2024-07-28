<template>
  <!-- https://github.com/vycoder/vue-markdown-blog -->
  <div class="home font-weight-light">
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <h2 class="center">{{ section }}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({ name: entry.id })">
              {{ entry.title }}
              <span class="subtitle font-weight-light">{{ entry.date }}</span>
            </h3>
            <p>{{ entry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "../assets/blog.json";
export default {
  name: "bloghome",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
}

h2 {
  text-transform: capitalize;
  margin-bottom: 2rem;
  font-weight: 300;
  color: grey;
}
h3 {
  font-size: 1.3rem;
  color: rgb(49,97,36);
  margin-bottom: 0;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    font-size: 0.8rem;
    color: grey;

    float: right;
    font-weight: normal;
  }
}
p {
  margin-top: 0.4rem;
}
.sections {
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
}
.group {
  margin-bottom: 4rem;
}
</style>
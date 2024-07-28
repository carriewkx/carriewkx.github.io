<template>
  <main class="px-3">
    <body>
      <div class="row">
        <div
          class="col-sm-6 col-md-4"
          v-for="data in content.pics"
          v-bind:key="data"
        >
          <div id="fileNames"></div>
          <br />
          <img :src="require('@/assets/photography/' + data)" />
        </div>
      </div>
    </body>
  </main>
</template>

<script>
export default {
  name: "photography",
  data() {
    return {
      content: {
        pics: [],
      },
    };
  },

  methods: {
    importAll(r) {
      var keys = r.keys();

      for (var i = 0; i < Object.keys(keys).length; i++) {
        this.content.pics.push(keys[i].replace("./", ""));
      }
    },
  },
  created() {
    this.importAll(require.context("../assets/photography/", true));
  },
};
</script>
<style scoped>
img {
  width: 100%;
  max-width: 500px;
}
a {
  color: rgb(49,97,36);
}
</style>


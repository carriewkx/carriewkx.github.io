<template>
  <div class="blog">
    <router-view />
    <router-link to="/blog" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>
<style lang="scss" scoped>
.blog {
  max-width: 60vw;
  margin: 10rem auto;
  .back {
    background-color: #754938;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: 0.5rem;
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      background-color: transparent;
      color: #754938;
    }
  }
  ::v-deep {
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #467362;
    }
      h2 {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      color: #32774c;
      font-weight: 400;
    }
    h4 {
      margin-bottom: 3rem;
      color: #35495e;
    }
    pre {
      overflow-x: auto;
      background-color: #35495e;
      color: white;
      border-radius: 0.3rem;
      padding: 1rem;
    }
    img {
      max-width: 100%;
    }
    p {
      color: rgb(78, 78, 78);
      font-size: 0.95rem;
      line-height: 1.7rem;
      font-weight: 300;
    }
  }
}
</style>
<template>
  <main class="px-3">
    <div class="container-fluid justify-content-center text-center">
      <!-- <h1>Kaixuan (Carrie) Wang</h1>
      <br /> -->
      <br />
      <img
        src="../assets/carrie-cropped.png"
        class="img-fluid w-50 p-3 float-lg-left float-xl-left"
        alt=""
      />
      <br />
      <br />
      <br />
      <br />
      <div class="container-fluid justify-content-center text-center">
        <p class="font-weight-light text-left auto">
          I am currently a fourth year student from University of Toronto 🇨🇦
          computer engineering 💻. <br /><br />
          I will be joining
          <a class="text-link" href="https://www.rbccm.com/en/"
            >RBC Capital Markets</a
          >
          🏦 new grad rotational program after graduation.
          <br /><br />
          In my free time, I enjoy taking pictures 🎞, reading books 📚 and
          watching movies 🎬. <br /><br />
          My current reading is "<a
            class="text-link"
            href="https://www.gatesnotes.com/Books/Shoe-Dog"
          >
            Shoe Dog </a
          >". My favorite movie is "<a
            class="text-link"
            href="https://www.imdb.com/title/tt0264464/"
            >Catch Me If You Can.</a
          >" <br /><br />
        </p>
      </div>
    </div>
    <div
      class="container-fluid align-items-center fa-2x d-flex justify-content-center"
    >
      <a class="icon-link" href="https://github.com/carriewkx">
        <span>
          <i class="fab fa-github"></i> </span
      ></a>
      <a
        class="icon-link"
        href="https://www.linkedin.com/in/kaixuan-carrie-wang/"
      >
        <span> <i class="fab fa-linkedin"></i> </span
      ></a>
      <a class="icon-link" href="https://www.instagram.com/carriewkx/">
        <span>
          <i class="fab fa-instagram"></i> </span
      ></a>
    </div>
  </main>
</template>

<script>
export default {
  name: "Aboutme",
};
</script>

<style scoped>
img {
  max-height: 355x;
  max-width: 355px;
  min-height: 205px;
  min-width: 205px;
  border: 10px solid transparent;
}
p {
  padding-left: 5%;
}
span {
  padding: 5%;
}

a.text-link {
  color: rgb(153, 71, 39);
}

a.icon-link {
  color: rgb(153, 71, 39);
  padding: 5%;
}
</style>

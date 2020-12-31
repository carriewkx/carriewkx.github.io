<template>
  <main class="px-3">
    <!-- Page Content -->
    <div
      class="container"
      v-for="data in content.project_list"
      v-bind:key="data.id"
    >
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <a href="#"
              ><img
                class="card-img-top"
                src="require('../assets/' + data.img + 'png')"
                alt="pic"
            /></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ data.project_name }}</a>
              </h4>
              <p class="date">{{ data.date }}</p>
              <p class="card-text">
                {{ data.description }}
              </p>
              <span
                class="badge badge-light"
                v-for="label in data.tag"
                v-bind:key="label"
                >{{ label }}</span
              >
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Two</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Three</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Four</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Five</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">Project Six</a>
          </h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
        </div>
      </div>
    </div> -->
      </div>
      <!-- /.row -->

      <!-- Pagination -->
      <!-- <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
    </li>
  </ul> -->
    </div>
    <!-- /.container -->
  </main>
</template>

<script>
export default {
  name: "experience",
  data() {
    return {
      content: {
        project_list: [
          {
            id: 0,
            img: "evoting",
            project_name: "Blockchain E-Voting",
            link: "https://www.facebook.com/humans.of.skule/",
            date: "Sept. 2020 - current",
            description:
              "A decentralized single transferable voting system in which users’ ranked ballots are recorded in a blockchain (ethereum).",
            tag: ["Python", "Javascript", "Vue", "Solidity"],
          },
        ],
      },
    };
  },
  methods: {
    initialization() {
      document.createElement(
        "img",
        {
          attrs: {
            src: require("./../assets/evoting.png"), // this is now a module request
            alt: "Riley",
          },
        }
        //   var img_list = document.getElementsByClassName("card-img-top");
        //   for (var i = 0; i < img_list.length; i++) {
        //     // img_list[i].src = this.content.project_list[i].img;
        //     console.log( img_list[i].src )

        //   }
      );
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
  mounted() {
    this.initialization();
  },
};
</script>
<style scoped>
</style>


<template>
  <main class="px-3">
    <!-- Page Content -->
    <div class="container">
      <div class="row font-weight-light">
        <div
          class="col-lg-5 mb-4"
          v-for="data in content.project_list"
          v-bind:key="data.id"
        >
          <div class="card h-100">
           
              <!-- <img
                class="card-img-top"
                src="require('../assets/' + data.img + 'png')"
                alt="pic"
            /> -->
              <img :src="require('./../assets/' + data.img + '.png')" />
         
            <div class="card-body">
              <h4 class="card-title text-muted font-weight-light">
                <a class="name">{{ data.project_name }}</a>
              </h4>
              <p class="date">{{ data.date }}</p>
              <p class="card-text" v-for="des in data.description"
                v-bind:key="des">
                {{ des }}
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
      </div>
    </div>

  
  </main>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      content: {
        project_list: [
          {
            id: 0,
            img: "evoting",
            project_name: "Blockchain E-Voting",
            link: "#",
            date: "September 2020 - current",
            description:
              ["A decentralized single transferable voting system in which users’ ranked ballots are recorded in a blockchain (ethereum).",
              "Develop a voting mechanism to ensure cast as intended and recorded as casted functionalities.",
              "Implement encryption algorithm to protect voter privacy and voting results."],
            tag: ["Python", "Javascript", "Vue", "Solidity"],
          },
          {
            id: 1,
            img: "aps360",
            project_name: "America Sign Language Recognition",
            link: "#",
            date: "November 2019",
            description:
              [
                  "Developed a convolutional neural network model to recognize america sign language. The model is trained based on MNIST which has 27000+ training samples.",
              "Pre-processed data with greyscale filter to eliminate skin color and background distraction.",
              "Implemented baseline model utilizing support vector machine.",],
            tag: ["Python", "PyTorch", "Image Recognition"],
          },
          {
            id: 2,
            img: "mapping",
            project_name: "Mapping Application",
            link: "#",
            date: "January 2018 - April 2018",
            description:
             [ "A mapping software that generates graphical map and offers navigation functionality that targeting users' needs.",
             "Implemented Dijkastra and greedy algorithm to solve tranveling salesman problem."],
            tag: ["C++"],
          },
               {
            id: 3,
            img: "dontkill",
            project_name: "FPGA Video Game",
            link: "https://github.com/carriewkx/dont_kill",
            date: "November 2017",
            description:
             [ "A typing video game that reads user input from PS/2 keyboard and compares inputted keycode to a sequence of stored keycodes displayed on VGA screen using Verilog",
             "ICreated multiple-finite stage machines for reading user input, sequence comparison and level progression."],
            tag: ["Verilog"],
          },
               {
            id: 4,
            img: "assembly",
            project_name: "Analog to Digital Converter",
            link: "https://github.com/carriewkx/audio_wave_interpreter",
            date: "March 2018",
            description:
             [ "Used Assembly to build an analog to digital converter that converts sound wave from microphone to frequency domain by implementing Fast Fourier Transform",
             "Animated waveform in time and frequency domain on VGA."],
            tag: ["Assembly"],
          },
        ],
      },
    };
  },
  methods: {
   initialization() {
      var name_list = document.getElementsByClassName("name");
      for (var i = 0; i < name_list.length; i++) {
        name_list[i].href = this.content.project_list[i].link;
      }
   }
  },
  mounted() {
    this.initialization();
  },
};
</script>
<style scoped>
img {
  width: 100%;
  max-width: 500px;
}
a{
     color: rgb(49,97,36);
}
span {
  color: rgb(40, 86, 51);
}
</style>


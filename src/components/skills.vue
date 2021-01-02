<template>
  <main class="px-3">
    <div class="modal-body">
      <!-- <div class="col-md-6"> -->
      <h5 class="skill-type font-weight-light d-flex justify-content-center">
        Programming Languages
      </h5>

      <!-- first column -->
      <div v-for="data in content.prog_lan_list" v-bind:key="data.id">
        <br />
        <p class="skill font-weight-light d-flex justify-content-center">
          {{ data.skill }}
        </p>
        <div class="d-flex justify-content-center">
          <div class="progress">
            <div class="progress-bar progress-bar-col-1" role="progressbar">
              {{ data.level }}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h5 class="skill-type font-weight-light d-flex justify-content-center">
        Others
      </h5>
      <br />
      <!-- second column -->
      <div v-for="data in content.other_list" v-bind:key="data.id">
        <br />
        <p class="skill font-weight-light d-flex justify-content-center">
          {{ data.skill }}
        </p>
        <div class="d-flex justify-content-center">
          <div class="progress">
            <div class="progress-bar progress-bar-col-2" role="progressbar">
              {{ data.level }}
            </div>
          </div>
        </div>
      </div>
      <br />
      <!-- </div> -->
      <!-- <div class="col-md-6">
        <h5 class="skill-type font-weight-light d-flex justify-content-left">
          Others
        </h5>
        <br />
       
        <div v-for="data in content.other_list" v-bind:key="data.id">
          <br />
          <p class="skill font-weight-light d-flex justify-content-left">
            {{ data.skill }}
          </p>
          <div class="d-flex justify-content-left">
            <div class="progress">
              <div class="progress-bar progress-bar-col-2" role="progressbar">
                {{ data.level }}
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </main>
</template>

<script>
export default {
  name: "skills",
  data() {
    return {
      content: {
        prog_lan_list: [
          {
            id: 0,
            skill: "C/C++",
            percentage: 65,
            level: "intermediate",
          },
          {
            id: 1,
            skill: "Python",
            percentage: 60,
            level: "intermediate",
          },
          {
            id: 2,
            skill: "Java",
            percentage: 75,
            level: "intermediate",
          },
          {
            id: 3,
            skill: "HTML/CSS",
            percentage: 25,
            level: "basic",
          },
          {
            id: 4,
            skill: "Matlab",
            percentage: 25,
            level: "basic",
          },
          {
            id: 5,
            skill: "Javascript",
            percentage: 25,
            level: "basic",
          },
          {
            id: 6,
            skill: "Solidity",
            percentage: 25,
            level: "basic",
          },
        ],
        other_list: [
          {
            id: 0,
            skill: "Agile",
            percentage: 65,
            level: "intermediate",
          },
          {
            id: 1,
            skill: "Adobe Lightroom",
            percentage: 90,
            level: "advanced",
          },
          {
            id: 2,
            skill: "Machine Learning",
            percentage: 75,
            level: "intermediate",
          },
          {
            id: 3,
            skill: "git",
            percentage: 75,
            level: "intermediate",
          },
        ],
      },
    };
  },
  methods: {
    track() {
      this.$ga.page("/");
    },
    //     getSkillList() {
    //       var json = require("./../../public/skills.json"); //(with path)
    //       this.skillslist = json;
    //       // console.log(json);
    //       //   fetch("./../../public/skills.json")
    //       //     // .then((response) => response.json())
    //       //     .then(res => res.text())          // convert to plain text
    //       //     .then(data => console.log(data));
    //     },

    create_skill_len() {
      var bar_list_1 = document.getElementsByClassName("progress-bar-col-1");
      for (var i = 0; i < bar_list_1.length; i++) {
        bar_list_1[i].style.width =
          this.content.prog_lan_list[i].percentage + "%";
      }
      var bar_list_2 = document.getElementsByClassName("progress-bar-col-2");
      for (var j = 0; j < bar_list_2.length; j++) {
        bar_list_2[j].style.width = this.content.other_list[j].percentage + "%";
      }
    },
  },
  mounted() {
    this.create_skill_len();
  },
};
</script>


<style scoped>
.progress-bar {
  background-color: rosybrown;
}
.progress{
  width: 40%;
}

.skill{
  color:rgb(119, 118, 118)
}

@media (max-width: 490px) {
  .progress{
  width: 70%;
}

}

</style>

<template>
  <main class="px-3">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-7 offset-md-2">
          <ul class="timeline">
            <li v-for="data in content.experience_list" v-bind:key="data.id">
              <a class="org" target="_blank" href="data.link"
                >{{ data.org }}
              </a>
              <p class="float-right date">{{ data.date }}</p>
              <p class="position">{{ data.position }}</p>
              <p
                class="description"
                v-for="des in data.description"
                v-bind:key="des"
              >
                {{ des }}
              </p>
              <span
                class="badge badge-light"
                v-for="label in data.tag"
                v-bind:key="label"
                >{{ label }}</span
              >
              <br />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "experience",
  data() {
    return {
      content: {
        experience_list: [
          {
            id: 0,
            org: "Humans of Skule 🎤",
            link: "https://www.facebook.com/humans.of.skule/",
            position: "Head of Photography",
            date: "Sept. 2020 - current",
            description: [
              "Responsible for interviewing candidates, organize photography team meeting.",
            ],
            tag: ["Communication", "Leadership"],
          },
          {
            id: 1,
            org: "Royal Bank of Canada Capital Markets 🏦",
            link: "https://www.rbccm.com/en/expertise/electronic-trading.page",
            position: "Technical Systems Analyst Intern",
            date: "May 2019 - Sept. 2020",
            description: [
              "Provided automation expertise for multiple applications in the electronic trading stack.",
              "Designed and developed testing framework for algorithmic trading platforms resulting in increase of reliability.",
            ],
            tag: ["Java", "Cucumber", "Selenium", "MongoDB"],
          },

          {
            id: 2,
            org: "SAIC Volkswagen 🚙",
            link: "https://www.svw-volkswagen.com/",
            position: "Electronic Purchasing Division Summer Intern",
            date: "July 2018 - Aug. 2018",
            description: [
              "Translated automobile entertaining system and smart home technology contracts.",
              "Researched and analyzed automobile chip industry and identified potential supplier."
            ],
            tag: ["Microsoft Office"],
          },
          {
            id: 3,
            org: "aUToronto 🏎",
            link: "https://www.autodrive.utoronto.ca/",
            position: "Marketing Outreach Team Mmember",
            date: "Sept. 2017 - April 2018",
            description: "",
            tag: ["communication"],
          },
          {
            id: 4,
            org: "Toronto Rehabilitation Engineering Laboratory 🚶",
            link: "http://reltoronto.ca/",
            position: "Summer Research Student",
            date: "May 2017 - Aug. 2017",
            description: ["Analyzed and investigated dynamic balance of elderly people utilizing statistic knowledge and Matlab."],
            tag: ["Matlab"],
          },
          {
            id: 5,
            org: "UofT Aerospace Team 🛩",
            link: "https://www.utat.ca/",
            position: "Unmanned Aerial Vehicle Avionic Team Memeber",
            date: "Sept. 2016 - April 2017",
            description: ["Vehicle failsafe testing with Autopilot."],
            tag: [],
          },
        ],
      },
    };
  },
  methods: {
    initialization() {
      // var org_list = document.getElementsByClassName("org");
      // for (var i = 0; i < org_list.length; i++) {
      //   org_list[i].href = this.content.experience_list[i].link;
      // }
    },
  },
  mounted() {
    this.initialization();
  },
};
</script>
<style scoped>
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: rgb(114, 68, 49);
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid rgb(153, 71, 39);
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}

.org {
  color: rgb(0, 0, 0);
  font-weight: normal;
  font-size: large;
}
.date {
  font-weight: 200;
}
.position {
  color: rgb(153, 71, 39);
  font-weight: 300;
}
.description {
  font-weight: 200;
}

span {
  color: rgb(90, 65, 48);
}
</style>


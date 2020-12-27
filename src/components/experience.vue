<template>
  <main class="px-3">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-7 offset-md-2">
          <ul class="timeline">
            <li>
              <a
                class="org"
                target="_blank"
                href="https://www.facebook.com/humans.of.skule/"
                >Humans of Skule 🎤</a
              >
              <p class="float-right date">Sept. 2020 - current</p>
              <p class="position">Head of Photography</p>
              <p class="description">
                Responsible for interviewing candidates, organize photography
                team meeting.
              </p>
              <span class="badge badge-light">Communication</span>
              <span class="badge badge-light">Leadership</span>
            </li>
            <br />
            <li>
              <a
                class="org"
                target="_blank"
                href="https://www.rbccm.com/en/expertise/electronic-trading.page"
                >Royal Bank of Canada Capital Markets 🏦</a
              >
              <p class="float-right date">May 2019 - Sept. 2020</p>
              <p class="position">Technical Systems Analyst Intern</p>
              <p class="description">
                Automated testing for platforms within electronic trading
                stack.
              </p>
              <span class="badge badge-light">Java</span>
              <span class="badge badge-light">Cucumber</span>
              <span class="badge badge-light">Selenium</span>
              <span class="badge badge-light">MongoDB</span>
            </li>
                 <br />
            <li>
              <a
                class="org"
                target="_blank"
                href="https://www.autodrive.utoronto.ca/"
                >aUToronto 🏎</a
              >
              <p class="float-right date">Sept. 2017 - April 2018</p>
              <p class="position">Marketing Outreach Team Mmember</p>
              <p class="description">
              </p>
              <span class="badge badge-light">Communication</span>
            </li>
            <br />
            <li>
              <a
                class="org"
                target="_blank"
                href="https://www.svw-volkswagen.com/"
                >SAIC Volkswagen 🚙</a
              >
              <p class="float-right date">July 2018 - Aug. 2018</p>
              <p class="position">Electronic Purchasing Division Summer Intern</p>
              <p class="description">
                Translated automobile entertaining system and smart home technology contracts.
              </p>
              <span class="badge badge-light">Microsoft Office</span>
            </li>
            <br />
            <li>
              <a
                class="org"
                target="_blank"
                href="http://reltoronto.ca/"
                >Toronto Rehabilitation Engineering Laboratory 🚶</a
              >
              <p class="float-right date">May 2017 - Aug. 2017</p>
              <p class="position">Summer Research Student</p>
              <p class="description">
                Analyzed and investigated dymanic balance data.
              </p>
              <span class="badge badge-light">Matlab</span>
            </li>
               <br />
            <li>
              <a
                class="org"
                target="_blank"
                href="https://www.utat.ca/"
                >UofT Aerospace Team 🛩</a
              >
              <p class="float-right date">Sept. 2016 - April 2017</p>
              <p class="position">Unmanned Aerial Vehicle Avionic Team</p>
              <p class="description">
                Vehicle failsafe testing with Autopilot.
              </p>
              <span class="badge badge-light"></span>
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


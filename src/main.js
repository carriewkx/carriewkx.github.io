// main.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false;
Vue.use(VueRouter);

import Aboutme from './components/aboutme.vue';
import Experience from './components/experience.vue';


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    { path: '/', name:'Aboutme',component: Aboutme },
    { path: '/experience', name:'Experience',component: Experience },
  ]
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
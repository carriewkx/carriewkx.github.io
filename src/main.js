// main.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(VueRouter);


import Aboutme from './components/aboutme.vue';
import Experience from './components/experience.vue';
import Skills from './components/skills.vue';
import Photography from './components/photography.vue';
import Blog from './components/bloghome.vue';
import Projects from './components/projects.vue';
import BlogEntries from './assets/blog.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./assets/blog/${section}/${child.id}.md`)
  }))
  return {
    path: `/`,
    name: section,
    component: () => import('./components/blogpage.vue'),
    children
  }
})



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    { path: '/', name: 'aboutme', component: Aboutme },
    { path: '/experience', name: 'experience', component: Experience },
    { path: '/skills', name: 'skills', component: Skills },
    { path: '/photography', name: 'photography', component: Photography },
    { path: '/blog', name: 'bloghome', component: Blog },
    { path: '/projects', name: 'projects', component: Projects }, ...blogRoutes
  ]
});
Vue.use(VueAnalytics, {
  id: 'UA-186369277-1',
  router
});





new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
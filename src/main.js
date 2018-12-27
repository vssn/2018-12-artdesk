// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Contact from './components/Contact.vue';
import CurriculumVitae from './components/CV.vue';
import Skills from './components/Skills.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HelloWorld },
  { path: '/skills', component: Skills },
  { path: '/cv', component: CurriculumVitae },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
});

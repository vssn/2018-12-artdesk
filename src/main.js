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

// 1. Define route components.
// These can be imported from other files
const Bar = { template: '<div>bar</div>' };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HelloWorld },
  { path: '/skills', component: Skills },
  { path: '/cv', component: CurriculumVitae },
  { path: '/contact', component: Contact },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
});
